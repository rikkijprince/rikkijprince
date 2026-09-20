/*
   PUBLICATION DESCRIPTIONS
   -------------------------
   Short catalogue descriptions. Specific blurbs are used where reliable
   published descriptions are available; otherwise the catalogue falls back
   to restrained metadata-based wording rather than inventing plot details.
*/
(function () {
  "use strict";

  const SHORT_DESCRIPTIONS = {
    // Sarah Mackay — short stories
    "Geneva": "Sarah Mackay's first scientific adventure takes her to CERN for an intense immersion in particle physics, where quantum uncertainty begins to blur the boundary between science, mystery, and personal discovery.",
    "Istanbul": "A group of young physicists gathers in Istanbul for a nine-day immersion in quantum gravity, where difficult questions about space and reality become entangled with rivalry, romance, and personal uncertainty.",
    "Prague": "The quantum-gravity journey continues in Prague, where Sarah and her fellow physicists confront deeper questions about reality while strained friendships and rivalries become increasingly difficult to contain.",
    "Paris": "Sarah Mackay explores chaos theory in Paris, investigating whether reality itself might be understood as a chaotic web of logical possibilities.",
    "Florence": "In Florence, Sarah continues her exploration of chaos theory, confronting fractals, complex systems, and the personal tensions that accompany her search for an underlying order in nature.",
    "Copenhagen": "Sarah Mackay turns to quantum mechanics in Copenhagen, exploring the strange behaviour of matter and the implications it may hold for her developing understanding of reality.",
    "Bern": "In Bern, Sarah and a group of modern students explore special relativity in the city where Einstein developed his revolutionary ideas, connecting the mathematics of spacetime with the human story behind it.",
    "Berlin": "Sarah Mackay travels to Berlin for an intensive exploration of general relativity, combining the mathematics of spacetime and gravity with the history of Einstein and the upheaval of contemporary Europe.",
    "Oxford": "In Oxford, Sarah investigates whether geometry may hold the key to understanding reality, exploring spacetime, symmetry, twistor theory, and black holes.",
    "Princeton": "Sarah Mackay explores the possibility that information, rather than matter, lies at the foundation of reality, confronting questions about quantum mechanics, consciousness, and the nature of the universe.",
    "New York": "Sarah leaves theoretical physics behind for nine days of private-investigation training in New York, learning surveillance, forensic methods, and the unpredictable logic of human behaviour.",
    "Mexico City": "Sarah studies forensic science in Mexico City while becoming the target of a shadowy organisation, forcing her to combine scientific reasoning, investigation, and survival.",
    "Cambridge": "A nine-day seminar on the theoretical foundations of time travel draws Sarah into questions about wormholes, closed time-like curves, paradoxes, and whether time itself can be manipulated.",
    "Kyoto": "In Kyoto, Sarah investigates the nature of time through quantum mechanics, time dilation, and the quantum Zeno effect while confronting difficult questions about science, relationships, and the future.",

    // Novellas & Flash Fiction
    "Mystery in Reverse": "A piece of flash fiction built around an unconventional narrative perspective in which the mystery must be understood by moving backwards through events.",
    "Murder Undone": "In a world where time flows backwards, private investigator Elias Vayne investigates a murder that has yet to be committed—and discovers that solving it may be as strange as committing it.",
    "Misterio al revés": "The Spanish edition of Mystery in Reverse, a piece of flash fiction built around an unconventional backwards-moving mystery.",
    "Un crimen por deshacer": "The Spanish edition of Murder Undone, a time-reversed mystery in which a private investigator follows a murder backwards through cause and effect.",
    "The Never-Ending Question": "Alaric Hart follows a cryptic journal left by his father into a philosophical and scientific investigation of existence, reality, free will, and the possibility that some questions can never be answered.",
    "The Moonfire Pact": "Evren carries an ancient power bound to the Rift, a chaotic force threatening reality. Joined by the warrior Vaelir, she must discover whether the Rift is meant to be destroyed—or transformed.",
    "A Café called Zuflucht": "A fragmented story of love, crime, betrayal, exile, and the possibility of redemption.",
    "Ein Café namens Zuflucht": "German-language edition of A Café called Zuflucht.",
    "Una Cafetería llamada Zuflucht": "Spanish-language edition of A Café called Zuflucht.",
    "Un Café Nommé Zuflucht": "French-language edition of A Café called Zuflucht.",
    "Un café chiamato Zuflucht": "Italian-language edition of A Café called Zuflucht.",
    "L'Apagada": "A novelette exploring disappearance, memory, and the emotional consequences of a sudden break with the past.",

    // Witchcraft, Magic & Sexuality
    "Fundamentals of Witchcraft": "An introduction to the foundations of witchcraft and magick, providing a structured starting point for readers developing their understanding and practice.",
    "Witchcraft and Magick": "A practical exploration of witchcraft and magick, moving beyond basic concepts into methods, practices, and the development of a personal magical discipline.",
    "Advanced Witchcraft Training": "An advanced training manual covering techniques such as energy work, astral projection, sigils, evocation, shadow work, and other forms of contemporary magical practice.",
    "Chaos Magick": "An introduction to chaos magick centred on belief, symbolism, sigils, altered states, servitors, experimentation, and the idea that magical practice can be deliberately designed and adapted.",
    "The Complete Witchcraft Training Manual": "A collected edition bringing together the first three Anwar Zanzibar witchcraft training manuals, from foundational practice through advanced techniques.",
    "Practical Guide to Witchcraft & Chaos Magick": "A practical introduction to witchcraft and chaos magick, combining traditional magical concepts with an experimental approach to belief, symbolism, ritual, and personal practice.",
    "Entre Gemidos": "A Spanish-language exploration of the science and psychology of sexual pleasure, examining desire, arousal, the body, and the factors that shape intimate experience.",
    "Behind the Moans": "An accessible exploration of the science of pleasure, examining the physical, psychological, and emotional dimensions of sexual experience.",
    "Desire and Denunciation": "A history of sex magic from ancient temples to modern witchcraft.",
    "Re-Enchantment of the Body": "The hidden history of sex, magic, and the sacred body.",

    // Language learning
    "How to Overcome Any Obstacle to Studying": "A practical, research-informed guide to overcoming psychological, emotional, physical, and digital barriers to learning, with strategies for attention, motivation, anxiety, perfectionism, and effective study.",
    "Cómo superar cualquier obstáculo para estudiar": "The Spanish edition of How to Overcome Any Obstacle to Studying, offering practical strategies for overcoming the psychological, emotional, physical, and digital barriers to learning.",
    "Comment surmonter tout obstacle à l'étude": "The French edition of How to Overcome Any Obstacle to Studying, offering practical strategies for overcoming the psychological, emotional, physical, and digital barriers to learning.",
    "Technical English in 2026": "A practical upper-intermediate coursebook for technical and engineering English, covering modern industry, robotics, PLCs, digital twins, manufacturing, sustainability, project management, and professional communication.",
    "Automatic Mind — Engineering the Subconscious for Language Mastery": "A practical exploration of how automatic mental processes can be trained and used to support language learning, fluency, memory, and more natural communication.",
    "Speak Naturally! Part 1 (A2–B1)": "A practical speaking course taking learners from A2 towards B1 through realistic conversations, vocabulary, pronunciation practice, role-play, communication challenges, and fluency activities.",
    "Speak Naturally! Part 2 (B1–B2)": "The second stage of Speak Naturally!, developing B1–B2 speaking through conversations and activities covering health, travel, culture, nature, science, and the environment.",
    "Speak Naturally! Part 3 (B2–B2+)": "The advanced stage of Speak Naturally!, developing B2–B2+ speaking through discussion, debate, negotiation, and presentation on business, media, society, global issues, and personal development.",
    "Speak Naturally! Box Set, Parts 1–3 (A2–B2+)": "The complete three-part Speak Naturally! speaking course, taking learners from A2 to B2+ through 96 lessons focused on real conversations, vocabulary, pronunciation, fluency, discussion, negotiation, and presentation.",

    // RJP Readers — keys omit the CEFR prefix; lookup below preserves the displayed title.
    "Max the Brave": "An A1.1 reader about Max, a young hero who faces a small but important challenge and discovers that courage can take many forms.",
    "The Runaway Robot": "An A1.1 reader about a lonely inventor whose small AI robot runs away to explore the city and learns about people, danger, and friendship.",
    "Max the Brave and The Runaway": "A beginner-level collection bringing together Max the Brave and The Runaway Robot.",
    "The Mystery of the Missing Cake": "An A1.2 mystery in which two classmates become detectives when a cake disappears during the school fair—and discover that one mystery can lead to another.",
    "The Dead Cat on My Doorstep": "On Sarah Mackay's nineteenth birthday, a mysterious box containing a dead cat appears at her door. With no note or explanation, Sarah sets out to discover who sent it and why.",
    "The Dead Cat on My Doorstep and The Mystery of the Missing Cake": "A collection of two A1.2 mystery stories: The Dead Cat on My Doorstep and The Mystery of the Missing Cake.",
    "The Lighthouse Code": "An A2.1 adventure in which Lena and her brother uncover a decades-old mystery in a ruined lighthouse and follow a coded journal towards a discovery far more valuable than treasure.",
    "The New Student": "An A2.1 story about Zayne and Noah, two students who look alike and agree to exchange lives for a week—only to discover how different the worlds they inhabit really are.",
    "The Lighthouse Code and Others": "A collection of A2.1 stories including The Lighthouse Code and The New Student.",
    "The Street Dog": "An A2.1 story centred on a street dog and the people whose lives become connected with it.",
    "The Alley Cat": "An A2.2 story about an alley cat whose presence draws people into an unexpected mystery.",
    "Street Dog and Alley Cat": "A collection bringing together two animal-centred RJP Readers stories: The Street Dog and The Alley Cat.",
    "The House on Silver Street": "When Cass moves to Silver Street, she becomes fascinated by an avoided house and discovers hidden letters that reveal a buried history and a ghost seeking to be remembered.",
    "The Midnight Phone Call": "An A2.2 mystery beginning with a late-night phone call that changes an ordinary teenager's understanding of what is happening around her.",
    "The Window Across the Street": "After an accident leaves Tom confined indoors, he watches the building opposite and sees a woman disappear. When another neighbour vanishes, nobody can dismiss what he has witnessed.",
    "The Alley Cat and Other Stories": "A collection of A2.2 stories including The Alley Cat, The House on Silver Street, The Midnight Phone Call, and The Window Across the Street.",
    "Shadows at School": "An unsettling B1.1 story in which a quiet teenager begins behaving strangely, leaving those around him wondering what is really happening.",
    "The Girl Who Wasn't There": "A B1.1 mystery about a girl who moves in with her stepmother and gradually discovers that the people and events around her may not be what they seem.",
    "The Secret Lab": "Teen inventor Helen creates an AI called Bud, but as the system develops faster than expected, she must decide whether she has created a friend, a threat, or something beyond her control.",
    "Digital Ghost": "A B1.2 technological mystery in which a high-school student discovers a strange digital presence and begins investigating where it came from.",
    "The Secret Lab and The Digital Ghost": "A collection combining two technology-focused stories: The Secret Lab and Digital Ghost.",
    "Shadows at School and Others": "A collection of B1.1 readers combining Shadows at School with other stories from the series.",
    "Second Skin": "A B1.2 story in which a young woman becomes increasingly concerned when her best friend develops an intense obsession with something new in her life.",
    "The Last Game": "A B1.2 story set in a near-future world of advanced gaming, where a popular game becomes much more serious than its players expect.",
    "The Package": "A B1.2 mystery beginning when a popular gaming streamer receives an unexpected invitation to try a secret new experience.",
    "Second Skin and Other Stories": "A collection of B1.2 stories including Second Skin, The Last Game, and The Package.",
    "The Disappearing Hour": "A B2.1 mystery in which Claire, a teenage girl, begins losing one unexplained hour from every day and sets out to discover where the missing time goes.",
    "The Fall of Elias Grey": "A B2.1 story about Elias Grey, a young lifestyle influencer whose carefully constructed public image begins to unravel.",
    "Voices from the Deep": "A B2.1 adventure following young marine researchers whose routine work beneath the sea leads them towards an unexpected discovery.",
    "The Disappearing Hour and Others": "A collection of B2.1 stories including The Disappearing Hour, The Fall of Elias Grey, and Voices from the Deep.",
    "The Hacker Code": "A B2.2 technology thriller involving hacking, hidden information, and the search for the people behind a mysterious code.",
    "The Inheritance Algorithm": "In a near-future society shaped by algorithms governing wealth and status, an inheritance becomes the key to uncovering a much larger system of control.",
    "The Island of Secrets": "After a plane crash leaves a group of teenagers stranded on an isolated island, survival becomes inseparable from uncovering the secrets hidden there.",
    "The Hacker Code and Other Stories": "A collection of B2.2 stories including The Hacker Code, The Inheritance Algorithm, and The Island of Secrets.",
    "Eternal Echoes": "A C1.1 story exploring memory, identity, and the persistence of the past through events that continue to echo into the present.",
    "The Weight of Silence": "A C1.1 story about the consequences of what is left unsaid, where silence becomes as significant as the words the characters choose to speak.",
    "Eternal Echoes and The Weight of Silence": "A collection bringing together two C1.1 stories exploring memory, identity, communication, and the enduring influence of the past.",
    "The Collapse": "A C1.2 story examining the human consequences of a sudden collapse and the choices people must make when familiar systems can no longer be trusted.",
    "The Memory Index": "A C1.2 speculative mystery exploring memory, information, and the possibility of recording and retrieving the experiences that make us who we are.",
    "The Collapse and The Memory Index": "A collection of two C1.2 stories exploring technological change, memory, uncertainty, and the fragility of human systems.",
    "The Archive of Vanishing Things": "A C2.1 story about disappearing objects, memories, and traces of the past—and the mystery of what happens to things that are gradually forgotten.",
    "Under the Skin": "A C2.1 psychological story exploring identity, hidden motives, and what may lie beneath the surface of apparently familiar people.",
    "The Archive of Vanishing Things and Under the Skin": "A collection of two C2.1 stories exploring identity, memory, disappearance, and the hidden layers of human experience.",
    "Clean Slate": "A C2.2 story exploring the possibility of starting again—and the difficulty of escaping the consequences of what came before.",
    "Underneath Her Smile": "A C2.2 psychological story about Liv and Mason, an apparently perfect internet couple whose glamorous public image hides a far more complicated private reality.",
    "Clean Slate and Underneath Her Smile": "A collection of two C2.2 stories exploring identity, reinvention, relationships, and the difference between appearance and reality.",

    // Thrillers
    "Bicameral: A Novel of Language, Consciousness and the Origins of the Human Mind": "Dr. Noor Kessler investigates an ancient chamber in Malta that reproduces a phenomenon her patients experience as a broken signal in the brain, leading her from Neolithic archaeology and current neuroscience to a dangerous discovery about the architecture of the human mind—and those who want to control it.",
    "Bicameral: Una Novela sobre el lenguaje, la conciencia y los orígenes de la mente humana": "La Dra. Noor Kessler investiga una antigua cámara en Malta que reproduce un fenómeno que sus pacientes experimentan como una señal averiada en el cerebro, llevándola desde la arqueología neolítica y la neurociencia actual hasta un peligroso descubrimiento sobre la arquitectura de la mente humana y quienes quieren controlarla.",
    "The 14th Page": "A psychological mystery built around a disturbing discovery on the fourteenth page of a book, where an apparently ordinary object becomes the beginning of a much larger mystery.",
    "The Secrets We Keep": "A thriller about hidden truths, personal secrets, and the consequences that follow when what people keep concealed can no longer remain buried.",
    "Los secretos que guardamos": "The Spanish edition of The Secrets We Keep, the same spinetingling backstory, but in the setting of an old mansion in Malaga, Spain.",

    // Science fiction
    "A Codex of Observations on Humanity": "An intelligence called The Child observes humanity through impossible questions about love, violence, fear, and death—until observation becomes something it was never built to feel.",
    "The Universe in Extremis": "In 2523, six cosmonauts and an android navigator travel beyond the Solar System to investigate five black holes and seek an answer to a five-century-old question about the nature of the universe. Grounded in real relativity and astrophysics, the mission becomes a struggle with betrayal, fractured loyalties, and an increasingly unreliable account of what really happened.",
    "The Universe Extra Machina": "Five years after the Starlight Aurora One returns, physicist Mia Faruq discovers an impossible discrepancy in humanity's wormhole network. Her investigation leads a group of scientists on a fifty-year journey towards the limits of information, reality, and the universe itself, while unfinished business from the first expedition follows them into the distant future.",
    "The Choir of Dust": "In a world where emotion has been rationed for thirty years, archivist Serina Dalvin discovers that the Ministry's vast collection of suppressed feelings is beginning to awaken. Pursued by the architects of the system, Serina and fellow archivist Simon Drell uncover a buried discovery that could transform humanity—and ultimately give rise to a new kind of consciousness."
  };

  function descriptionFor(work, category) {
    const label = category ? category.label : "";

    // Readers keep the CEFR level in the published/displayed title.
    // Strip only that prefix for description lookup; the title itself is untouched.
    let lookupTitle = work.title;
    if (work.category === "readers") {
      lookupTitle = lookupTitle.replace(/^(?:A1\.1|A1\.2|A2\.1|A2\.2|B1|B1\.1|B1\.2|B2\.1|B2\.2|C1\.1|C1\.2|C2\.1|C2\.2)\s+/, "");
    }

    if (SHORT_DESCRIPTIONS[lookupTitle]) {
      return SHORT_DESCRIPTIONS[lookupTitle];
    }

    // Major Sarah Mackay novels
    if (work.title === "Beijing") {
      return "The first Sarah Mackay novel: a young Scottish student travels to Beijing for an AI internship at Tsinghua University and becomes entangled in surveillance, an experimental AI project, and the ethical boundary between prediction and control.";
    }
    if (work.title === "Vatican & Moony Conspiracies") {
      return "Sarah Mackay investigates a conspiracy reaching from the Vatican to the Moon, combining scientific ideas, political intrigue, and a race to uncover the truth.";
    }
    if (work.title === "Quantum Supremacy") {
      return "Sarah Mackay confronts the implications of quantum technology as scientific ambition, power, and human relationships collide.";
    }
    if (work.title === "Gaza & Sudan") {
      return "Sarah Mackay is drawn into the human and political consequences of conflict in Gaza and Sudan, where science, power, and personal responsibility become inseparable.";
    }
    if (work.title === "The Frozen Lands") {
      return "Sarah Mackay travels into an increasingly dangerous frozen landscape where scientific investigation, survival, and hidden motives converge.";
    }

    // Major philosophy
    if (work.title === "What is Existence? — Mind, Matter and Meaning") {
      return "An accessible philosophical investigation of existence, exploring matter, mind, consciousness, meaning, and the relationship between scientific explanation and human experience.";
    }
    if (work.title === "Eudainomic Flow, or the Art of Flourishing") {
      return "A philosophical exploration of human flourishing, examining how people can construct lives of meaning, balance, purpose, and sustained well-being.";
    }
    if (work.title === "Constraintism — A Constraint-based Philosophy") {
      return "A philosophical framework proposing that constraints, rather than isolated objects or events, provide a powerful way to understand reality, knowledge, and human action.";
    }
    if (work.title === "Threshold Ethics") {
      return "An ethical framework focused on thresholds: the points at which choices, risks, responsibilities, and consequences become morally significant.";
    }
    if (work.title === "Patterns That Matter") {
      return "A philosophical investigation of patterns, significance, and the ways in which structure and meaning emerge from the complexity of existence.";
    }
    if (work.title === "The Symphony of Existence — From the Big Bang to the Illusion of Time") {
      return "A philosophical journey from cosmology to consciousness, asking how matter, time, structure, and experience combine to produce the reality we inhabit.";
    }

    // Category fallbacks
    if (label === "English Graded Readers") {
      return "An accessible English reader designed to develop reading fluency through an engaging contemporary story.";
    }
    if (label === "Sarah Mackay — Nine Days Series") {
      return "A short scientific adventure in the Sarah Mackay series, combining contemporary physics with personal and human questions.";
    }
    if (label === "Sarah Mackay — Novels") {
      return "A Sarah Mackay novel combining scientific ideas, investigation, personal relationships, and contemporary events.";
    }
    if (label === "Philosophical Works") {
      return "A philosophical exploration of fundamental questions about reality, knowledge, consciousness, ethics, and human existence.";
    }
    if (label === "Witchcraft, Magic & Sexuality") {
      return "A practical exploration of symbolism, ritual, belief, and personal practice.";
    }
    if (label === "Language Learning") {
      return "A practical resource designed to support language learning, study, fluency, or professional communication.";
    }
    if (label === "Thrillers") {
      return "A suspenseful story built around mystery, uncertainty, and the consequences of uncovering hidden information.";
    }
    if (label === "Science Fiction") {
      return "A speculative exploration of technology, humanity, reality, or the consequences of ideas taken beyond the familiar world.";
    }
    if (label === "Novellas & Flash Fiction") {
      return "A compact work of fiction exploring relationships, identity, memory, and the consequences of human choices.";
    }
    return "A publication by Rikki J. Prince.";
  }

  window.descriptionFor = descriptionFor;
})();
