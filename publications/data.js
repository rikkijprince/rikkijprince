/* ============================================================
   RIKKI J PRINCE — BIBLIOGRAPHY DATA
   ============================================================
   Edit together with descriptions.js file.

   HOW TO ADD A LINK
   ------------------
   Find the work by its "code" or "title" below and set its
   "url" field to the address where it can be read/bought, e.g.:

       url: "https://www.amazon.com/dp/XXXXXXXXXX"

   Leave url: "" for anything not yet available online — the
   site will show it as a plain (unlinked) entry automatically.

   STATUS VALUES
   -------------
   "published"  — live and linkable
   "ready"      — finished, not yet released ("ready to publish" in source)
   "editing"    — in progress ("to be edited" in source)
   ============================================================ */

const CATEGORIES = [   
  { slug: "novellas-flash-fiction", label: "Novellas & Flash Fiction" },
  { slug: "sci-fi", label: "Science Fiction" },
  { slug: "thrillers", label: "Thrillers" },
  { slug: "nine-days", label: "Sarah Mackay — Nine Days Series" },
  { slug: "sarah-mackay-novels", label: "Sarah Mackay — Novels" },
  { slug: "philosophy", label: "Philosophical Works" },
  { slug: "witchcraft-magic-sexuality", label: "Witchcraft, Magic & Sexuality"},
  { slug: "language-learning", label: "Language Learning" },
  { slug: "readers", label: "English Graded Readers" },
];

const WORKS = [
  // ---------------- Novellas & Flash Fiction ----------------
  { category: "novellas-flash-fiction", written: 42,    pub: 39,  code: "NFF5",  title: "The Moonfire Pact", note: "novelette", status: "published", url: "https://books2read.com/u/4E0v0e" },
  { category: "novellas-flash-fiction", written: 37,    pub: 40,  code: "NFF1",  title: "Mystery in Reverse", note: "flash fiction", status: "published", url: "https://books2read.com/u/mZkAYy" },
  { category: "novellas-flash-fiction", written: 38,    pub: 41,  code: "NFF2",  title: "Murder Undone", note: "novelette", status: "published", url: "https://books2read.com/u/m20OpO" },
  { category: "novellas-flash-fiction", written: 40,    pub: 42,  code: "NFF1S", title: "Misterio al revés", language: "Spanish", note: "flash fiction · translation of T01", status: "published", url: "https://books2read.com/u/mYkPWx" },
  { category: "novellas-flash-fiction", written: 41,    pub: 43,  code: "NFF2S", title: "Un crimen por deshacer", language: "Spanish", note: "novelette · translation of T02", status: "published", url: "https://books2read.com/u/bp250q" },
  { category: "novellas-flash-fiction", written: 36,    pub: 38,  code: "NFF4",  title: "The Never-Ending Question", status: "published", url: "https://books2read.com/u/brEorZ" },
  { category: "novellas-flash-fiction", written: "90",  pub: 101, code: "NFF8",  title: "A Café called Zuflucht", language: "English", note: "novella", status: "published", url: "https://books2read.com/u/mvQvOq" },
  { category: "novellas-flash-fiction", written: "90G", pub: 97,  code: "NFF8G", title: "Ein Café namens Zuflucht", language: "German", note: "novella", status: "published", url: "https://books2read.com/u/mYJX9W" },
  { category: "novellas-flash-fiction", written: "90S", pub: 98,  code: "NFF8S", title: "Una Cafetería llamada Zuflucht", language: "Spanish", note: "novella", status: "published", url: "https://books2read.com/u/mVJpkA" },
  { category: "novellas-flash-fiction", written: "90F", pub: 99,  code: "NFF8F", title: "Un Café Nommé Zuflucht", language: "French", note: "novella", status: "published", url: "https://books2read.com/u/boJR6R" },
  { category: "novellas-flash-fiction", written: "90I", pub: 100, code: "NFF8I", title: "Un café chiamato Zuflucht", language: "Italian", note: "novella", status: "published", url: "https://books2read.com/u/bWM9WM" },
  { category: "novellas-flash-fiction", written: 91,    pub: 102, code: "NFF9V", title: "L'Apagada", language: "Valencian", note: "novelette", status: "published", url: "https://books2read.com/u/3ykgNZ" },

   // ---------------- Science Fiction ----------------
  { category: "sci-fi", written: 93, pub: 120, code: "SF1", title: "A Codex of Observations on Humanity", status: "published", url: "https://www.amazon.com/dp/B0HJK15DGQ?tag=rjpamazon-21" },
  { category: "sci-fi", written: 100, code: "SF2", title: "The Universe in Extremis", status: "ready", url: "" },
  { category: "sci-fi", written: 102, code: "SF3", title: "The Universe Extra Machina", status: "editing", url: "" },
  { category: "sci-fi", written: "100+102", code: "SF2+3", title: "The Universe", status: "editing", url: "" },
  { category: "sci-fi", written: 103, code: "SF4", title: "The Choir of Dust", status: "editing", url: "" },
  
  // ---------------- Thrillers ----------------
  { category: "thrillers", written: 109,    pub: 117, code: "T1",  title: "Bicameral: A Novel of Language, Consciousness and the Origins of the Human Mind", status: "published", url: "https://www.amazon.com/dp/B0HHFB1291?tag=rjpamazon-21" },
  { category: "thrillers", written: "109S", pub: 118, code: "T1S", title: "Bicameral: Una Novela sobre el lenguaje, la conciencia y los orígenes de la mente humana", language: "Spanish", status: "published", url: "https://www.amazon.es/Bicameral-lenguaje-conciencia-orígenes-Spanish-ebook/dp/B0HHFBBKJL?tag=rjpamazon-21" },
  { category: "thrillers", written: 104,    pub: 119, code: "T2",  title: "The 14th Page", status: "published", url: "https://www.amazon.es/dp/B0HJJY5J3F?tag=rjpamazon-21" },
  { category: "thrillers", written: 96,     pub: 121, code: "T3",  title: "The Secrets We Keep", status: "published", url: "amazon.com/dp/B0HK185QJZ" },
  { category: "thrillers", written: "96S",  pub: 122,  code: "T3S", title: "Los secretos que guardamos", language: "Spanish", status: "published", url: "amazon.es/dp/B0HK13K4YD" },
   
  // ---------------- Sarah Mackay — Nine Days Series ----------------
  { category: "nine-days", written: 1, pub: 1,  code: "9D01", title: "Geneva", status: "published", url: "https://draft2digital.com/book/2269819" },
  { category: "nine-days", written: 2, pub: 2,  code: "9D02", title: "Istanbul", status: "published", url: "https://draft2digital.com/book/2167152" },
  { category: "nine-days", written: 3, pub: 3,  code: "9D03", title: "Prague", status: "published", url: "https://draft2digital.com/book/2167132" },
  { category: "nine-days", written: 4, pub: 5,  code: "9D04", title: "Paris", status: "published", url: "https://draft2digital.com/book/2217447" },
  { category: "nine-days", written: 5, pub: 6,  code: "9D05", title: "Florence", status: "published", url: "https://draft2digital.com/book/2217458" },
  { category: "nine-days", written: 6, pub: 8,  code: "9D06", title: "Copenhagen", status: "published", url: "https://draft2digital.com/book/2309959" },
  { category: "nine-days", written: 7, pub: 9,  code: "9D07", title: "Bern", status: "published", url: "https://draft2digital.com/book/2310121" },
  { category: "nine-days", written: 8, pub: 11, code: "9D08", title: "Berlin", status: "published", url: "https://draft2digital.com/book/2537375" },
  { category: "nine-days", written: 9, pub: 15, code: "9D10", title: "Oxford", status: "published", url: "https://draft2digital.com/book/2636970" },
  { category: "nine-days", written: 10, pub: 16, code: "9D11", title: "Princeton", status: "published", url: "https://draft2digital.com/book/2638361" },
  { category: "nine-days", written: 11, pub: 18, code: "9D12", title: "New York", status: "published", url: "https://draft2digital.com/book/2638809" },
  { category: "nine-days", written: 12, pub: 19, code: "9D13", title: "Mexico City", status: "published", url: "https://draft2digital.com/book/2638837" },
  { category: "nine-days", written: 13, pub: 21, code: "9D14", title: "Cambridge", status: "published", url: "https://draft2digital.com/book/2643936" },
  { category: "nine-days", written: 14, pub: 22, code: "9D15", title: "Kyoto", status: "published", url: "https://draft2digital.com/book/2825965" },
  { category: "nine-days", written: 15,          code: "9D16", title: "Loch Ness", status: "editing" },
   
  // ---------------- Sarah Mackay — Novels ----------------
  { category: "sarah-mackay-novels", written: 17, pub: 25, code: "SMN1", title: "Beijing", status: "published", url: "https://amzn.eu/d/38walHb?tag=rjpamazon-21" },
  { category: "sarah-mackay-novels", written: 18, pub: 28, code: "SMN2", title: "Vatican & Moony Conspiracies", status: "published", url: "https://amazon.es/dp/B0F566RBW3?tag=rjpamazon-21" },
  { category: "sarah-mackay-novels", written: 19, pub: 29, code: "SMN3", title: "Quantum Supremacy", status: "published", url: "https://amazon.es/dp/B0DZ5JPP54?tag=rjpamazon-21" },
  { category: "sarah-mackay-novels", written: 20, pub: 32, code: "SMN4", title: "Gaza & Sudan", status: "published", url: "https://amazon.es/dp/B0F9WXJSFB?tag=rjpamazon-21" },
  { category: "sarah-mackay-novels", written: 21, pub: 35, code: "SMN5", title: "The Frozen Lands", status: "published", url: "https://amazon.es/dp/B0F9X1G4PY?tag=rjpamazon-21" },

  // ---------------- Philosophical Works ----------------
  { category: "philosophy", written: 34, pub: 36,  code: "PH1", title: "What is Existence? — Mind, Matter and Meaning", status: "published", url: "https://books2read.com/u/mVEWKl" },
  { category: "philosophy", written: 35, pub: 37, code: "PH2", title: "Eudainomic Flow, or the Art of Flourishing", status: "published", url: "https://books2read.com/u/mexMeA?tag=rjpamazon-21" },
  { category: "philosophy", written: 97, pub: 105, code: "PH3", title: "Constraintism — A Constraint-based Philosophy", status: "published", url: "https://books2read.com/u/bWD1k0" },
  { category: "philosophy", written: 98, pub: 106, code: "PH4", title: "Threshold Ethics", status: "published", url: "https://books2read.com/u/bPPwwj" },
  { category: "philosophy", written: 99, pub: 107, code: "PH5", title: "Patterns That Matter", status: "published", url: "https://books2read.com/u/4Nz5yG" },
  { category: "philosophy", written: 105, pub: 110, code: "PH6", title: "The Symphony of Existence — From the Big Bang to the Illusion of Time", status: "published", url: "https://books2read.com/u/bOV1VK" },

  // ---------------- Witchcraft, Magic & Sexuality ----------------
  { category: "witchcraft-magic-sexuality", written: 47, pub: 44,  code: "WMS1",   title: "Fundamentals of Witchcraft", status: "published", url: "https://books2read.com/u/mZ65GB" },
  { category: "witchcraft-magic-sexuality", written: 48, pub: 45,  code: "WMS2",   title: "Witchcraft and Magick", status: "published", url: "https://books2read.com/u/bPpJPd" },
  { category: "witchcraft-magic-sexuality", written: 49, pub: 46,  code: "WMS3",   title: "Advanced Witchcraft Training", status: "published", url: "https://books2read.com/u/38Ngaw" },
  { category: "witchcraft-magic-sexuality", written: 50, pub: 108, code: "W4MS",   title: "Chaos Magick", status: "published", url: "https://books2read.com/u/4jkZo5" },
  { category: "witchcraft-magic-sexuality",              pub: 53,  code: "WMS1-3", title: "The Complete Witchcraft Training Manual", note: "box set · W1–W3", status: "published", url: "https://amazon.es/dp/B0F32D82J9?tag=rjpamazon-21" },
  { category: "witchcraft-magic-sexuality",              pub: 54,  code: "WMS1-4", title: "Practical Guide to Witchcraft & Chaos Magick", status: "published", url: "https://amazon.es/dp/B0F9XZJVQL?tag=rjpamazon-21" },
  { category: "witchcraft-magic-sexuality", written: 88, pub: 55,  code: "WM5",    title: "Entre Gemidos", language: "Spanish", status: "published", url: "https://amazon.es/dp/B0FB9QK8JZ?tag=rjpamazon-21" },
  { category: "witchcraft-magic-sexuality", written: 89, pub: 56,  code: "WMS",    title: "Behind the Moans", status: "published", url: "https://amazon.es/dp/B0FB525NFB?tag=rjpamazon-21" },
  { category: "witchcraft-magic-sexuality", written: 110,          code: "WM6",    title: "Desire and Denunciation", status: "editing" },
  { category: "witchcraft-magic-sexuality", written: 111,          code: "WMS7",   title: "Re-Enchantment of the Body", status: "editing" },

 // ---------------- Language Learning ----------------
  { category: "language-learning", written: 94,    pub: 103, code: "LL1", title: "How to Overcome Any Obstacle to Studying", status: "published", url: "https://books2read.com/u/bzMoyZ" },
  { category: "language-learning", written: "94S", pub: 104, code: "LL2", title: "Cómo superar cualquier obstáculo para estudiar", language: "Spanish", status: "published", url: "https://books2read.com/u/m2WV16" },
  { category: "language-learning", written: "94F", pub: 105, code: "LL3", title: "Comment surmonter tout obstacle à l'étude", language: "French", status: "published", url: "https://books2read.com/u/bWM1LD" },
  { category: "language-learning", written: 95,    pub: 106, code: "LL4", title: "Technical English in 2026", status: "published", url: "https://books2read.com/u/4Xp2Q7" },
  { category: "language-learning", written: 96,    pub: 111, code: "LL5", title: "Automatic Mind — Engineering the Subconscious for Language Mastery", status: "published", url: "https://www.amazon.es/dp/B0H1R23NCY?tag=rjpamazon-21" },
  { category: "language-learning", written: 97,    pub: 113, code: "LL6", title: "Speak Naturally! Part 1 (A2–B1)", status: "published", url: "https://www.amazon.es/dp/B0HFSNDD4N?tag=rjpamazon-21" },
  { category: "language-learning", written: 98,    pub: 114, code: "LL7", title: "Speak Naturally! Part 2 (B1–B2)", status: "published", url: "https://www.amazon.es/dp/B0HFT8YKG8?tag=rjpamazon-21" },
  { category: "language-learning", written: 99,    pub: 115, code: "LL8", title: "Speak Naturally! Part 3 (B2–B2+)", status: "published", url: "https://www.amazon.es/dp/B0HF56GBTR9?tag=rjpamazon-21" },
  { category: "language-learning",                 pub: 116, code: "LL9", title: "Speak Naturally! Box Set, Parts 1–3 (A2–B2+)", note: "bundle", status: "published", url: "https://www.amazon.es/dp/B0HFWJY4V3?tag=rjpamazon-21" },

  // ---------------- English Graded Readers (RJP Readers) ----------------
  { category: "readers", written: 56, pub: 47, code: "R01",    title: "A1.1 Max the Brave", status: "published", url: "https://books2read.com/u/baxvka" },
  { category: "readers", written: 57, pub: 48, code: "R02",    title: "A1.1 The Runaway Robot", status: "published", url: "https://books2read.com/u/mexOkA" },
  { category: "readers",              pub: 49, code: "R03",    title: "A1.1 Max the Brave and The Runaway", note: "bundle", status: "published", url: "https://amazon.es/dp/B0F6T4CS9R?tag=rjpamazon-21" },
  { category: "readers", written: 58, pub: 50, code: "R04",    title: "A1.2 The Mystery of the Missing Cake", status: "published", url: "https://books2read.com/u/3JA9DP/?tag=rjpamazon-21" },
  { category: "readers", written: 59, pub: 51, code: "R05",    title: "A1.2 The Dead Cat on My Doorstep", status: "published", url: "https://books2read.com/u/31oZG6" },
  { category: "readers",              pub: 52, code: "R06",    title: "A1.2 The Dead Cat on My Doorstep and The Mystery of the Missing Cake", note: "bundle", status: "published", url: "https://amazon.es/dp/B0F6TNX7YV?tag=rjpamazon-21" },
  { category: "readers", written: 60, pub: 57, code: "R07",    title: "A2.1 The Lighthouse Code", status: "published", url: "https://books2read.com/u/bzw1YZ" },
  { category: "readers", written: 61, pub: 58, code: "R08",    title: "A2.1 The New Student", status: "published", url: "https://books2read.com/u/3Rgz9L" },
  { category: "readers", written: 62, pub: 59, code: "R09",    title: "A2.1 The Lighthouse Code and Others", note: "bundle", status: "published", url: "https://amazon.es/dp/BOFD7HBPZY?tag=rjpamazon-21" },
  { category: "readers", written: 62, pub: 60, code: "R10",    title: "A2.1 The Street Dog", status: "published", url: "https://books2read.com/u/4E1JAY" },
  { category: "readers", written: 63, pub: 61, code: "R11",    title: "A2.2 The Alley Cat", status: "published", url: "https://books2read.com/u/ba9oN8" },
  { category: "readers",              pub: 62, code: "R12",    title: "A2.2 Street Dog and Alley Cat", note: "bundle", status: "published", url: "https://amazon.es/dp/B0FD7MGR8M?tag=rjpamazon-21" },
  { category: "readers", written: 64, pub: 63, code: "R13",    title: "A2.2 The House on Silver Street", status: "published", url: "https://books2read.com/u/brLXoe" },
  { category: "readers", written: 65, pub: 64, code: "R14",    title: "A2.2 The Midnight Phone Call", status: "published", url: "https://books2read.com/u/3G6jna" },
  { category: "readers", written: 66, pub: 65, code: "R15",    title: "A2.2 The Window Across the Street", status: "published", url: "https://books2read.com/u/4jQVDv" },
  { category: "readers",              pub: 66, code: "R16",    title: "A2.2 The Alley Cat and Other Stories", note: "bundle", status: "published", url: "https://amazon.es/dp/B0FD7MGR8M?tag=rjpamazon-21" },
  { category: "readers", written: 67, pub: 67, code: "R17",    title: "B1.1 Shadows at School", status: "published", url: "https://books2read.com/u/bPjAXx" },
  { category: "readers", written: 68, pub: 68, code: "R18",    title: "B1.1 The Girl Who Wasn't There", status: "published", url: "https://books2read.com/u/317wYw" },
  { category: "readers", written: 69, pub: 69, code: "R19",    title: "B1.1 The Secret Lab", status: "published", url: "https://books2read.com/u/3yp8DJ" },
  { category: "readers", written: 70, pub: 70, code: "R20",    title: "B1.2 Digital Ghost", status: "published", url: "https://books2read.com/u/mv8AnV" },
  { category: "readers",              pub: 71, code: "R21",    title: "B1 The Secret Lab and The Digital Ghost", note: "bundle", status: "published", url: "https://books2read.com/u/mdeZNZ" },
  { category: "readers",              pub: 72, code: "R22",    title: "B1 Shadows at School and Others", note: "bundle", status: "published", url: "https://amazon.es/dp/B0FD8QL5JN?tag=rjpamazon-21" },
  { category: "readers", written: 71, pub: 73, code: "R23",    title: "B1.2 Second Skin", status: "published", url: "https://books2read.com/u/bQz8xD" },
  { category: "readers", written: 72, pub: 74, code: "R24",    title: "B1.2 The Last Game", status: "published", url: "https://books2read.com/u/bMdLZk" },
  { category: "readers", written: 73, pub: 75, code: "R25",    title: "B1.2 The Package", status: "published", url: "https://books2read.com/u/492YMM" },
  { category: "readers",              pub: 76, code: "R23-25", title: "B1.2 Second Skin and Other Stories", note: "bundle", status: "published", url: "https://amazon.es/dp/B0FD8PMQGV?tag=rjpamazon-21" },
  { category: "readers", written: 74, pub: 77, code: "R27",    title: "B2.1 The Disappearing Hour", status: "published", url: "https://books2read.com/u/bW2XN7" },
  { category: "readers", written: 75, pub: 78, code: "R28",    title: "B2.1 The Fall of Elias Grey", status: "published", url: "https://books2read.com/u/m0nyDM" },
  { category: "readers", written: 76, pub: 79, code: "R29",    title: "B2.1 Voices from the Deep", status: "published", url: "https://books2read.com/u/4AyqZe" },
  { category: "readers",              pub: 80, code: "R27-29", title: "B2.1 The Disappearing Hour and Others", note: "bundle", status: "published", url: "https://amazon.es/dp/B0FDJPGGCG?tag=rjpamazon-21" },
  { category: "readers", written: 77, pub: 81, code: "R30",    title: "B2.2 The Hacker Code", status: "published", url: "https://amazon.es/dp/B0FDGMQN4Y" },
  { category: "readers", written: 78, pub: 82, code: "R31",    title: "B2.2 The Inheritance Algorithm", status: "published", url: "https://books2read.com/u/mV5GGA" },
  { category: "readers", written: 79, pub: 83, code: "R32",    title: "B2.2 The Island of Secrets", status: "published", url: "https://books2read.com/u/b5Peep" },
  { category: "readers",              pub: 84, code: "R33",    title: "B2.2 The Hacker Code and Other Stories", note: "bundle", status: "published", url: "https://amazon.es/dp/B0FDGMQN4Y?tag=rjpamazon-21" },
  { category: "readers", written: 80, pub: 85, code: "R34",    title: "C1.1 Eternal Echoes", status: "published", url: "https://books2read.com/u/3yyPQp" },
  { category: "readers", written: 81, pub: 86, code: "R35",    title: "C1.1 The Weight of Silence", status: "published", url: "https://books2read.com/u/mgdK5R" },
  { category: "readers",              pub: 87, code: "R36",    title: "C1.1 Eternal Echoes and The Weight of Silence", note: "bundle", status: "published", url: "https://amazon.es/dp/B0FFMZV2VX?tag=rjpamazon-21" },
  { category: "readers", written: 82, pub: 88, code: "R37",    title: "C1.2 The Collapse", status: "published", url: "https://books2read.com/u/3kzZOL" },
  { category: "readers", written: 83, pub: 89, code: "R38",    title: "C1.2 The Memory Index", status: "published", url: "https://books2read.com/u/bzNpq9" },
  { category: "readers",              pub: 90, code: "R39",    title: "C1.2 The Collapse and The Memory Index", note: "bundle", status: "published", url: "https://amazon.es/dp/B0FFN7GFK2?tag=rjpamazon-21" },
  { category: "readers", written: 84, pub: 91, code: "R40",    title: "C2.1 The Archive of Vanishing Things", status: "published", url: "https://books2read.com/u/mYMRWY" },
  { category: "readers", written: 85, pub: 92, code: "R41",    title: "C2.1 Under the Skin", status: "published", url: "https://books2read.com/u/3kzZQN" },
  { category: "readers",              pub: 93, code: "R42",    title: "C2.1 The Archive of Vanishing Things and Under the Skin", note: "bundle", status: "published", url: "https://amazon.es/dp/B0FFMZW73V?tag=rjpamazon-21" },
  { category: "readers", written: 86, pub: 94, code: "R43",    title: "C2.2 Clean Slate", status: "published", url: "https://books2read.com/u/47pkBE" },
  { category: "readers", written: 87, pub: 95, code: "R44",    title: "C2.2 Underneath Her Smile", status: "published", url: "https://books2read.com/u/bQoZ7v" },
  { category: "readers",              pub: 96, code: "R45",    title: "C2.2 Clean Slate and Underneath Her Smile", note: "bundle", status: "published", url: "https://amazon.es/dp/B0FFN4XCY?tag=rjpamazon-21" },

];
