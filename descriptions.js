/*
   PUBLICATION DESCRIPTIONS
   -------------------------
   Short catalogue descriptions. Specific blurbs are used where reliable
   published descriptions are available; otherwise the catalogue falls back
   to restrained metadata-based wording rather than inventing plot details.
*/
(function () {
  "use strict";

  function descriptionFor(work, category) {
    const label = category ? category.label : "";

    // Major Sarah Mackay novels
    if (work.title === "Beijing") {
      return "The first Sarah Mackay novel: a young Scottish student travels to Beijing for an AI internship at Tsinghua University and becomes entangled in surveillance, an experimental AI project, and the ethical boundary between prediction and control.";
    }

    if (work.title === "Vatican & Moony Conspiracies") {
      return "The second Sarah Mackay novel, in which Sarah is summoned to the Vatican and drawn into an investigation involving a missing priest, a suppressed manuscript, and a mystery that reaches into the history of the Catholic Church.";
    }

    if (work.title === "Quantum Supremacy") {
      return "The third Sarah Mackay novel: a race for quantum supremacy draws Sarah's research into the attention of intelligence agencies, rogue scientists, and cybercriminals, linking quantum computing, espionage, and the future of AI.";
    }

    if (work.title === "Gaza & Sudan") {
      return "The fourth Sarah Mackay novel, following Sarah through a mission in Gaza and captivity in Sudan as war, betrayal, survival, and the pursuit of justice collide.";
    }

    if (work.title === "The Frozen Lands") {
      return "The fifth Sarah Mackay novel moves into the Arctic, where melting ice, a struggle over untapped resources, and a conspiracy involving major powers threaten to trigger a global conflict.";
    }

    // Major philosophical works
    if (work.title === "What is Existence? — Mind, Matter and Meaning") {
      return "An accessible inquiry into existence that moves from matter and physical process to consciousness, meaning, responsibility, and mortality, asking how value and purpose can emerge in a universe without built-in purpose.";
    }

    if (work.title === "Eudainomic Flow, or the Art of Flourishing") {
      return "A modern philosophy of human flourishing that combines ethical living, emotional intelligence, personal freedom, radical consent, empathy, and transparency into a practical framework for individual and collective well-being.";
    }

    if (work.title === "Constraintism — A Constraint-based Philosophy") {
      return "A philosophical framework built around the claim that every system representing reality is constrained by the act of representation itself. Constraintism applies this insight to objectivity, knowledge, causality, ethics, freedom, and scientific progress.";
    }

    if (work.title === "Threshold Ethics") {
      return "A pragmatic framework for moral decisions in emergencies where every available option causes harm. It proposes explicit thresholds and enforceable constraints for exceptional action, with applications including AI alignment, biosecurity, autonomous weapons, and emergency powers.";
    }

    if (work.title === "Patterns That Matter") {
      return "A guided journey through the limits of scientific certainty, tracing how relativity, quantum mechanics, chaos, and incompleteness changed our understanding of knowledge—and arguing that meaning and responsible action remain possible without absolute certainty.";
    }

    if (work.title === "The Symphony of Existence — From the Big Bang to the Illusion of Time") {
      return "A wide-ranging exploration connecting cosmology, quantum physics, neuroscience, and philosophy, from the Big Bang, black holes, and entropy to consciousness, spacetime, uncertainty, and the possibility that reality is fundamentally relational and emergent.";
    }

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
