(function () {
  "use strict";

  const sectionsEl = document.getElementById("sections");
  const tocListEl = document.getElementById("toc-list");
  const statsEl = document.getElementById("stats");
  const searchEl = document.getElementById("search");
  const statusButtons = Array.from(document.querySelectorAll(".status-btn"));
  const emptyState = document.getElementById("empty-state");

  const catBySlug = Object.fromEntries(CATEGORIES.map((c) => [c.slug, c]));

  function penDotClass(cat) {
    if (cat.penName === "Anwar Zanzibar") return "dot-zanzibar";
    return "dot-default";
  }

  function statusGroup(status) {
    return status === "published" ? "published" : "upcoming";
  }

  function metaParts(work) {
    const parts = [];
    if (work.language) parts.push(work.language);
    if (work.note) parts.push(work.note);
    if (work.level && work.code) parts.push("ref " + work.code);
    return parts;
  }

  // Group works by category, preserving source order within each group.
  const grouped = new Map();
  CATEGORIES.forEach((c) => grouped.set(c.slug, []));
  WORKS.forEach((w) => {
    if (!grouped.has(w.category)) grouped.set(w.category, []);
    grouped.get(w.category).push(w);
  });

  // Build TOC + sections
  let totalWorks = 0;

  CATEGORIES.forEach((cat) => {
    const items = grouped.get(cat.slug) || [];
    if (items.length === 0) return;
    totalWorks += items.length;

    // --- TOC entry ---
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#" + cat.slug;
    a.dataset.slug = cat.slug;
    a.innerHTML =
      '<span>' + cat.label + '</span><span class="n">' + items.length + "</span>";
    li.appendChild(a);
    tocListEl.appendChild(li);

    // --- Section ---
    const section = document.createElement("section");
    section.className = "section";
    section.id = cat.slug;
    section.dataset.slug = cat.slug;

    const head = document.createElement("div");
    head.className = "section-head";
    const h2 = document.createElement("h2");
    h2.textContent = cat.label;
    head.appendChild(h2);
    const count = document.createElement("span");
    count.className = "section-count";
    count.textContent = items.length + (items.length === 1 ? " work" : " works");
    head.appendChild(count);
    if (cat.penName) {
      const pen = document.createElement("span");
      pen.className = "pen-tag";
      pen.innerHTML = '<span class="dot ' + penDotClass(cat) + '"></span> as ' + cat.penName;
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
        metaEl.innerHTML = parts
          .map((p) => '<span>' + p + "</span>")
          .join('<span class="sep">·</span>');
        mainEl.appendChild(metaEl);
      }

      // Publication description
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
        tag.textContent = "Ready to publish";
        endEl.appendChild(tag);
      } else if (w.status === "editing") {
        const tag = document.createElement("span");
        tag.className = "tag tag-editing";
        tag.textContent = "In progress";
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

  statsEl.textContent =
    totalWorks + " works across " + CATEGORIES.filter((c) => (grouped.get(c.slug) || []).length).length +
    " collections.";

  // ---------------- Filtering ----------------
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
      if (countEl) {
        countEl.textContent = visibleCount + (visibleCount === 1 ? " work" : " works");
      }
    });

    tocListEl.querySelectorAll("li").forEach((li) => {
      const link = li.querySelector("a");
      const slug = link.dataset.slug;
      const section = document.getElementById(slug);
      const nEl = link.querySelector(".n");
      if (section && nEl) {
        nEl.textContent = section.querySelectorAll(".row:not(.hidden-row)").length;
      }
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

  // ---------------- Active TOC highlight on scroll ----------------
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
