(() => {
  const F = window.RepoFilters;

  const I18N = {
    vi: {
      nav_repos: "Repo",
      nav_categories: "Danh mục",
      nav_featured: "Đề xuất",
      nav_reports: "Báo cáo AI",
      nav_vietnam: "Việt Nam",
      nav_deals: "Deals",
      nav_about: "Giới thiệu",
      hero_title: "Repo đang lên",
      hero_live_badge: "Cập nhật hằng ngày từ GitHub",
      hero_subtitle: "Repo GitHub chọn lọc: nổi bật và đang tăng sao theo ngày, tuần, tháng.",
      tracked_btn: "Theo dõi những repo nào?",
      tracked_title: "Cách chọn repo và tính tăng trưởng",
      tracked_p1:
        "Nguồn repo: GitHub Trending (ngày, tuần, tháng), repo tìm qua GitHub Search theo các chủ đề của 8 nhóm (từ 500 sao), và repo của developer Việt Nam (quét mỗi Chủ nhật, từ 100 sao). Giữ tối đa 3.000 repo; repo đang trending, được nhắc trong bản tin AI hoặc của Việt Nam được ưu tiên giữ lại.",
      tracked_p2:
        "Tăng 1/7/30 ngày: mỗi sáng 07:00 lưu số sao của từng repo, rồi trừ cho số sao 1, 7, 30 ngày trước. Khi chưa đủ số ngày lưu, ô hiện \"chưa đủ\" thay vì số 0.",
      tracked_p3:
        "Tăng nhanh (%): số sao tăng trong 7 ngày chia cho số sao trước đó, để thấy cả repo nhỏ đang lên nhanh.",
      tracked_p4:
        "Chấm trạng thái: xanh là có đẩy code trong 90 ngày; vàng là 3 đến 12 tháng; xám là lâu hơn hoặc đã archive.",
      stat_repos: "repo theo dõi",
      stat_stars: "tổng sao",
      stat_devs: "nhà phát triển",
      stat_countries: "quốc gia",
      stat_rising: "repo đang tăng sao",
      stat_updated: "cập nhật lúc",
      movers_title: "Tăng mạnh nhất 24 giờ",
      movers_sub: "Số sao mới trong ngày, so với repo dẫn đầu",
      stars_today: "sao / 24h",
      cta_report: "Đọc Báo cáo Phân tích PM & Ops Hôm Nay",
      search_placeholder: "Tìm repo, mô tả, topic...",
      filters_btn: "Bộ lọc",
      reset_filters: "Xoá bộ lọc",
      all_categories: "Nhóm: tất cả",
      all_languages: "Ngôn ngữ: tất cả",
      all_countries: "Quốc gia: tất cả",
      act_all: "Hoạt động: tất cả",
      act_active: "Đang hoạt động",
      act_slowing: "Chậm lại",
      act_inactive: "Ngừng hoạt động",
      act_unknown: "Chưa rõ trạng thái",
      act_active_tip: "Đang hoạt động: đẩy code trong 90 ngày qua",
      act_slowing_tip: "Chậm lại: lần đẩy code gần nhất cách 3 đến 12 tháng",
      act_inactive_tip: "Ngừng hoạt động: không đẩy code hơn 12 tháng hoặc đã archive",
      last_push: "lần đẩy gần nhất",
      hide_docs: "Ẩn repo tài liệu",
      only_vi: "Hỗ trợ tiếng Việt",
      period_all: "Chu kỳ: tất cả",
      period_1d: "Trending 1 ngày",
      period_7d: "Trending 7 ngày",
      period_30d: "Trending 30 ngày",
      sort_1d: "Tăng 1 ngày",
      sort_7d: "Tăng 7 ngày",
      sort_30d: "Tăng 30 ngày",
      sort_rising: "Tăng nhanh (% 7 ngày)",
      sort_pushed: "Mới đẩy code",
      sort_streak: "Chuỗi ngày trending",
      sort_stars: "Tổng sao",
      sort_created: "Mới tạo gần đây",
      col_repo: "Repo",
      col_lang: "Ngôn ngữ",
      col_stars: "Sao",
      col_1d: "1 ngày",
      col_7d: "7 ngày",
      col_30d: "30 ngày",
      col_created: "Tạo lúc",
      na_short: "chưa đủ",
      na_title: "Chưa đủ dữ liệu: cần thêm ngày lưu số sao",
      cat_title: "8 Nhóm Công Cụ Thực Chiến",
      cat_subtitle: "Chọn một danh mục để lọc nhanh các repository phục vụ E-commerce, Marketing & AI Operations.",
      feat_title: "Đề Xuất Nổi Bật Hôm Nay",
      feat_subtitle: "Tổng hợp các repo đang tăng sao nóng trên GitHub Trending (1d / 7d / 30d) và được phân tích trong bản tin PM & Ops mới nhất.",
      rep_history: "Lịch sử Bản tin (07:00 ICT)",
      about_title: "Về repo.ngohoan.com",
      about_p1:
        "repo.ngohoan.com là bảng theo dõi tình báo công nghệ mã nguồn mở, tự động thu thập dữ liệu từ GitHub Trending (Ngày / Tuần / Tháng) mỗi sáng lúc 07:00 (UTC+7) qua GitHub Actions, kết hợp phân tích bởi Gemini AI theo lăng kính Product Manager & System Operations.",
      about_b1_t: "Cập nhật tự động 07:00 ICT",
      about_b1_d: "Pipeline tự động quét daily, weekly & monthly trending, lọc nhiễu (bỏ danh sách awesome/interview), theo dõi streak > 3 ngày và đẩy bản tin lên web + Telegram.",
      about_b2_t: "Tập trung Ứng dụng Thực chiến",
      about_b2_d: "Ưu tiên AI Agents, MCP, Video/Media AI, Web Scraper, Automation Workflow, E-commerce & các giải pháp Open-Source SaaS Killer.",
      about_method_title: "Phương pháp",
      about_m5_d:
        "Quốc gia: lấy từ trường location trên hồ sơ GitHub của owner, đối chiếu với bảng tên nước và thành phố. Location mơ hồ (\"Earth\", \"Remote\", hai nước) được để trống thay vì đoán.",
      about_m6_d:
        "Contributor và trang repo: mỗi repo có trang riêng với biểu đồ sao, top 10 contributor (cập nhật dần, mỗi repo khoảng một lần mỗi tuần) và badge README cập nhật mỗi ngày.",
      about_data:
        "Dữ liệu mở: /data/repos.json (dạng cột, có danh sách fields), /feed.xml (RSS bản tin AI), /sitemap.xml và /llms.txt.",
      footer_note: "Dữ liệu cập nhật tự động mỗi ngày lúc 07:00 sáng (GMT+7)",
      empty_repos: "Không tìm thấy repo nào khớp bộ lọc hiện tại.",
      showing: "Hiển thị",
      of: "trên",
      repos_unit: "repo",
      trending_badge: "Đang lên",
      vi_badge: "Tiếng Việt",
      inspect_label: "Chi tiết",
      open_github: "Mở trên GitHub",
      read_ai_brief: "Xem trong Báo cáo AI",
      ai_featured_note: "Repository này được nhắc tới trong bản tin phân tích PM & Ops gần nhất.",
    },
    en: {
      nav_repos: "Repos",
      nav_categories: "Categories",
      nav_featured: "Spotlight",
      nav_reports: "AI Briefs",
      nav_vietnam: "Vietnam",
      nav_deals: "Deals",
      nav_about: "About",
      hero_title: "Rising Repos",
      hero_live_badge: "Updated daily from GitHub",
      hero_subtitle: "Curated GitHub repositories rising across 1-day, 7-day, and 30-day trending windows.",
      tracked_btn: "Which repos are tracked?",
      tracked_title: "How repos are picked and growth is measured",
      tracked_p1:
        "Sources: GitHub Trending (daily, weekly, monthly), GitHub Search by topic for the 8 categories (500+ stars), and repos by Vietnamese developers (scanned every Sunday, 100+ stars). Up to 3,000 repos are kept; trending repos, repos in the AI brief and Vietnamese repos are kept first.",
      tracked_p2:
        "1/7/30-day growth: every morning at 07:00 ICT we record each repo's stars and subtract the count from 1, 7 and 30 days earlier. Until enough days are recorded, the cell shows \"n/a\" instead of 0.",
      tracked_p3:
        "Rising (%): stars gained in 7 days divided by the stars before that, so small repos that are taking off show up too.",
      tracked_p4:
        "Status dot: green means code pushed in the last 90 days; amber means 3 to 12 months; grey means longer or archived.",
      stat_repos: "tracked repos",
      stat_stars: "total stars",
      stat_devs: "developers",
      stat_countries: "countries",
      stat_rising: "rising repos",
      stat_updated: "updated at",
      movers_title: "Top movers, last 24 hours",
      movers_sub: "New stars today, relative to the leader",
      stars_today: "stars / 24h",
      cta_report: "Read Today's PM & Ops Intelligence Brief",
      search_placeholder: "Search repos, descriptions, topics...",
      filters_btn: "Filters",
      reset_filters: "Reset filters",
      all_categories: "Category: All",
      all_languages: "Language: All",
      all_countries: "Country: All",
      act_all: "Activity: All",
      act_active: "Active",
      act_slowing: "Slowing",
      act_inactive: "Inactive",
      act_unknown: "Activity unknown",
      act_active_tip: "Active: code pushed in the last 90 days",
      act_slowing_tip: "Slowing: last push was 3 to 12 months ago",
      act_inactive_tip: "Inactive: no push for over 12 months, or archived",
      last_push: "last push",
      hide_docs: "Hide docs repos",
      only_vi: "Vietnamese support",
      period_all: "Window: All",
      period_1d: "Trending 1 day",
      period_7d: "Trending 7 days",
      period_30d: "Trending 30 days",
      sort_1d: "1-day growth",
      sort_7d: "7-day growth",
      sort_30d: "30-day growth",
      sort_rising: "Rising (% in 7 days)",
      sort_pushed: "Recently pushed",
      sort_streak: "Trending streak",
      sort_stars: "Total stars",
      sort_created: "Recently created",
      col_repo: "Repo",
      col_lang: "Language",
      col_stars: "Stars",
      col_1d: "1 day",
      col_7d: "7 days",
      col_30d: "30 days",
      col_created: "Created",
      na_short: "n/a",
      na_title: "Not enough data yet: needs more days of star records",
      cat_title: "8 Practical Tool Categories",
      cat_subtitle: "Pick a category to filter repositories built for E-commerce, Marketing & AI Operations.",
      feat_title: "Today's Featured Spotlight",
      feat_subtitle: "Fast-rising repositories across daily/weekly/monthly GitHub Trending and tools highlighted in today's PM & Ops brief.",
      rep_history: "Daily Brief Archive (07:00 ICT)",
      about_title: "About repo.ngohoan.com",
      about_p1:
        "repo.ngohoan.com is an automated open-source intelligence directory tracking Daily, Weekly, and Monthly GitHub Trending at 07:00 (UTC+7) via GitHub Actions and analyzed with Gemini AI.",
      about_b1_t: "Automated 07:00 ICT Pipeline",
      about_b1_d: "Automatically scrapes daily, weekly & monthly trending, filters noise, tracks >3-day streaks, and publishes to web & Telegram.",
      about_b2_t: "Practical Operations Focus",
      about_b2_d: "Prioritizes AI Agents, MCP, Video/Media AI, Web Scrapers, Workflow Automation, E-commerce & Open-Source SaaS alternatives.",
      about_method_title: "Methodology",
      about_m5_d:
        "Country: taken from the location field of the owner's GitHub profile and matched against a table of countries and cities. Vague locations (\"Earth\", \"Remote\", two countries) are left blank rather than guessed.",
      about_m6_d:
        "Contributors and repo pages: every repo has its own page with a star chart, the top 10 contributors (refreshed gradually, about once a week per repo) and a README badge updated daily.",
      about_data:
        "Open data: /data/repos.json (columnar, with a fields list), /feed.xml (RSS of the AI briefs), /sitemap.xml and /llms.txt.",
      footer_note: "Automatically updated daily at 07:00 AM (GMT+7)",
      empty_repos: "No repositories match your current filters.",
      showing: "Showing",
      of: "of",
      repos_unit: "repos",
      trending_badge: "Rising",
      vi_badge: "Vietnamese",
      inspect_label: "Inspect",
      open_github: "Open on GitHub",
      read_ai_brief: "Read in AI Brief",
      ai_featured_note: "This repository is featured in the latest PM & Ops Intelligence report.",
    },
  };

  const SVG_STAR =
    '<svg class="star-svg" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
  const SVG_TREND =
    '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>';
  const SVG_CALENDAR =
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>';
  const SVG_PANEL =
    '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M15 3v18"></path></svg>';
  const SVG_GITHUB =
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>';

  const state = {
    // ?hl=en opens the page in English (the static pages and hreflang links use it).
    lang: new URLSearchParams(location.search).get("hl") === "en" ? "en" : "vi",
    // The <head> script already picked the saved theme or the OS preference.
    theme: document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light",
    tab: "repos",
    f: F.fromQuery(location.search),
    pageSize: 50,
    reposData: null,
    reportsData: null,
    activeReportIdx: 0,
  };

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));
  const t = () => I18N[state.lang];

  /** Save only an explicit choice, so visitors who never toggle keep following their OS theme. */
  function applyTheme(theme, save = false) {
    state.theme = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", state.theme);
    if (save) {
      try {
        localStorage.setItem("toprepo_theme", state.theme);
      } catch (e) {}
    }
  }

  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatCompactNumber(num) {
    const n = Number(num) || 0;
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
    return String(n);
  }

  function formatGrowth(num) {
    const n = Number(num);
    return n >= 1000 ? `+${(n / 1000).toFixed(1).replace(/\.0$/, "")}K` : `+${n}`;
  }

  // null = not enough snapshot days yet; 0 = measured, no growth.
  function formatDelta(num) {
    if (num === null || num === undefined) {
      return `<span class="delta-na" title="${escapeHtml(t().na_title)}">${escapeHtml(t().na_short)}</span>`;
    }
    if (!(Number(num) > 0)) return '<span class="delta-empty">0</span>';
    return `<span class="delta-pill">${formatGrowth(num)}</span>`;
  }

  const regionNames = {};
  function countryName(code) {
    try {
      regionNames[state.lang] = regionNames[state.lang] || new Intl.DisplayNames([state.lang], { type: "region" });
      return regionNames[state.lang].of(code) || code;
    } catch {
      return code;
    }
  }

  function countryFlag(code) {
    return String.fromCodePoint(...code.split("").map((c) => 127397 + c.charCodeAt(0)));
  }

  function activityLabel(repo) {
    const tr = t();
    if (!repo.activity) return tr.act_unknown;
    const tip = tr[`act_${repo.activity}_tip`];
    return repo.pushed_at ? `${tip} (${tr.last_push}: ${repo.pushed_at})` : tip;
  }

  function repoLinks(repo) {
    // Static detail pages arrive in a later phase; until repos.json sets
    // detail_pages, the repo name keeps linking to GitHub.
    if (!state.reposData?.detail_pages) return { href: repo.url, external: true, github: false };
    const prefix = state.lang === "en" ? "/en" : "";
    return { href: `${prefix}/repos/${repo.full_name}/`, external: false, github: true };
  }

  function getCategoryMap() {
    const map = {};
    (state.reposData?.categories || []).forEach((c) => {
      map[c.id] = c;
    });
    return map;
  }

  function getCategoryName(cat) {
    if (!cat) return "Other";
    return state.lang === "en" ? cat.name_en : cat.name_vi;
  }

  function applyTranslations() {
    const tr = t();
    document.documentElement.lang = state.lang;
    $$(".lang-btn").forEach((b) => b.classList.toggle("is-active", b.getAttribute("data-lang") === state.lang));
    const vietnamLink = $("#nav-vietnam");
    if (vietnamLink) vietnamLink.href = state.lang === "en" ? "/en/vietnam/" : "/vietnam/";
    const dealsLink = $("#nav-deals");
    if (dealsLink) {
      dealsLink.hidden = !state.reposData?.deals_page;
      dealsLink.href = state.lang === "en" ? "/en/deals/" : "/deals/";
    }
    const canonical = $('link[rel="canonical"]');
    if (canonical) canonical.href = `https://repo.ngohoan.com/${state.lang === "en" ? "?hl=en" : ""}`;
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (tr[key]) el.textContent = tr[key];
    });
    const searchInput = $("#search-input");
    if (searchInput) searchInput.placeholder = tr.search_placeholder;

    populateFilterOptions();
    syncControls();
    renderQuickCategoryPills();
    renderMovers();
    renderTable();
    renderCategoriesTab();
    renderFeaturedTab();
  }

  function fillSelect(select, options) {
    if (!select) return;
    select.innerHTML = options
      .map(([value, label]) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`)
      .join("");
  }

  function populateFilterOptions() {
    if (!state.reposData) return;
    const tr = t();
    const repos = state.reposData.repos;

    fillSelect($("#filter-category"), [
      ["all", tr.all_categories],
      ...state.reposData.categories.map((c) => [c.id, getCategoryName(c)]),
    ]);

    const langs = Array.from(new Set(repos.map((r) => r.language).filter((lg) => lg && lg !== "Unknown"))).sort();
    fillSelect($("#filter-language"), [["all", tr.all_languages], ...langs.map((lg) => [lg, lg])]);

    fillSelect($("#filter-country"), [
      ["all", tr.all_countries],
      ...F.countryCounts(repos).map(([code, n]) => [code, `${countryFlag(code)} ${countryName(code)} (${n})`]),
    ]);

    fillSelect($("#filter-activity"), [
      ["all", tr.act_all],
      ["active", tr.act_active],
      ["slowing", tr.act_slowing],
      ["inactive", tr.act_inactive],
    ]);
  }

  /** Reflect state.f in every control (after load, language switch or Back). */
  function syncControls() {
    const f = state.f;
    const setValue = (sel, value) => {
      const el = $(sel);
      if (el && el.value !== value) el.value = value;
    };
    setValue("#filter-category", f.cat);
    setValue("#filter-language", f.lang);
    setValue("#filter-country", f.country);
    setValue("#filter-activity", f.act);
    setValue("#filter-period", f.period);
    setValue("#sort-select", f.sort);
    const search = $("#search-input");
    if (search && search.value !== f.q && document.activeElement !== search) search.value = f.q;
    $("#filter-hide-docs").checked = !f.docs;
    $("#filter-vi").checked = f.vi;

    const active = F.activeFilterCount(f);
    const badge = $("#filter-count");
    badge.textContent = String(active);
    badge.hidden = active === 0;
    $("#filter-reset").hidden = active === 0;
  }

  function syncUrl(push) {
    const qs = [F.toQuery(state.f), state.lang === "en" ? "hl=en" : ""].filter(Boolean).join("&");
    const url = `${location.pathname}${qs ? `?${qs}` : ""}${location.hash}`;
    if (url === `${location.pathname}${location.search}${location.hash}`) return;
    history[push ? "pushState" : "replaceState"](null, "", url);
  }

  /** Single entry point for filter changes: update state, URL, controls and table. */
  function setFilters(patch, { push = true, keepPage = false } = {}) {
    Object.assign(state.f, patch);
    if (!keepPage) state.f.page = 1;
    syncUrl(push);
    syncControls();
    renderQuickCategoryPills();
    renderTable();
  }

  function renderStats() {
    const stats = state.reposData?.stats;
    if (!stats) return;
    $("#stat-total-repos").textContent = formatCompactNumber(stats.total_repos);
    $("#stat-total-stars").textContent = formatCompactNumber(stats.total_stars);
    $("#stat-developers").textContent = formatCompactNumber(stats.developers_count || stats.total_repos);
    $("#stat-countries").textContent = String(stats.countries_count ?? F.countryCounts(state.reposData.repos).length);
    $("#stat-rising").textContent = formatCompactNumber(stats.rising_count ?? stats.trending_today_count ?? 0);
    $("#stat-updated").textContent = stats.updated_at_display || "—";
  }

  /** Top 5 by stars gained in the last 24 hours; hidden until a 1-day figure exists. */
  function renderMovers() {
    const wrap = $("#movers-wrap");
    if (!wrap || !state.reposData) return;
    const top = state.reposData.repos
      .filter((r) => Number(r.stars_1d) > 0)
      .sort((a, b) => b.stars_1d - a.stars_1d)
      .slice(0, 5);
    wrap.hidden = top.length === 0;
    if (!top.length) return;
    const max = top[0].stars_1d;
    const tr = t();
    $("#movers").innerHTML = top
      .map((r, i) => {
        const links = repoLinks(r);
        const target = links.external ? ' target="_blank" rel="noopener"' : "";
        return `
          <article class="mover">
            <div class="mover-top"><span class="mover-rank">#${i + 1}</span><span>${escapeHtml(r.language && r.language !== "Unknown" ? r.language : "")}</span></div>
            <div class="mover-name"><span>${escapeHtml(r.owner)}/</span>${escapeHtml(r.name)}</div>
            <div class="mover-delta">+${Number(r.stars_1d).toLocaleString("en-US")}<small>${escapeHtml(tr.stars_today)}</small></div>
            <span class="mover-spark" aria-hidden="true"><i style="width:${Math.max(4, (r.stars_1d / max) * 100)}%"></i></span>
            <a class="mover-cover" href="${escapeHtml(links.href)}"${target} aria-label="${escapeHtml(r.full_name)}"></a>
          </article>`;
      })
      .join("");
  }

  function renderQuickCategoryPills() {
    const wrap = $("#quick-category-pills");
    if (!wrap || !state.reposData) return;
    wrap.innerHTML = (state.reposData.categories || [])
      .map((c) => {
        const active = state.f.cat === c.id;
        return `
          <button type="button" class="cat-quick-pill ${active ? "is-active" : ""}" data-cat="${escapeHtml(c.id)}" aria-pressed="${active}">
            <span class="cat-dot" style="background:${escapeHtml(c.color)}"></span>
            <span>${escapeHtml(getCategoryName(c))}</span>
          </button>
        `;
      })
      .join("");
  }

  function renderRow(r, rank, catMap) {
    const tr = t();
    const cat = catMap[r.category_id];
    const links = repoLinks(r);
    const target = links.external ? ' target="_blank" rel="noopener"' : "";
    const actText = activityLabel(r);
    const tags = [
      `<button type="button" class="tag-pill" data-tag-cat="${escapeHtml(r.category_id)}">
        <span class="cat-dot" style="background:${escapeHtml(cat?.color || "#64748B")}"></span>
        <span>${escapeHtml(getCategoryName(cat))}</span>
      </button>`,
    ];
    if (r.country) {
      tags.push(
        `<button type="button" class="tag-pill" data-tag-country="${escapeHtml(r.country)}" title="${escapeHtml(countryName(r.country))}">
          <span aria-hidden="true">${countryFlag(r.country)}</span><span>${escapeHtml(countryName(r.country))}</span>
        </button>`
      );
    }
    if (r.supports_vi) {
      tags.push(`<button type="button" class="tag-pill tag-vi" data-tag-vi="1">${escapeHtml(tr.vi_badge)}</button>`);
    }
    if (r.is_trending_today) {
      tags.push(`<span class="trending-pill">${SVG_TREND}<span>${escapeHtml(tr.trending_badge)}</span></span>`);
    }

    return `
      <tr>
        <td class="col-rank"><span class="rank-badge ${rank <= 3 ? "is-top" : ""}">${rank}</span></td>
        <td class="col-repo">
          <div class="repo-cell">
            <img class="repo-avatar" src="${escapeHtml(r.avatar_url)}" alt="" width="36" height="36" loading="lazy" />
            <div class="repo-meta">
              <div class="repo-title-line">
                <span class="status-dot is-${escapeHtml(r.activity || "unknown")}" role="img" aria-label="${escapeHtml(actText)}" title="${escapeHtml(actText)}"></span>
                <a class="repo-link" href="${escapeHtml(links.href)}"${target}>
                  <span class="repo-owner">${escapeHtml(r.owner)}/</span><span class="repo-name-bold">${escapeHtml(r.name)}</span>
                </a>
                ${
                  links.github
                    ? `<a class="gh-link" href="${escapeHtml(r.url)}" target="_blank" rel="noopener" title="${escapeHtml(tr.open_github)}" aria-label="${escapeHtml(tr.open_github)}">${SVG_GITHUB}</a>`
                    : ""
                }
                <button type="button" class="inspect-btn" data-inspect="${escapeHtml(r.full_name)}" title="${escapeHtml(tr.inspect_label)}" aria-label="${escapeHtml(tr.inspect_label)}">
                  ${SVG_PANEL}<span class="inspect-text">${escapeHtml(tr.inspect_label)}</span>
                </button>
              </div>
              <p class="repo-desc">${escapeHtml(r.description || "—")}</p>
              <div class="repo-tags">${tags.join("")}</div>
            </div>
          </div>
        </td>
        <td class="col-lang">${escapeHtml(r.language || "—")}</td>
        <td class="col-stars text-right"><span class="star-val">${SVG_STAR}${formatCompactNumber(r.total_stars)}</span></td>
        <td class="col-delta col-d1 text-right">${formatDelta(r.stars_1d)}</td>
        <td class="col-delta col-d7 text-right">${formatDelta(r.stars_7d)}</td>
        <td class="col-delta col-d30 text-right">${formatDelta(r.stars_30d)}</td>
        <td class="col-date text-right"><span class="date-val">${escapeHtml(r.created_at || "—")}</span></td>
      </tr>
    `;
  }

  function renderPagination(pageEl, totalPages) {
    const page = state.f.page;
    if (totalPages <= 1) {
      pageEl.innerHTML = "";
      return;
    }
    const btn = (p, label, extra = "") =>
      `<button type="button" class="page-btn ${extra}" data-pg="${p}" ${p < 1 || p > totalPages ? "disabled" : ""}>${label}</button>`;
    pageEl.innerHTML = [
      btn(page - 1, "←"),
      ...F.pageWindow(page, totalPages).map((p) =>
        p === null ? '<span class="page-gap" aria-hidden="true">…</span>' : btn(p, p, p === page ? "is-active" : "")
      ),
      btn(page + 1, "→"),
    ].join("");
  }

  function renderTable() {
    const tbody = $("#repo-tbody");
    const countEl = $("#table-count");
    const pageEl = $("#pagination");
    if (!tbody || !state.reposData) return;

    const tr = t();
    const list = F.queryRepos(state.reposData.repos, state.f);
    const total = list.length;
    const totalPages = Math.max(1, Math.ceil(total / state.pageSize));
    if (state.f.page > totalPages) state.f.page = totalPages;

    const startIdx = (state.f.page - 1) * state.pageSize;
    const pageItems = list.slice(startIdx, startIdx + state.pageSize);
    const catMap = getCategoryMap();

    tbody.innerHTML = pageItems.length
      ? pageItems.map((r, idx) => renderRow(r, startIdx + idx + 1, catMap)).join("")
      : `<tr><td colspan="8" class="empty-cell">${escapeHtml(tr.empty_repos)}</td></tr>`;

    if (countEl) {
      const from = total === 0 ? 0 : startIdx + 1;
      const to = Math.min(total, startIdx + pageItems.length);
      countEl.textContent = `${tr.showing} ${from}–${to} ${tr.of} ${total} ${tr.repos_unit}`;
    }
    if (pageEl) renderPagination(pageEl, totalPages);
  }

  function kpi(label, value) {
    const isNull = value === null || value === undefined;
    const shown = isNull ? escapeHtml(t().na_short) : Number(value) > 0 ? formatGrowth(value) : "0";
    const cls = !isNull && Number(value) > 0 ? "is-green" : isNull ? "is-na" : "";
    const title = isNull ? ` title="${escapeHtml(t().na_title)}"` : "";
    return `<div class="kpi-box"><div class="kpi-label">${escapeHtml(label)}</div><div class="kpi-val ${cls}"${title}>${shown}</div></div>`;
  }

  function openDrawer(fullName) {
    const repo = (state.reposData?.repos || []).find((r) => r.full_name === fullName);
    if (!repo) return;

    const tr = t();
    const cat = getCategoryMap()[repo.category_id];
    const featuredSet = new Set(state.reportsData?.latest_featured_repos || []);
    const isFeatured = featuredSet.has(repo.full_name);

    $("#drawer-brand").innerHTML = `
      <img class="repo-avatar" src="${escapeHtml(repo.avatar_url)}" alt="" width="36" height="36" />
      <div style="min-width:0">
        <div id="drawer-title" class="repo-name-bold" style="font-size:15px;overflow:hidden;text-overflow:ellipsis">${escapeHtml(repo.full_name)}</div>
        <div style="font-size:12px;color:var(--text-muted)">${escapeHtml(repo.language || "Unknown")} · ${escapeHtml(repo.created_at || "—")}</div>
      </div>
    `;

    const topicsHtml = (repo.topics || []).length
      ? `<div><div class="drawer-section-title">Topics</div><div class="topic-list">${repo.topics
          .map((tp) => `<span class="topic-chip">${escapeHtml(tp)}</span>`)
          .join("")}</div></div>`
      : "";

    const aiHtml = isFeatured
      ? `<div class="ai-note-box">
           <div style="font-weight:700;margin-bottom:6px;color:var(--accent)">AI Intelligence Highlight</div>
           <p style="margin:0 0 10px">${escapeHtml(tr.ai_featured_note)}</p>
           <button type="button" class="cta-pill cta-primary" id="drawer-open-brief">${escapeHtml(tr.read_ai_brief)}</button>
         </div>`
      : "";

    $("#drawer-body").innerHTML = `
      <p style="margin:0;color:var(--text-secondary)">${escapeHtml(repo.description || "—")}</p>
      <div class="drawer-kpis">
        <div class="kpi-box"><div class="kpi-label">${escapeHtml(tr.col_stars)}</div><div class="kpi-val">${formatCompactNumber(repo.total_stars)}</div></div>
        ${kpi(tr.col_1d, repo.stars_1d)}
        ${kpi(tr.col_7d, repo.stars_7d)}
        ${kpi(tr.col_30d, repo.stars_30d)}
      </div>
      <div>
        <div class="drawer-section-title">${escapeHtml(tr.nav_categories)}</div>
        <span class="tag-pill"><span class="cat-dot" style="background:${escapeHtml(cat?.color || "#64748B")}"></span>${escapeHtml(getCategoryName(cat))}</span>
      </div>
      ${topicsHtml}
      ${aiHtml}
      <div style="margin-top:auto;padding-top:8px">
        <a href="${escapeHtml(repo.url)}" target="_blank" rel="noopener" class="cta-pill cta-primary" style="width:100%;justify-content:center">${escapeHtml(tr.open_github)} ↗</a>
      </div>
    `;

    $("#drawer-open-brief")?.addEventListener("click", () => {
      closeDrawer();
      switchTab("reports");
    });

    $("#drawer-backdrop").hidden = false;
    $("#repo-drawer").hidden = false;
    $("#drawer-close").focus();
  }

  function closeDrawer() {
    $("#drawer-backdrop").hidden = true;
    $("#repo-drawer").hidden = true;
  }

  function renderCategoriesTab() {
    const grid = $("#categories-grid");
    if (!grid || !state.reposData) return;
    const repos = state.reposData.repos || [];
    grid.innerHTML = state.reposData.categories
      .map((c) => {
        const matching = repos.filter((r) => r.category_id === c.id);
        const top3 = matching.slice(0, 3);
        const desc = state.lang === "en" ? c.desc_en : c.desc_vi;
        return `
          <div class="cat-card" data-open-cat="${escapeHtml(c.id)}">
            <div class="cat-card-head">
              <div class="cat-card-title">
                <span class="cat-dot" style="background:${escapeHtml(c.color)}"></span>
                <span>${escapeHtml(getCategoryName(c))}</span>
              </div>
              <span class="cat-count">${matching.length}</span>
            </div>
            <p class="cat-card-desc">${escapeHtml(desc)}</p>
            <div class="cat-preview">
              ${top3.map((r) => `<span>${escapeHtml(r.name)}</span>`).join("")}
            </div>
          </div>
        `;
      })
      .join("");

    grid.querySelectorAll("[data-open-cat]").forEach((card) => {
      card.addEventListener("click", () => {
        switchTab("repos");
        setFilters({ cat: card.getAttribute("data-open-cat") });
      });
    });
  }

  function renderFeaturedTab() {
    const grid = $("#featured-grid");
    if (!grid || !state.reposData) return;
    const catMap = getCategoryMap();
    const featuredSet = new Set(state.reportsData?.latest_featured_repos || []);
    const spotlight = (state.reposData.repos || [])
      .filter((r) => r.is_trending_today || featuredSet.has(r.full_name))
      .slice(0, 12);

    grid.innerHTML = spotlight
      .map((r) => {
        const cat = catMap[r.category_id];
        return `
          <div class="feat-card">
            <div class="repo-title-line">
              <img class="repo-avatar" src="${escapeHtml(r.avatar_url)}" alt="" style="width:32px;height:32px" loading="lazy" />
              <a class="repo-link" href="${escapeHtml(r.url)}" target="_blank" rel="noopener">
                <span class="repo-owner">${escapeHtml(r.owner)}/</span><span class="repo-name-bold">${escapeHtml(r.name)}</span>
              </a>
            </div>
            <p class="repo-desc" style="-webkit-line-clamp:3">${escapeHtml(r.description || "—")}</p>
            <div class="repo-tags" style="margin-top:auto;justify-content:space-between;width:100%">
              <span class="tag-pill"><span class="cat-dot" style="background:${escapeHtml(cat?.color || "#64748B")}"></span>${escapeHtml(getCategoryName(cat))}</span>
              <span class="star-val">${SVG_STAR}${formatCompactNumber(r.total_stars)}</span>
            </div>
          </div>
        `;
      })
      .join("");
  }

  function renderMarkdownInline(text) {
    let s = escapeHtml(text);
    s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
    s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/(?<!\w)\*([^*]+?)\*(?!\w)/g, "<em>$1</em>");
    return s;
  }

  function renderMarkdown(md) {
    const lines = String(md || "").split(/\r?\n/);
    const out = [];
    let inList = false;

    const closeList = () => {
      if (inList) {
        out.push("</ul>");
        inList = false;
      }
    };

    for (const raw of lines) {
      const line = raw.trim();
      if (!line) {
        closeList();
        continue;
      }
      if (line === "---") {
        closeList();
        out.push("<hr>");
        continue;
      }
      const hMatch = line.match(/^(#{1,3})\s+(.+)$/);
      if (hMatch) {
        closeList();
        const lvl = hMatch[1].length;
        out.push(`<h${lvl}>${renderMarkdownInline(hMatch[2])}</h${lvl}>`);
        continue;
      }
      if (line.startsWith("> ")) {
        closeList();
        out.push(`<blockquote>${renderMarkdownInline(line.slice(2))}</blockquote>`);
        continue;
      }
      const liMatch = line.match(/^[*-]\s+(.+)$/);
      if (liMatch) {
        if (!inList) {
          out.push("<ul>");
          inList = true;
        }
        out.push(`<li>${renderMarkdownInline(liMatch[1])}</li>`);
        continue;
      }
      closeList();
      out.push(`<p>${renderMarkdownInline(line)}</p>`);
    }
    closeList();
    return out.join("\n");
  }

  function renderReportsTab() {
    const listEl = $("#report-date-list");
    const readerEl = $("#report-reader");
    const reports = state.reportsData?.reports || [];
    if (!listEl || !readerEl) return;

    if (!reports.length) {
      listEl.innerHTML = "";
      readerEl.innerHTML = '<p class="empty-cell">Chưa có bản báo cáo nào.</p>';
      return;
    }

    listEl.innerHTML = reports
      .map(
        (rep, idx) =>
          `<button type="button" class="report-date-btn ${idx === state.activeReportIdx ? "is-active" : ""}" data-rep-idx="${idx}">${SVG_CALENDAR}<span>${escapeHtml(rep.date)}</span></button>`
      )
      .join("");

    listEl.querySelectorAll("[data-rep-idx]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.activeReportIdx = Number(btn.getAttribute("data-rep-idx"));
        renderReportsTab();
        setHash(`report-${reports[state.activeReportIdx].date}`);
      });
    });

    const active = reports[state.activeReportIdx] || reports[0];
    readerEl.innerHTML = renderMarkdown(active.markdown);
  }

  function switchTab(tabName) {
    state.tab = tabName;
    $$(".nav-tab").forEach((b) => b.classList.toggle("is-active", b.getAttribute("data-tab") === tabName));
    $$(".tab-view").forEach((sec) => {
      const show = sec.id === `view-${tabName}`;
      sec.hidden = !show;
      sec.classList.toggle("is-active", show);
    });
  }

  function setHash(hash) {
    history.replaceState(null, "", `${location.pathname}${location.search}${hash ? `#${hash}` : ""}`);
  }

  /** Open the tab or AI brief named in the URL hash: #categories, #reports, #report-YYYY-MM-DD, ... */
  function routeFromHash() {
    const hash = decodeURIComponent(location.hash.slice(1));
    const report = hash.match(/^report-(\d{4}-\d{2}-\d{2})$/);
    if (report) {
      const idx = (state.reportsData?.reports || []).findIndex((r) => r.date === report[1]);
      if (idx >= 0) state.activeReportIdx = idx;
      renderReportsTab();
      switchTab("reports");
    } else if (["repos", "categories", "featured", "reports", "about"].includes(hash)) {
      switchTab(hash);
    }
  }

  function setPopover(open) {
    const pop = $("#tracked-popover");
    pop.hidden = !open;
    $("#tracked-btn").setAttribute("aria-expanded", String(open));
  }

  function setFilterPanel(open) {
    $(".filter-bar").classList.toggle("is-open", open);
    $("#filters-toggle").setAttribute("aria-expanded", String(open));
  }

  function bindEvents() {
    $$(".nav-tab[data-tab]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-tab");
        switchTab(tab);
        setHash(tab === "repos" ? "" : tab);
      });
    });

    $("#brand-home")?.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab("repos");
      setHash("");
    });

    $("#btn-open-report")?.addEventListener("click", () => {
      switchTab("reports");
      setHash("reports");
    });

    $("#theme-toggle")?.addEventListener("click", () => {
      applyTheme(state.theme === "dark" ? "light" : "dark", true);
    });

    $$(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.lang = btn.getAttribute("data-lang");
        applyTranslations();
        syncUrl(false);
      });
    });

    let searchTimer = 0;
    $("#search-input")?.addEventListener("input", (e) => {
      clearTimeout(searchTimer);
      const q = e.target.value;
      // Typing replaces the history entry so Back is not flooded with keystrokes.
      searchTimer = setTimeout(() => setFilters({ q }, { push: false }), 150);
    });

    const onSelect = (sel, key) =>
      $(sel)?.addEventListener("change", (e) => setFilters({ [key]: e.target.value }));
    onSelect("#filter-category", "cat");
    onSelect("#filter-language", "lang");
    onSelect("#filter-country", "country");
    onSelect("#filter-activity", "act");
    onSelect("#sort-select", "sort");

    $("#filter-period")?.addEventListener("change", (e) => {
      const period = e.target.value;
      setFilters(period === "all" ? { period } : { period, sort: `stars_${period}` });
    });

    $("#filter-hide-docs")?.addEventListener("change", (e) => setFilters({ docs: !e.target.checked }));
    $("#filter-vi")?.addEventListener("change", (e) => setFilters({ vi: e.target.checked }));
    $("#filter-reset")?.addEventListener("click", () => {
      const { q, sort } = state.f;
      setFilters({ ...F.DEFAULTS, q, sort });
    });

    $("#filters-toggle")?.addEventListener("click", () => {
      setFilterPanel(!$(".filter-bar").classList.contains("is-open"));
    });

    $("#quick-category-pills")?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-cat]");
      if (!btn) return;
      const cid = btn.getAttribute("data-cat");
      setFilters({ cat: state.f.cat === cid ? "all" : cid });
    });

    // One delegated listener for every clickable element inside table rows.
    $("#repo-tbody")?.addEventListener("click", (e) => {
      const el = e.target.closest("[data-tag-cat],[data-tag-country],[data-tag-vi],[data-inspect]");
      if (!el) return;
      if (el.dataset.inspect) openDrawer(el.dataset.inspect);
      else if (el.dataset.tagCat) setFilters({ cat: el.dataset.tagCat });
      else if (el.dataset.tagCountry) setFilters({ country: el.dataset.tagCountry });
      else if (el.dataset.tagVi) setFilters({ vi: true });
    });

    $("#pagination")?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-pg]");
      if (!btn || btn.disabled) return;
      setFilters({ page: Number(btn.dataset.pg) }, { keepPage: true });
      $(".filter-bar").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    $("#tracked-btn")?.addEventListener("click", (e) => {
      e.stopPropagation();
      setPopover($("#tracked-popover").hidden);
    });
    document.addEventListener("click", (e) => {
      const pop = $("#tracked-popover");
      if (!pop.hidden && !pop.contains(e.target)) setPopover(false);
    });

    window.addEventListener("popstate", () => {
      state.f = F.fromQuery(location.search);
      syncControls();
      renderQuickCategoryPills();
      renderTable();
    });

    $("#drawer-close")?.addEventListener("click", closeDrawer);
    $("#drawer-backdrop")?.addEventListener("click", closeDrawer);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeDrawer();
        setPopover(false);
      }
      const typing = ["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement?.tagName);
      if (e.key === "/" && !typing) {
        e.preventDefault();
        $("#search-input")?.focus();
      }
    });
  }

  async function init() {
    applyTheme(state.theme);
    bindEvents();
    try {
      const [reposResp, reportsResp] = await Promise.all([
        fetch("data/repos.json", { cache: "no-store" }),
        fetch("data/reports.json", { cache: "no-store" }),
      ]);
      state.reposData = await reposResp.json();
      state.reposData.repos = F.decodeRepos(state.reposData);
      state.reportsData = reportsResp.ok ? await reportsResp.json() : { reports: [] };

      renderStats();
      applyTranslations();
      renderReportsTab();
      routeFromHash();
      window.addEventListener("hashchange", routeFromHash);
    } catch (err) {
      const tbody = $("#repo-tbody");
      if (tbody) {
        tbody.innerHTML = `<tr><td colspan="8" class="empty-cell">Lỗi tải dữ liệu: ${escapeHtml(err.message)}</td></tr>`;
      }
    }
  }

  init();
})();
