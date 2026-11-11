(function () {
  const search = document.getElementById("search");
  const results = document.getElementById("results");
  const offersEl = document.getElementById("offers");
  const popularEl = document.getElementById("popular");
  const browseEl = document.getElementById("browse");
  const header = document.querySelector(".site-header");
  const onOffer = offerIds();

  function dietMark(diet) {
    const label = diet === "veg" ? "Vegetarian" : "Non vegetarian";
    return '<span class="mark-diet ' + diet + '" role="img" aria-label="' + label + '"></span>';
  }

  function priceHtml(entry) {
    const was = entry.compareAt
      ? '<span class="was">' + formatPrice(entry.compareAt) + "</span>"
      : "";
    return '<span class="price">' + was + formatPrice(entry.price) + "</span>";
  }

  function renderOffers() {
    offersEl.innerHTML = OFFERS.map((offer) => {
      const href = "menu.html?offer=" + encodeURIComponent(offer.id);
      return (
        '<a class="offer" href="' + href + '">' +
          '<span class="kicker">' + offer.kicker + "</span>" +
          "<h4>" + offer.title + "</h4>" +
          "<p>" + offer.detail + "</p>" +
          '<span class="code">' + offer.code + "</span>" +
        "</a>"
      );
    }).join("");
  }

  function dishCard(entry) {
    const badge = onOffer.has(entry.id) ? '<span class="pill">Offer</span>' : "";
    return (
      '<a class="dish" href="menu.html#item-' + entry.id + '">' +
        '<span class="title">' + dietMark(entry.diet) + entry.name + badge + "</span>" +
        priceHtml(entry) +
        '<p class="desc">' + entry.description + "</p>" +
        '<span class="foot"><span class="cat-link">' + entry.category.name + "</span></span>" +
      "</a>"
    );
  }

  function renderPopular() {
    const items = allItems().filter((entry) => entry.popular);
    const veg = items.filter((entry) => entry.diet === "veg");
    const nonVeg = items.filter((entry) => entry.diet === "non_veg");
    popularEl.innerHTML =
      column("Veg", "veg", veg) + column("Non Veg", "non_veg", nonVeg);
  }

  function column(label, diet, items) {
    return (
      '<div class="popular-col">' +
        "<h4>" + dietMark(diet) + label + "</h4>" +
        '<div class="cards">' + items.map(dishCard).join("") + "</div>" +
      "</div>"
    );
  }

  function renderBrowse() {
    const groups = MENU.groups.slice().sort((a, b) => a.order - b.order);
    browseEl.innerHTML = groups.map((group) => {
      const cats = MENU.categories
        .filter((category) => category.group === group.id)
        .sort((a, b) => a.order - b.order);
      const cards = cats.map((category) => {
        return (
          '<a class="cat-card" href="menu.html#' + category.slug + '">' +
            "<strong>" + category.name + "</strong>" +
            "<span>" + category.items.length + " dishes</span>" +
          "</a>"
        );
      }).join("");
      return (
        "<section>" +
          '<h4 class="group-label">' + group.label + "</h4>" +
          '<div class="cat-grid">' + cards + "</div>" +
        "</section>"
      );
    }).join("");
  }

  function searchItems(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allItems().filter((entry) => {
      const hay = (entry.name + " " + entry.description + " " + entry.category.name).toLowerCase();
      return hay.includes(q);
    }).slice(0, 8);
  }

  function renderResults() {
    const q = search.value;
    if (!q.trim()) {
      results.hidden = true;
      results.innerHTML = "";
      return;
    }
    const found = searchItems(q);
    results.hidden = false;
    if (!found.length) {
      results.innerHTML = '<p class="empty">No dishes match “' + escapeHtml(q.trim()) + "”.</p>";
      return;
    }
    results.innerHTML = found.map((entry) => {
      return (
        '<a class="result" href="menu.html#item-' + entry.id + '">' +
          dietMark(entry.diet) +
          '<span><span class="name">' + entry.name + '</span><span class="meta">' + entry.category.name + "</span></span>" +
          priceHtml(entry) +
        "</a>"
      );
    }).join("") +
      '<a class="result" href="menu.html?q=' + encodeURIComponent(q.trim()) + '">' +
        '<span></span><span><span class="name">See every match</span><span class="meta">Open the Menu</span></span><span></span>' +
      "</a>";
  }

  function escapeHtml(value) {
    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  search.addEventListener("input", renderResults);
  search.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const q = search.value.trim();
      if (q) window.location.href = "menu.html?q=" + encodeURIComponent(q);
    }
    if (event.key === "Escape") {
      search.value = "";
      renderResults();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-wrap")) {
      results.hidden = true;
    } else if (search.value.trim()) {
      results.hidden = false;
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== search) {
      event.preventDefault();
      search.focus();
    }
  });
  document.addEventListener("scroll", () => {
    header.classList.toggle("is-stuck", window.scrollY > 4);
  }, { passive: true });

  renderOffers();
  renderPopular();
  renderBrowse();
})();
