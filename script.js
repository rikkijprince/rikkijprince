(function () {
  "use strict";

  const sectionsEl = document.getElementById("sections");
  const tocListEl = document.getElementById("toc-list");
  const statsEl = document.getElementById("stats");
  const searchEl = document.getElementById("search");
  const statusButtons = Array.from(document.querySelectorAll(".status-btn"));
  const emptyState = document.getElementById("empty-state");
  const isSpanish = window.PUBLICATIONS_LANG === "es";

  const CATEGORY_LABELS_ES = {
    "novellas-flash-fiction": "Novelas cortas y ficción breve",
    "sci-fi": "Ciencia ficción",
    "thrillers": "Thrillers",
    "nine-days": "Sarah Mackay — Serie Nine Days",
    "sarah-mackay-novels": "Sarah Mackay — Novelas",
    "philosophy": "Obras filosóficas",
    "witchcraft-magic-sexuality": "Brujería, magia y sexualidad",
    "language-learning": "Aprendizaje de idiomas",
    "readers": "Lecturas graduadas de inglés"
  };

  const LANGUAGE_LABELS_ES = {
    English: "Inglés",
    Spanish: "Español",
    German: "Alemán",
    French: "Francés",
    Italian: "Italiano",
    Valencian: "Valenciano"
  };

  const NOTE_LABELS_ES = {
    "flash fiction": "ficción breve",
    "novelette": "novela corta",
    "novella": "novela corta",
    "box set · W1–W3": "edición recopilatoria · W1–W3",
    "translation of T01": "traducción de T01",
    "translation of T02": "traducción de T02"
  };

  function categoryLabel(cat) {
    return isSpanish ? (CATEGORY_LABELS_ES[cat.slug] || cat.label) : cat.label;
  }

  function pluralWorks(n) {
    if (isSpanish) return n === 1 ? "obra" : "obras";
    return n === 1 ? "work" : "works";
  }

  function languageLabel(value) {
    return isSpanish ? (LANGUAGE_LABELS_ES[value] || value) : value;
  }

  function noteLabel(value) {
    if (!isSpanish) return value;
    return Object.keys(NOTE_LABELS_ES).reduce((text, key) => text.replace(key, NOTE_LABELS_ES[key]), value);
  }

  function penLabel(name) {
    return isSpanish ? "como " + name : "as " + name;
  }

  function statusGroup(status) {
    return status === "published" ? "published" : "upcoming";
  }

  function metaParts(work) {
    const parts = [];
    if (work.language) parts.push(languageLabel(work.language));
    if (work.note) parts.push(noteLabel(work.note));
    if (work.level && work.code) parts.push((isSpanish ? "ref. " : "ref ") + work.code);
    return parts;
  }

  const grouped = new Map();
  CATEGORIES.forEach((c) => grouped.set(c.slug, []));
  WORKS.forEach((w) => {
    if (!grouped.has(w.category)) grouped.set(w.category, []);
    grouped.get(w.category).push(w);
  });

  let totalWorks = 0;

  CATEGORIES.forEach((cat) => {
    const items = grouped.get(cat.slug) || [];
    if (items.length === 0) return;
    totalWorks += items.length;

    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#" + cat.slug;
    a.dataset.slug = cat.slug;
    a.innerHTML = '<span>' + categoryLabel(cat) + '</span><span class="n">' + items.length + "</span>";
    li.appendChild(a);
    tocListEl.appendChild(li);

    const section = document.createElement("section");
    section.className = "section";
    section.id = cat.slug;
    section.dataset.slug = cat.slug;

    const head = document.createElement("div");
    head.className = "section-head";
    const h2 = document.createElement("h2");
    h2.textContent = categoryLabel(cat);
    head.appendChild(h2);
    const count = document.createElement("span");
    count.className = "section-count";
    count.textContent = items.length + " " + pluralWorks(items.length);
    head.appendChild(count);
    if (cat.penName) {
      const pen = document.createElement("span");
      pen.className = "pen-tag";
      pen.innerHTML = '<span class="dot ' + penDotClass(cat) + '"></span> ' + penLabel(cat.penName);
      pen.style.display = "inline-flex";
      pen.style.alignItems = "center";
      pen.style.gap = "6px";
      head.appendChild(pen);
    }
    section.appendChild(head);

    const list = document.createElement("div");
    list.className = "row-list";

    items.forEach((w) => {
      const hasUrl = !!(w.url && w.url.trim());
      const row = document.createElement(hasUrl ? "a" : "div");
      row.className = "row";
      row.dataset.title = (w.title + " " + (w.code || "") + " " + (w.language || "")).toLowerCase();
      row.dataset.status = statusGroup(w.status);
      if (hasUrl) {
        row.href = w.url;
        row.target = "_blank";
        row.rel = "noopener noreferrer";
      }

      const codeEl = document.createElement("div");
      codeEl.className = "row-code";
      codeEl.textContent = w.level || w.code || "";

      const mainEl = document.createElement("div");
      mainEl.className = "row-main";
      const titleEl = document.createElement("div");
      titleEl.className = "row-title";
      titleEl.textContent = w.title;
      mainEl.appendChild(titleEl);
      const parts = metaParts(w);
      if (parts.length) {
        const metaEl = document.createElement("div");
        metaEl.className = "row-meta";
        metaEl.innerHTML = parts.map((p) => '<span>' + p + "</span>").join('<span class="sep">·</span>');
        mainEl.appendChild(metaEl);
      }

      if (typeof window.descriptionFor === "function") {
        const description = window.descriptionFor(w, cat);
        if (description) {
          const descriptionEl = document.createElement("div");
          descriptionEl.className = "row-description";
          descriptionEl.textContent = description;
          mainEl.appendChild(descriptionEl);
        }
      }

      const endEl = document.createElement("div");
      endEl.className = "row-end";
      if (w.status === "ready") {
        const tag = document.createElement("span");
        tag.className = "tag tag-ready";
        tag.textContent = isSpanish ? "Listo para publicar" : "Ready to publish";
        endEl.appendChild(tag);
      } else if (w.status === "editing") {
        const tag = document.createElement("span");
        tag.className = "tag tag-editing";
        tag.textContent = isSpanish ? "En proceso" : "In progress";
        endEl.appendChild(tag);
      }
      if (hasUrl) {
        const arrow = document.createElement("span");
        arrow.className = "row-arrow";
        arrow.textContent = "↗";
        endEl.appendChild(arrow);
      } else {
        const dash = document.createElement("span");
        dash.className = "row-dash";
        dash.textContent = "—";
        endEl.appendChild(dash);
      }

      row.appendChild(codeEl);
      row.appendChild(mainEl);
      row.appendChild(endEl);
      list.appendChild(row);
    });

    section.appendChild(list);
    sectionsEl.appendChild(section);
  });

  statsEl.textContent = isSpanish
    ? totalWorks + " obras en " + CATEGORIES.filter((c) => (grouped.get(c.slug) || []).length).length + " colecciones."
    : totalWorks + " works across " + CATEGORIES.filter((c) => (grouped.get(c.slug) || []).length).length + " collections.";

  let currentStatus = "all";
  let currentQuery = "";

  function applyFilters() {
    const rows = sectionsEl.querySelectorAll(".row");
    let visibleTotal = 0;

    rows.forEach((row) => {
      const matchesStatus = currentStatus === "all" || row.dataset.status === currentStatus;
      const matchesQuery = !currentQuery || row.dataset.title.includes(currentQuery);
      const visible = matchesStatus && matchesQuery;
      row.classList.toggle("hidden-row", !visible);
      if (visible) visibleTotal++;
    });

    sectionsEl.querySelectorAll(".section").forEach((section) => {
      const visibleCount = section.querySelectorAll(".row:not(.hidden-row)").length;
      section.classList.toggle("hidden-section", visibleCount === 0);
      const countEl = section.querySelector(".section-count");
      if (countEl) countEl.textContent = visibleCount + " " + pluralWorks(visibleCount);
    });

    tocListEl.querySelectorAll("li").forEach((li) => {
      const link = li.querySelector("a");
      const slug = link.dataset.slug;
      const section = document.getElementById(slug);
      const nEl = link.querySelector(".n");
      if (section && nEl) nEl.textContent = section.querySelectorAll(".row:not(.hidden-row)").length;
      li.style.display = section && section.classList.contains("hidden-section") ? "none" : "";
    });

    emptyState.hidden = visibleTotal !== 0;
  }

  searchEl.addEventListener("input", (e) => {
    currentQuery = e.target.value.trim().toLowerCase();
    applyFilters();
  });

  statusButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      statusButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      currentStatus = btn.dataset.status;
      applyFilters();
    });
  });

  const tocLinks = Array.from(tocListEl.querySelectorAll("a"));
  const sections = Array.from(sectionsEl.querySelectorAll(".section"));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = tocListEl.querySelector('a[data-slug="' + entry.target.dataset.slug + '"]');
        if (!link) return;
        if (entry.isIntersecting) {
          tocLinks.forEach((l) => l.classList.remove("is-active"));
          link.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-10% 0px -75% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
})();
