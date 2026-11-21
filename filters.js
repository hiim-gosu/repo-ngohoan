// Pure helpers for the repo table: decode repos.json, filter, sort and map
// filter state to/from the URL. No DOM access, so Node tests can load it.
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.RepoFilters = api;
})(typeof self !== "undefined" ? self : this, function () {
  const DEFAULTS = Object.freeze({
    q: "",
    cat: "all",
    lang: "all",
    country: "all",
    act: "all",
    period: "all",
    sort: "stars_1d",
    page: 1,
    docs: true, // false hides repos flagged is_docs
    vi: false, // true keeps only repos that support Vietnamese
  });

  const PERIODS = ["all", "1d", "7d", "30d"];
  const ACTIVITY = ["all", "active", "slowing", "inactive"];

  // Each sort is a chain of keys, all descending; null values always go last.
  const SORT_CHAINS = {
    stars_1d: ["stars_1d", "stars_7d", "stars_30d", "total_stars"],
    stars_7d: ["stars_7d", "stars_1d", "total_stars"],
    stars_30d: ["stars_30d", "stars_7d", "total_stars"],
    rising_7d: ["rising_7d", "stars_7d", "total_stars"],
    pushed_at: ["pushed_at", "total_stars"],
    total_stars: ["total_stars"],
    created_at: ["created_at", "total_stars"],
    streak: ["consecutive_days", "stars_1d", "total_stars"],
  };
  const SORTS = Object.keys(SORT_CHAINS);

  /** Turn repos.json (columnar or older list-of-objects) into repo objects. */
  function decodeRepos(data) {
    const fields = data && data.fields;
    const rows = (data && data.repos) || [];
    const repos = fields ? rows.map((row) => Object.fromEntries(fields.map((f, i) => [f, row[i]]))) : rows.slice();
    return repos
      .filter((r) => r && typeof r.full_name === "string" && r.full_name.includes("/"))
      .map((r) => {
        const [owner, name] = r.full_name.split("/");
        r.owner = r.owner || owner;
        r.name = r.name || name;
        r.url = r.url || `https://github.com/${r.full_name}`;
        r.avatar_url = r.avatar_url || `https://github.com/${r.owner}.png?size=80`;
        r._hay = `${r.full_name} ${r.description || ""} ${r.language || ""} ${(r.topics || []).join(" ")}`.toLowerCase();
        return r;
      });
  }

  function compareDesc(a, b) {
    const aNull = a === null || a === undefined || a === "";
    const bNull = b === null || b === undefined || b === "";
    if (aNull || bNull) return aNull === bNull ? 0 : aNull ? 1 : -1;
    if (typeof a === "string" || typeof b === "string") return String(b).localeCompare(String(a));
    return b - a;
  }

  function sortRepos(list, sort) {
    const chain = SORT_CHAINS[sort] || SORT_CHAINS[DEFAULTS.sort];
    return list.slice().sort((a, b) => {
      for (const key of chain) {
        const diff = compareDesc(a[key], b[key]);
        if (diff) return diff;
      }
      return 0;
    });
  }

  function filterRepos(repos, f) {
    const q = String(f.q || "").trim().toLowerCase();
    return repos.filter((r) => {
      if (f.cat !== "all" && r.category_id !== f.cat) return false;
      if (f.lang !== "all" && r.language !== f.lang) return false;
      if (f.country !== "all" && r.country !== f.country) return false;
      if (f.act !== "all" && r.activity !== f.act) return false;
      if (!f.docs && r.is_docs) return false;
      if (f.vi && !r.supports_vi) return false;
      if (f.period !== "all" && !(Number(r[`stars_${f.period}`]) > 0)) return false;
      if (q && !(r._hay || r.full_name.toLowerCase()).includes(q)) return false;
      return true;
    });
  }

  function queryRepos(repos, f) {
    return sortRepos(filterRepos(repos, f), f.sort);
  }

  /** [[countryCode, count], ...] sorted by count, then code. */
  function countryCounts(repos) {
    const counts = new Map();
    repos.forEach((r) => {
      if (r.country) counts.set(r.country, (counts.get(r.country) || 0) + 1);
    });
    return Array.from(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }

  /** Read filter state from a query string; unknown values fall back to defaults. */
  function fromQuery(search) {
    const p = new URLSearchParams(search || "");
    const pick = (key, allowed) => {
      const v = p.get(key);
      return v && (!allowed || allowed.includes(v)) ? v : DEFAULTS[key];
    };
    const page = parseInt(p.get("page"), 10);
    const country = (p.get("country") || "").toUpperCase();
    return {
      q: p.get("q") || "",
      cat: pick("cat"),
      lang: pick("lang"),
      country: /^[A-Z]{2}$/.test(country) ? country : "all",
      act: pick("act", ACTIVITY),
      period: pick("period", PERIODS),
      sort: pick("sort", SORTS),
      page: page > 0 ? page : 1,
      docs: p.get("docs") !== "0",
      vi: p.get("vi") === "1",
    };
  }

  /** Write filter state as a query string, leaving out default values. */
  function toQuery(f) {
    const p = new URLSearchParams();
    if (f.q.trim()) p.set("q", f.q.trim());
    ["cat", "lang", "country", "act", "period", "sort"].forEach((key) => {
      if (f[key] !== DEFAULTS[key]) p.set(key, f[key]);
    });
    if (f.page > 1) p.set("page", String(f.page));
    if (!f.docs) p.set("docs", "0");
    if (f.vi) p.set("vi", "1");
    return p.toString();
  }

  /** Number of filters that differ from the defaults (search and sort excluded). */
  function activeFilterCount(f) {
    return ["cat", "lang", "country", "act", "period"].filter((k) => f[k] !== DEFAULTS[k]).length + (f.docs ? 0 : 1) + (f.vi ? 1 : 0);
  }

  /** Page numbers to show, with null for a gap: 1 … 4 5 [6] 7 8 … 60. */
  function pageWindow(page, totalPages, radius = 1) {
    const pages = [];
    for (let p = 1; p <= totalPages; p++) {
      if (p === 1 || p === totalPages || Math.abs(p - page) <= radius) pages.push(p);
      else if (pages[pages.length - 1] !== null) pages.push(null);
    }
    return pages;
  }

  return {
    DEFAULTS,
    SORTS,
    decodeRepos,
    filterRepos,
    sortRepos,
    queryRepos,
    countryCounts,
    fromQuery,
    toQuery,
    activeFilterCount,
    pageWindow,
  };
});
