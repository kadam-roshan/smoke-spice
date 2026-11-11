(function () {
  const dietEl = document.getElementById("diet-filters");
  const tabsEl = document.getElementById("tabs");
  const bodyEl = document.getElementById("menu-body");
  const search = document.getElementById("menu-search");
  const topEl = document.getElementById("menu-top");

  const params = new URLSearchParams(window.location.search);
  const state = {
    diet: "all",
    query: params.get("q") || "",
    offer: params.get("offer") || "",
    lockSpy: false,
  };
  const onOffer = offerIds();
  const diets = [
    { id: "all", label: "All" },
    { id: "veg", label: "Veg" },
    { id: "non_veg", label: "Non Veg" },
  ];

  if (state.query) search.value = state.query;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function dietMark(diet) {
    const label = diet === "veg" ? "Vegetarian" : "Non vegetarian";
    return '<span class="mark-diet ' + diet + '" role="img" aria-label="' + label + '"></span>';
  }

  function entryHay(entry, category) {
    return (entry.name + " " + entry.description + " " + category.name).toLowerCase();
  }

  function itemMatches(entry, category) {
    if (state.offer) {
      const offer = OFFERS.find((row) => row.id === state.offer);
      if (offer && !offer.itemIds.includes(entry.id)) return false;
    }
    const q = state.query.trim().toLowerCase();
    if (!q) return true;
    return entryHay(entry, category).includes(q);
  }

  function sections() {
    return MENU.categories
      .filter((category) => categoryVisible(category, state.diet))
      .sort((a, b) => a.order - b.order)
      .map((category) => ({
        category,
        items: category.items.filter((entry) => itemMatches(entry, category)),
      }))
      .filter((section) => section.items.length);
  }

  function renderFilters() {
    dietEl.innerHTML = diets.map((diet) => {
      const pressed = diet.id === state.diet ? "true" : "false";
      return '<button type="button" class="chip" data-diet="' + diet.id + '" aria-pressed="' + pressed + '">' + diet.label + "</button>";
    }).join("");
  }

  function renderTabs(list) {
    tabsEl.innerHTML = list.map((section, index) => {
      const label = tabLabel(section.category, state.diet);
      const current = index === 0 ? ' aria-current="true"' : "";
      return '<button type="button" role="tab" data-slug="' + section.category.slug + '"' + current + ">" + escapeHtml(label) + "</button>";
    }).join("");
  }

  function renderBody(list) {
    if (!list.length) {
      bodyEl.innerHTML = '<p class="no-match">Nothing on the menu matches that search.</p>';
      return;
    }
    const groups = MENU.groups.slice().sort((a, b) => a.order - b.order);
    let html = "";
    let lastGroup = "";
    list.forEach((section) => {
      if (state.diet === "all" && section.category.group !== lastGroup) {
        const group = groups.find((row) => row.id === section.category.group);
        html += '<p class="menu-group group-label">' + escapeHtml(group.label) + "</p>";
        lastGroup = section.category.group;
      }
      html += '<section class="menu-section" id="' + section.category.slug + '">';
      html += "<h2>" + escapeHtml(section.category.name) + "</h2>";
      section.items.forEach((entry) => {
        const offer = onOffer.has(entry.id) ? ' <span class="pill">Offer</span>' : "";
        const was = entry.compareAt
          ? '<span class="was">' + formatPrice(entry.compareAt) + "</span>"
          : "";
        const serves = entry.serves
          ? '<span class="serves">serves ' + entry.serves + "</span>"
          : "";
        html +=
          '<article class="item" id="item-' + entry.id + '">' +
            '<div>' +
              '<div class="item-name">' + dietMark(entry.diet) + "<span>" + escapeHtml(entry.name) + offer + "</span></div>" +
              '<p class="desc">' + escapeHtml(entry.description) + "</p>" +
            "</div>" +
            '<div class="price-col"><span class="price">' + was + formatPrice(entry.price) + "</span>" + serves + "</div>" +
          "</article>";
      });
      html += "</section>";
    });
    bodyEl.innerHTML = html;
  }

  function setOffset() {
    document.documentElement.style.setProperty("--header-offset", topEl.offsetHeight + "px");
  }

  function setActive(slug, scrollTab) {
    const buttons = tabsEl.querySelectorAll("button");
    buttons.forEach((button) => {
      const on = button.dataset.slug === slug;
      if (on) button.setAttribute("aria-current", "true");
      else button.removeAttribute("aria-current");
      if (on && scrollTab) button.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    });
  }

  let spy;
  function bindSpy() {
    if (spy) spy.disconnect();
    spy = new IntersectionObserver((entries) => {
      if (state.lockSpy) return;
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id, true);
    }, {
      rootMargin: "-" + (topEl.offsetHeight + 8) + "px 0px -55% 0px",
      threshold: [0.15, 0.4, 0.7],
    });
    document.querySelectorAll(".menu-section").forEach((section) => spy.observe(section));
  }

  function render() {
    const list = sections();
    renderFilters();
    renderTabs(list);
    renderBody(list);
    setOffset();
    bindSpy();
    const hash = decodeURIComponent(window.location.hash.replace("#", ""));
    if (hash) {
      requestAnimationFrame(() => {
        const node = document.getElementById(hash);
        if (!node) return;
        state.lockSpy = true;
        node.scrollIntoView({ block: "start" });
        const section = node.classList.contains("menu-section") ? node : node.closest(".menu-section");
        if (section) setActive(section.id, true);
        if (node.classList.contains("item")) node.classList.add("is-hit");
        setTimeout(() => { state.lockSpy = false; }, 700);
      });
    }
  }

  dietEl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-diet]");
    if (!button) return;
    state.diet = button.dataset.diet;
    history.replaceState(null, "", location.pathname + location.search);
    render();
    window.scrollTo({ top: 0 });
  });

  tabsEl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-slug]");
    if (!button) return;
    const node = document.getElementById(button.dataset.slug);
    if (!node) return;
    state.lockSpy = true;
    setActive(button.dataset.slug, true);
    node.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", "#" + button.dataset.slug);
    setTimeout(() => { state.lockSpy = false; }, 700);
  });

  search.addEventListener("input", () => {
    state.query = search.value;
    state.offer = "";
    const url = new URL(window.location.href);
    url.searchParams.delete("offer");
    if (state.query.trim()) url.searchParams.set("q", state.query.trim());
    else url.searchParams.delete("q");
    url.hash = "";
    history.replaceState(null, "", url.pathname + url.search);
    render();
  });

  window.addEventListener("resize", setOffset);
  render();
})();
