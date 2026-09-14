/*
   PUBLICATION DESCRIPTIONS
   -------------------------
   Short catalogue descriptions derived only from the bibliography's
   categories, levels, notes and titles. More specific editorial blurbs
   can replace these later as individual books are reviewed.
*/
(function () {
  "use strict";

  function descriptionFor(work, category) {
    const label = category ? category.label : "";
    const title = work.title;

    if (work.category === "readers") {
      const level = work.level ? " at CEFR " + work.level : "";
      if (work.note === "bundle") {
        return "A collection of RJP Readers" + level + ", bringing together the stories identified in the title.";
      }
      return "An English graded reader" + level + " from the RJP Readers series, using a short narrative to support developing reading fluency.";
    }

    if (work.category === "sarah-mackay-shorts") {
      return "A short story in the Sarah Mackay series, identified by the location named in the title.";
    }

    if (work.category === "sarah-mackay-novels") {
      return "A Sarah Mackay novel from the international thriller series.";
    }

    if (work.category === "philosophy") {
      return "A philosophical work examining the questions and ideas signalled by its title.";
    }

    if (work.category === "experimental") {
      const form = work.note ? work.note.split(" · ")[0] : "experimental fiction";
      return "A " + form + " work exploring an unconventional approach to narrative.";
    }

    if (work.category === "romantasy") {
      const form = work.note ? work.note.split(" · ")[0] : "romantic fantasy";
      return "A " + form + " combining romantic and fantastical elements.";
    }

    if (work.category === "witchcraft") {
      if (work.note === "box set · W1–W3") {
        return "A collected edition bringing together the first three Anwar Zanzibar witchcraft training works.";
      }
      return "A practical work on witchcraft and magick, published as Anwar Zanzibar.";
    }

    if (work.category === "sexuality") {
      return "A work on sexuality and related themes, published as Anwar Zanzibar.";
    }

    if (work.category === "language-learning") {
      return "A language-learning work focused on practical English development.";
    }

    if (work.category === "thrillers") {
      return "A thriller centred on the situation and themes indicated by its title.";
    }

    if (work.category === "sci-fi") {
      return "A science-fiction work exploring the possibilities suggested by its title.";
    }

    if (work.category === "other-novels" || work.category === "novellas") {
      return "A work of fiction in the author's wider catalogue.";
    }

    if (work.category === "other-nonfiction") {
      return "A non-fiction work examining the subject indicated by its title.";
    }

    return "A published work in the " + label + " collection.";
  }

  function addDescriptions() {
    const rows = Array.from(document.querySelectorAll(".row"));
    const categories = Object.fromEntries(CATEGORIES.map((c) => [c.slug, c]));

    rows.forEach((row) => {
      const titleEl = row.querySelector(".row-title");
      if (!titleEl) return;

      const work = WORKS.find((item) => item.title === titleEl.textContent);
      if (!work) return;

      const description = descriptionFor(work, categories[work.category]);
      const descriptionEl = document.createElement("div");
      descriptionEl.className = "row-description";
      descriptionEl.textContent = description;

      const mainEl = row.querySelector(".row-main");
      const metaEl = mainEl.querySelector(".row-meta");
      if (metaEl) mainEl.insertBefore(descriptionEl, metaEl);
      else mainEl.appendChild(descriptionEl);

      row.dataset.title += " " + description.toLowerCase();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addDescriptions);
  } else {
    addDescriptions();
  }
})();
