(function () {
  function getParams() {
    try { return new URLSearchParams(window.location.search); } catch (e) { return new URLSearchParams(); }
  }
  function appendUtm(href) {
    var p = getParams();
    var keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
    var url;
    try { url = new URL(href, window.location.href); } catch (e) { return href; }
    keys.forEach(function (k) {
      if (p.has(k) && !url.searchParams.has(k)) url.searchParams.set(k, p.get(k));
    });
    return url.pathname + url.search + url.hash;
  }
  document.querySelectorAll("a[data-utm-pass]").forEach(function (a) {
    a.addEventListener("click", function () {
      a.setAttribute("href", appendUtm(a.getAttribute("href")));
    });
  });
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      var endpoint = form.getAttribute("data-endpoint");
      if (endpoint && endpoint.indexOf("TODO") === -1) return;
      e.preventDefault();
      var name = (form.querySelector("[name=name]") || {}).value || "";
      var email = (form.querySelector("[name=email]") || {}).value || "";
      var message = (form.querySelector("[name=message]") || {}).value || "";
      var to = form.getAttribute("data-mailto") || "rob@iliotech.com";
      var subject = encodeURIComponent("iliotech inquiry from " + (name || "website"));
      var body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);
      window.location.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
    });
  }

  var btn = document.querySelector(".nav-toggle");
  var wrap = document.querySelector(".nav-links-wrap");
  if (btn && wrap) {
    btn.addEventListener("click", function () {
      var open = wrap.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

})();
