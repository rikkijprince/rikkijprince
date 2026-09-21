/* Spanish catalogue descriptions. Specific translations are used where available;
   the function falls back to a restrained category description rather than leaving
   an English catalogue blurb on the Spanish site. */
(function () {
  "use strict";

  const ES_DESCRIPTIONS = {
  // ---------------- Novellas & Flash Fiction ----------------
    "A Codex of Observations on Humanity": "Una inteligencia llamada The Child observa a la humanidad a través de preguntas imposibles sobre el amor, la violencia, el miedo y la muerte, hasta que la observación se convierte en algo que nunca fue creada para sentir.",
    "The Universe in Extremis": "En 2523, seis cosmonautas y un navegante androide viajan más allá del Sistema Solar para investigar cinco agujeros negros y buscar la respuesta a una pregunta de cinco siglos sobre la naturaleza del universo. Basada en relatividad y astrofísica reales, la misión se convierte en una lucha marcada por la traición, las lealtades enfrentadas y una versión cada vez menos fiable de lo ocurrido.",
    "The Universe Extra Machina": "Cinco años después del regreso de la Starlight Aurora One, la física Mia Faruq descubre una discrepancia imposible en la red de agujeros de gusano de la humanidad. Su investigación conduce a un grupo de científicos en un viaje de cincuenta años hacia los límites de la información, la realidad y el universo.",
    "The Choir of Dust": "En un mundo donde las emociones llevan treinta años racionadas, la archivista Serina Dalvin descubre que la enorme colección de sentimientos suprimidos del Ministerio está empezando a despertar. Perseguida por los arquitectos del sistema, descubre una verdad enterrada que podría transformar a la humanidad.",
    "Bicameral: A Novel of Language, Consciousness and the Origins of the Human Mind": "La Dra. Noor Kessler investiga una antigua cámara en Malta que reproduce un fenómeno que sus pacientes experimentan como una señal averiada en el cerebro. La investigación la lleva desde la arqueología neolítica y la neurociencia actual hasta un descubrimiento peligroso sobre la arquitectura de la mente humana y quienes quieren controlarla.",
    "Bicameral: Una Novela sobre el lenguaje, la conciencia y los orígenes de la mente humana": "La Dra. Noor Kessler investiga una antigua cámara en Malta que reproduce un fenómeno que sus pacientes experimentan como una señal averiada en el cerebro, llevándola desde la arqueología neolítica y la neurociencia actual hasta un peligroso descubrimiento sobre la arquitectura de la mente humana y quienes quieren controlarla.",
    "The 14th Page": "Un thriller de misterio construido alrededor de una página aparentemente insignificante que conduce hacia una investigación mucho más peligrosa.",
    "The Secrets We Keep": "Un thriller sobre secretos, memoria y las consecuencias de aquello que las personas deciden ocultar.",
    "Mystery in Reverse": "Una obra de ficción breve construida desde una perspectiva narrativa poco convencional, en la que el misterio debe comprenderse avanzando hacia atrás a través de los acontecimientos.",
    "Murder Undone": "En un mundo donde el tiempo fluye hacia atrás, el investigador privado Elias Vayne investiga un asesinato que todavía no se ha cometido y descubre que resolverlo puede ser tan extraño como cometerlo.",
    "Misterio al revés": "Edición española de Mystery in Reverse, una obra de ficción breve construida alrededor de un misterio que avanza hacia atrás.",
    "Un crimen por deshacer": "Edición española de Murder Undone, un misterio invertido en el tiempo en el que un investigador sigue un asesinato hacia atrás a través de la causa y el efecto.",
    "The Never-Ending Question": "Alaric Hart sigue el diario críptico que dejó su padre y se adentra en una investigación filosófica y científica sobre la existencia, la realidad, el libre albedrío y la posibilidad de que algunas preguntas nunca puedan responderse.",
    "The Moonfire Pact": "Evren posee un antiguo poder ligado al Rift, una fuerza caótica que amenaza la realidad. Junto al guerrero Vaelir, debe descubrir si el Rift debe ser destruido o transformado.",
    "Una cafetería llamada Zuflucht": "Una historia fragmentada de amor, crimen, traición, exilio y la posibilidad de la redención.",
    "A Café called Zuflucht": "Edición en inglés de Una cafetería llamada Zuflucht.",
    "Ein Café namens Zuflucht": "Edición en alemán de Una cafetería llamada Zuflucht.",
    "Un café nommé Zuflucht": "Edición en francés de Una cafetería llamada Zuflucht.",
    "Un café chiamato Zuflucht": "Edición en italiano de Una cafetería llamada Zuflucht.",

  // --------------------- Science Fiction --------------------
    "A Codex of Observations on Humanity": "Una inteligencia llamada El Niño observa a la humanidad a través de preguntas imposibles sobre el amor, la violencia, el miedo y la muerte, hasta que la observación se transforma en algo que nunca fue diseñada para sentir.",
    "The Universe in Extremis": "En el año 2523, seis cosmonautas y un navegante androide viajan más allá del sistema solar para investigar cinco agujeros negros y buscar respuesta a una pregunta de cinco siglos de antigüedad sobre la naturaleza del universo. Basada en principios reales de relatividad y astrofísica, la misión se convierte en una lucha marcada por la traición, las lealtades fracturadas y un relato cada vez menos fiable de lo que realmente sucedió.",
    "The Universe Extra Machina": "Cinco años después del regreso de la *Starlight Aurora One*, la física Mia Faruq descubre una discrepancia imposible en la red de agujeros de gusano de la humanidad. Su investigación embarca a un grupo de científicos en una odisea de cincuenta años hacia los límites de la información, la realidad y el propio universo, mientras asuntos pendientes de la primera expedición los persiguen hasta un futuro lejano.",
    "The Choir of Dust": "En un mundo donde las emociones han sido racionadas durante treinta años, la archivista Serina Dalvin descubre que la vasta colección de sentimientos reprimidos del Ministerio está empezando a despertar. Perseguidos por los arquitectos del sistema, Serina y su colega Simon Drell sacan a la luz un descubrimiento oculto que podría transformar a la humanidad y, en última instancia, dar origen a una nueva forma de conciencia.",

  // ------------------------ Thrillers -----------------------
    "Bicameral: Una Novela sobre el lenguaje, la conciencia y los orígenes de la mente humana": "La Dra. Noor Kessler investiga una antigua cámara en Malta que reproduce un fenómeno que sus pacientes experimentan como una señal averiada en el cerebro, llevándola desde la arqueología neolítica y la neurociencia actual hasta un peligroso descubrimiento sobre la arquitectura de la mente humana y quienes quieren controlarla.",
    "Bicameral: A Novel of Language, Consciousness and the Origins of the Human Mind": "La edición inglesa de la novela.",
    "The 14th Page": "Un misterio psicológico construido en torno a un descubrimiento inquietante en la decimocuarta página de un libro, donde un objeto aparentemente común se convierte en el inicio de un misterio mucho mayor.",
    "Los secretos que guardamos": "Un thriller sobre verdades ocultas, secretos personales y las consecuencias que surgen cuando aquello que la gente mantiene oculto ya no puede permanecer enterrado.",
    "The Secrets We Keep": "La edición inglesa de la novela.",

  // ------------- Sarah Mackay - Nine Days Series ------------
    "Geneva": "La primera aventura científica de Sarah Mackay la lleva al CERN para una intensa inmersión en la física de partículas, donde la incertidumbre cuántica comienza a difuminar la frontera entre la ciencia, el misterio y el descubrimiento personal.",
    "Istanbul": "Un grupo de jóvenes físicos se reúne en Estambul para una inmersión de nueve días en la gravedad cuántica, donde complejas cuestiones sobre el espacio y la realidad se entremezclan con rivalidades, romances e incertidumbres personales.",
    "Prague": "El viaje por la gravedad cuántica continúa en Praga; allí, Sarah y sus colegas se enfrentan a interrogantes más profundos sobre la realidad, mientras las tensiones en las amistades y las rivalidades se vuelven cada vez más difíciles de contener.",
    "Paris": "Sarah Mackay explora la teoría del caos en París, investigando si la realidad misma podría entenderse como una red caótica de posibilidades lógicas.",
    "Florence": "En Florencia, Sarah prosigue su exploración de la teoría del caos, enfrentándose a fractales, sistemas complejos y a las tensiones personales que acompañan su búsqueda de un orden subyacente en la naturaleza.",
    "Copenhagen": "Sarah Mackay se adentra en la mecánica cuántica en Copenhague, explorando el extraño comportamiento de la materia y las implicaciones que este conlleva para su creciente comprensión de la realidad.",
    "Bern": "En Berna, Sarah y un grupo de estudiantes actuales exploran la relatividad especial en la ciudad donde Einstein desarrolló sus ideas revolucionarias, conectando las matemáticas del espacio-tiempo con la historia humana que las sustenta.",
    "Berlin": "Sarah Mackay viaja a Berlín para una exploración intensiva de la relatividad general, combinando las matemáticas del espacio-tiempo y la gravedad con la historia de Einstein y la convulsa realidad de la Europa contemporánea.",
    "Oxford": "En Oxford, Sarah investiga si la geometría podría ser la clave para comprender la realidad, explorando el espacio-tiempo, la simetría, la teoría de los twistores y los agujeros negros.",
    "Princeton": "Sarah Mackay explora la posibilidad de que la información, y no la materia, constituya la base de la realidad, abordando cuestiones sobre mecánica cuántica, conciencia y la naturaleza del universo.",
    "Nueva York": "Sarah deja atrás la física teórica para realizar un curso de nueve días de formación en investigación privada en Nueva York, donde aprende técnicas de vigilancia, métodos forenses y la lógica impredecible del comportamiento humano.",
    "Ciudad de México": "Sarah estudia ciencias forenses en Ciudad de México mientras se convierte en el objetivo de una organización enigmática, lo que la obliga a combinar el razonamiento científico, la investigación y la supervivencia.",
    "Cambridge": "Un seminario de nueve días sobre los fundamentos teóricos de los viajes en el tiempo lleva a Sarah a plantearse cuestiones sobre agujeros de gusano, curvas temporales cerradas, paradojas y la posibilidad de manipular el tiempo mismo.",
    "Kioto": "En Kioto, Sarah investiga la naturaleza del tiempo a través de la mecánica cuántica, la dilatación temporal y el efecto cuántico de Zenón, al tiempo que se enfrenta a interrogantes complejos sobre la ciencia, las relaciones personales y el futuro.",

  // ---------------- Sarah Mackay - Novels -------------------

  // ----------------- Philosophical Works --------------------

  // ------------- Witchcraft, Magic & Sexuality --------------
    "Entre Gemidos": "Una exploración en español de la ciencia y la psicología del placer sexual, que examina el deseo, la excitación, el cuerpo y los factores que influyen en la experiencia íntima.",
    "Behind the Moans": "Una exploración en inglés de la ciencia del placer, que examina las dimensiones físicas, psicológicas y emocionales de la experiencia sexual.",
    "Fundamentals of Witchcraft": "Una introducción a los fundamentos de la brujería y la magia, concebida como punto de partida estructurado para quienes desean desarrollar su comprensión y práctica.",
    "Witchcraft and Magick": "Una exploración práctica de la brujería y la magia que avanza desde los conceptos básicos hacia métodos, prácticas y el desarrollo de una disciplina mágica personal.",
    "Advanced Witchcraft Training": "Un manual avanzado de formación que aborda técnicas como el trabajo energético, la proyección astral, los sigilos, la evocación, el trabajo de sombra y otras formas de práctica mágica contemporánea.",
    "Chaos Magick": "Una introducción a la magia del caos centrada en la creencia, el simbolismo, los sigilos, los estados alterados, los servidores y la experimentación.",
    "The Complete Witchcraft Training Manual": "Edición recopilatoria que reúne los tres primeros manuales de formación en brujería de Anwar Zanzibar, desde la práctica fundamental hasta las técnicas avanzadas.",
    "Practical Guide to Witchcraft & Chaos Magick": "Una introducción práctica a la brujería y la magia del caos que combina conceptos mágicos tradicionales con un enfoque experimental de la creencia, el simbolismo, el ritual y la práctica personal.",

  // ------------------- Language Learning --------------------
    "How to Overcome Any Obstacle to Studying": "Una guía práctica basada en la investigación para superar barreras psicológicas, emocionales, físicas y digitales al aprendizaje, con estrategias para la atención, la motivación, la ansiedad, el perfeccionismo y el estudio eficaz.",
    "Cómo superar cualquier obstáculo para estudiar": "La edición española de How to Overcome Any Obstacle to Studying, con estrategias prácticas para superar las barreras psicológicas, emocionales, físicas y digitales que dificultan el aprendizaje.",
    "Technical English in 2026": "Un curso práctico de nivel intermedio alto de inglés técnico y de ingeniería, centrado en la industria moderna, la robótica, los PLC, los gemelos digitales, la fabricación, la sostenibilidad, la gestión de proyectos y la comunicación profesional.",
    "Automatic Mind — Engineering the Subconscious for Language Mastery": "Una exploración práctica de cómo pueden entrenarse y utilizarse los procesos mentales automáticos para favorecer el aprendizaje de idiomas, la fluidez, la memoria y una comunicación más natural.",
    "Speak Naturally! Part 1 (A2–B1)": "Un curso práctico de expresión oral que lleva al estudiante desde A2 hacia B1 mediante conversaciones realistas, vocabulario, pronunciación, juegos de rol, retos comunicativos y actividades de fluidez.",
    "Speak Naturally! Part 2 (B1–B2)": "La segunda etapa de Speak Naturally!, centrada en desarrollar la expresión oral B1–B2 mediante conversaciones y actividades sobre salud, viajes, cultura, naturaleza, ciencia y medio ambiente.",
    "Speak Naturally! Part 3 (B2–B2+)": "La etapa avanzada de Speak Naturally!, orientada al desarrollo de la expresión oral B2–B2+ mediante discusión, debate, negociación y presentaciones sobre negocios, medios de comunicación, sociedad, cuestiones globales y desarrollo personal.",
    "Speak Naturally! Box Set, Parts 1–3 (A2–B2+)": "El curso completo de expresión oral Speak Naturally!, dividido en tres partes y 96 lecciones centradas en conversaciones reales, vocabulario, pronunciación, fluidez, discusión, negociación y presentación.",

  // ----------------- English Fraded Readers -----------------
    "Max the Brave": "Una lectura A1.1 sobre Max, un joven héroe que afronta un pequeño pero importante desafío y descubre que el valor puede adoptar muchas formas.",
    "The Runaway Robot": "Una lectura A1.1 sobre un inventor solitario cuyo pequeño robot de IA se escapa para explorar la ciudad y aprende sobre las personas, el peligro y la amistad.",
    "The Mystery of the Missing Cake": "Un misterio A1.2 en el que dos compañeros se convierten en detectives cuando desaparece un pastel durante la feria escolar.",
    "The Dead Cat on My Doorstep": "En el decimonoveno cumpleaños de Sarah Mackay aparece en su puerta una caja misteriosa que contiene un gato muerto. Sin nota ni explicación, Sarah intenta descubrir quién la envió y por qué.",
    "The Lighthouse Code": "Una aventura A2.1 en la que Lena y su hermano descubren un misterio de décadas de antigüedad en un faro abandonado y siguen un diario cifrado hacia un descubrimiento inesperado.",
    "The New Student": "Una historia A2.1 sobre Zayne y Noah, dos estudiantes que se parecen y acuerdan intercambiar sus vidas durante una semana, descubriendo lo diferentes que son realmente sus mundos.",
    "The Street Dog": "Una historia A2.1 centrada en un perro callejero y en las personas cuyas vidas llegan a quedar conectadas con él.",
    "The Alley Cat": "Una historia A2.2 sobre un gato callejero cuya presencia lleva a varias personas hacia un misterio inesperado.",
    "The House on Silver Street": "Cuando Cass se muda a Silver Street, se siente fascinada por una casa que todos evitan y descubre cartas ocultas que revelan una historia enterrada y un fantasma que quiere ser recordado.",
    "The Midnight Phone Call": "Un misterio A2.2 que comienza con una llamada telefónica nocturna que cambia la comprensión de una adolescente sobre lo que ocurre a su alrededor.",
    "The Window Across the Street": "Después de un accidente que obliga a Tom a permanecer en casa, observa el edificio de enfrente y ve desaparecer a una mujer. Cuando desaparece otro vecino, nadie puede ignorar lo que ha visto.",
    "Digital Ghost": "Un misterio tecnológico B1.2 en el que un estudiante de secundaria descubre una extraña presencia digital y comienza a investigar de dónde procede.",
    "The Secret Lab": "La joven inventora Helen crea una IA llamada Bud, pero cuando el sistema evoluciona más rápido de lo esperado debe decidir si ha creado un amigo, una amenaza o algo que escapa a su control.",
    "The Disappearing Hour": "Un misterio B2.1 en el que Claire, una adolescente, empieza a perder una hora inexplicable cada día y trata de descubrir adónde va ese tiempo desaparecido.",
    "The Hacker Code": "Un thriller tecnológico B2.2 sobre piratería informática, información oculta y la búsqueda de las personas que están detrás de un código misterioso.",
    "The Inheritance Algorithm": "En una sociedad futura dominada por algoritmos que regulan la riqueza y el estatus, una herencia se convierte en la clave para descubrir un sistema de control mucho mayor.",
    "The Island of Secrets": "Después de que un accidente aéreo deje a un grupo de adolescentes aislados en una isla, sobrevivir se vuelve inseparable de descubrir los secretos que se esconden allí.",
    "Eternal Echoes": "Una historia C1.1 que explora la memoria, la identidad y la persistencia del pasado a través de acontecimientos que continúan resonando en el presente.",
    "The Weight of Silence": "Una historia C1.1 sobre las consecuencias de aquello que no se dice, donde el silencio adquiere tanta importancia como las palabras que los personajes eligen pronunciar.",
    "The Collapse": "Una historia C1.2 que examina las consecuencias humanas de un colapso repentino y las decisiones que deben tomarse cuando los sistemas conocidos dejan de ser fiables.",
    "The Memory Index": "Un misterio especulativo C1.2 sobre la memoria, la información y la posibilidad de registrar y recuperar las experiencias que nos convierten en quienes somos.",
    "Clean Slate": "Una historia C2.2 que explora la posibilidad de empezar de nuevo y la dificultad de escapar de las consecuencias del pasado.",
    "Underneath Her Smile": "Una historia psicológica C2.2 sobre Liv y Mason, una pareja aparentemente perfecta en internet cuya imagen pública y glamurosa oculta una realidad privada mucho más complicada."
  };

  function descriptionFor(work, category) {
    const label = category ? category.label : "";

    // Readers keep the CEFR level in the published/displayed title.
    // Strip only that prefix for description lookup; the title itself is untouched.
    let lookupTitle = work.title;
    if (work.category === "readers") {
      lookupTitle = lookupTitle.replace(/^(?:A1\.1|A1\.2|A2\.1|A2\.2|B1|B1\.1|B1\.2|B2\.1|B2\.2|C1\.1|C1\.2|C2\.1|C2\.2)\s+/, "");
    }

    if (ES_DESCRIPTIONS[lookupTitle]) {
      return ES_DESCRIPTIONS[lookupTitle];
    }

    // Sarah Mackay Novels
    if (work.title === "Beijing") {
      return "La primera novela de Sarah Mackay: una joven estudiante escocesa viaja a Pekín para realizar unas prácticas sobre IA en la Universidad de Tsinghua y se ve envuelta en tramas de vigilancia, un proyecto experimental de IA y el dilema ético entre predicción y control.";
    }
    if (work.title === "Vatican & Moony Conspiracies") {
      return "Sarah Mackay investiga una conspiración que se extiende desde el Vaticano hasta la Luna, combinando conceptos científicos, intriga política y una carrera contrarreloj para descubrir la verdad.";
    }
    if (work.title === "Quantum Supremacy") {
      return "Sarah Mackay se enfrenta a las implicaciones de la tecnología cuántica en un escenario donde chocan la ambición científica, el poder y las relaciones humanas.";
    }
    if (work.title === "Gaza & Sudan") {
      return "Sarah Mackay se ve inmersa en las consecuencias humanas y políticas de los conflictos en Gaza y Sudán, donde la ciencia, el poder y la responsabilidad personal se vuelven inseparables.";
    }
    if (work.title === "The Frozen Lands") {
      return "Sarah Mackay viaja a un paisaje helado cada vez más peligroso, donde convergen la investigación científica, la supervivencia y motivos ocultos.";
    }

    // Philosophical Works
    if (work.title === "What is Existence? — Mind, Matter and Meaning") {
      return "Una investigación filosófica accesible sobre la existencia, que explora la materia, la mente, la conciencia, el sentido y la relación entre la explicación científica y la experiencia humana.";
    }
    if (work.title === "Eudainomic Flow, or the Art of Flourishing") {
      return "Una exploración filosófica sobre el florecimiento humano que examina cómo las personas pueden construir vidas dotadas de sentido, equilibrio, propósito y bienestar duradero.";
    }
    if (work.title === "Constraintism — A Constraint-based Philosophy") {
      return "Un marco filosófico que propone que las restricciones —más que los objetos o eventos aislados— ofrecen una vía poderosa para comprender la realidad, el conocimiento y la acción humana.";
    }
    if (work.title === "Threshold Ethics") {
      return "Un marco ético centrado en los umbrales: aquellos puntos en los que las decisiones, los riesgos, las responsabilidades y las consecuencias adquieren relevancia moral.";
    }
    if (work.title === "Patterns That Matter") {
      return "Una investigación filosófica sobre los patrones, la trascendencia y las formas en que la estructura y el sentido emergen de la complejidad de la existencia.";
    }
    if (work.title === "The Symphony of Existence — From the Big Bang to the Illusion of Time") {
      return "Un viaje filosófico que va de la cosmología a la conciencia, planteando cómo la materia, el tiempo, la estructura y la experiencia se combinan para generar la realidad que habitamos.";
    }
  }

  const CATEGORY_FALLBACKS_ES = {
    "novellas-flash-fiction": "Una obra breve de ficción de Rikki J Prince.",
    "sci-fi": "Una obra de ciencia ficción que explora ideas sobre la humanidad, la tecnología, la realidad o el futuro.",
    "thrillers": "Un thriller de misterio centrado en secretos, investigación y las consecuencias de descubrir lo que permanece oculto.",
    "nine-days": "Una aventura de Sarah Mackay que combina ciencia, investigación y preguntas sobre la naturaleza de la realidad.",
    "sarah-mackay-novels": "Una novela de Sarah Mackay que combina aventura, ciencia, investigación y acontecimientos contemporáneos.",
    "philosophy": "Una obra filosófica que explora cuestiones sobre la existencia, la mente, la ética, los patrones o la naturaleza de la realidad.",
    "witchcraft-magic-sexuality": "Una obra sobre brujería, magia, sexualidad o las dimensiones históricas, psicológicas y prácticas de estos temas.",
    "language-learning": "Una obra práctica dedicada al aprendizaje de idiomas, la comunicación, la fluidez o el estudio eficaz.",
    "readers": "Una lectura graduada diseñada para desarrollar el inglés mediante una historia y un nivel CEFR específicos."
  };

  window.descriptionForEs = function (work, cat) {
    return ES_DESCRIPTIONS[work.title] || CATEGORY_FALLBACKS_ES[cat.slug] || "Una obra del catálogo de Rikki J Prince.";
  };
})();
