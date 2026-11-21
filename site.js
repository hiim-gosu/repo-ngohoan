/* Shared script for the static pages (repos, categories, Vietnam). */
(function () {
  var root = document.documentElement;

  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("toprepo_theme", next);
      } catch (e) {}
    });
  }

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var source = document.getElementById(btn.getAttribute("data-copy"));
      if (!source) return;
      // Without clipboard access, select the snippet so the reader can copy it by hand.
      var selectSource = function () {
        var range = document.createRange();
        range.selectNodeContents(source);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      };
      if (!navigator.clipboard) return selectSource();
      var label = btn.textContent;
      navigator.clipboard.writeText(source.textContent).then(function () {
        btn.textContent = btn.getAttribute("data-copied");
        setTimeout(function () {
          btn.textContent = label;
        }, 1500);
      }, selectSource);
    });
  });

  // The HTML carries English country names; show them in the page language.
  try {
    var names = new Intl.DisplayNames([root.lang || "vi"], { type: "region" });
    document.querySelectorAll("[data-country]").forEach(function (el) {
      var name = names.of(el.getAttribute("data-country"));
      if (name) el.textContent = name;
    });
  } catch (e) {}
})();
