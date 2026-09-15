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
  { slug: "sarah-mackay-shorts", label: "Sarah Mackay — Short Stories" },
  { slug: "sarah-mackay-novels", label: "Sarah Mackay — Novels" },
  { slug: "philosophy", label: "Philosophical Works" },
  { slug: "experimental", label: "Experimental" },
  { slug: "witchcraft-magic-sexuality", label: "Witchcraft, Magic & Sexuality"},
  { slug: "readers", label: "English Graded Readers" },
  { slug: "novellas", label: "Novellas" },
  { slug: "language-learning", label: "Language Learning" },
  { slug: "thrillers", label: "Thrillers" },
  { slug: "sci-fi", label: "Science Fiction" },
];

const WORKS = [
  // ---------------- Sarah Mackay — Short Stories ----------------
  // (Sarah Mackay is the series' lead character, not a pen name — these are written by Rikki J. Prince.)
  { category: "sarah-mackay-shorts", pub: 1,  code: "S01", title: "Geneva", status: "published", url: "https://draft2digital.com/book/2269819" },
  { category: "sarah-mackay-shorts", pub: 2,  code: "S02", title: "Istanbul", status: "published", url: "https://draft2digital.com/book/2167152" },
  { category: "sarah-mackay-shorts", pub: 3,  code: "S03", title: "Prague", status: "published", url: "https://draft2digital.com/book/2167132" },
  { category: "sarah-mackay-shorts", pub: 5,  code: "S04", title: "Paris", status: "published", url: "https://draft2digital.com/book/2217447" },
  { category: "sarah-mackay-shorts", pub: 6,  code: "S05", title: "Florence", status: "published", url: "https://draft2digital.com/book/2217458" },
  { category: "sarah-mackay-shorts", pub: 8,  code: "S06", title: "Copenhagen", status: "published", url: "https://draft2digital.com/book/2309959" },
  { category: "sarah-mackay-shorts", pub: 9,  code: "S07", title: "Bern", status: "published", url: "https://draft2digital.com/book/2310121" },
  { category: "sarah-mackay-shorts", pub: 11, code: "S08", title: "Berlin", status: "published", url: "https://draft2digital.com/book/2537375" },
  { category: "sarah-mackay-shorts", pub: 15, code: "S10", title: "Oxford", status: "published", url: "https://draft2digital.com/book/2636970" },
  { category: "sarah-mackay-shorts", pub: 16, code: "S11", title: "Princeton", status: "published", url: "https://draft2digital.com/book/2638361" },
  { category: "sarah-mackay-shorts", pub: 18, code: "S12", title: "New York", status: "published", url: "https://draft2digital.com/book/2638809" },
  { category: "sarah-mackay-shorts", pub: 19, code: "S13", title: "Mexico City", status: "published", url: "https://draft2digital.com/book/2638837" },
  { category: "sarah-mackay-shorts", pub: 21, code: "S14", title: "Cambridge", status: "published", url: "https://draft2digital.com/book/2643936" },
  { category: "sarah-mackay-shorts", pub: 22, code: "S15", title: "Kyoto", status: "published", url: "https://draft2digital.com/book/2825965" },

  // ---------------- Sarah Mackay — Novels ----------------
  { category: "sarah-mackay-novels", pub: 25, written: 17, code: "N01", title: "Beijing", status: "published", url: "https://amzn.eu/d/38walHb" },
  { category: "sarah-mackay-novels", pub: 28, written: 18, code: "N02", title: "Vatican & Moony Conspiracies", status: "published", url: "https://amazon.es/dp/B0F566RBW3" },
  { category: "sarah-mackay-novels", pub: 29, written: 19, code: "N03", title: "Quantum Supremacy", status: "published", url: "https://amazon.es/dp/B0DZ5JPP54" },
  { category: "sarah-mackay-novels", pub: 32, written: 20, code: "N04", title: "Gaza & Sudan", status: "published", url: "https://amazon.es/dp/B0F9WXJSFB" },
  { category: "sarah-mackay-novels", pub: 35, written: 21, code: "N05", title: "The Frozen Lands", status: "published", url: "https://amazon.es/dp/B0F9X1G4PY" },

  // ---------------- Philosophical Works ----------------
  { category: "philosophy", pub: 36,  written: 34,  code: "F01", title: "What is Existence? — Mind, Matter and Meaning", status: "published", url: "" },
  { category: "philosophy", pub: 37,  written: 35,  code: "F02", title: "Eudainomic Flow, or the Art of Flourishing", status: "published", url: "https://books2read.com/u/mexMeA" },
  { category: "philosophy", pub: 105, written: 97,  code: "F04", title: "Constraintism — A Constraint-based Philosophy", status: "published", url: "https://books2read.com/u/bWD1k0" },
  { category: "philosophy", pub: 106, written: 98,  code: "F05", title: "Threshold Ethics", status: "published", url: "https://books2read.com/u/bPPwwj" },
  { category: "philosophy", pub: 107, written: 99,  code: "F06", title: "Patterns That Matter", status: "published", url: "https://books2read.com/u/4Nz5yG" },
  { category: "philosophy", pub: 110, written: 105, code: "F07", title: "The Symphony of Existence — From the Big Bang to the Illusion of Time", status: "published", url: "" },

  // ---------------- Experimental ----------------
  { category: "experimental", pub: 40, written: 37, code: "T01",  title: "Mystery in Reverse", note: "flash fiction", status: "published", url: "https://books2read.com/u/mZkAYy" },
  { category: "experimental", pub: 41, written: 38, code: "T02",  title: "Murder Undone", note: "novelette", status: "published", url: "https://books2read.com/u/m20OpO" },
  { category: "experimental", pub: 42, written: 40, code: "T01S", title: "Misterio al revés", language: "Spanish", note: "flash fiction · translation of T01", status: "published", url: "https://books2read.com/u/mYkPWx" },
  { category: "experimental", pub: 43, written: 41, code: "T02S", title: "Un crimen por deshacer", language: "Spanish", note: "novelette · translation of T02", status: "published", url: "https://books2read.com/u/bp250q" },

  // ---------------- Witchcraft, Magic & Sexuality ----------------
  { category: "witchcraft-magic-sexuality", pub: 44,  written: 47, code: "W1",   title: "Fundamentals of Witchcraft", status: "published", url: "https://books2read.com/u/mZ65GB" },
  { category: "witchcraft-magic-sexuality", pub: 45,  written: 48, code: "W2",   title: "Witchcraft and Magick", status: "published", url: "https://books2read.com/u/bPpJPd" },
  { category: "witchcraft-magic-sexuality", pub: 46,  written: 49, code: "W3",   title: "Advanced Witchcraft Training", status: "published", url: "https://books2read.com/u/38Ngaw" },
  { category: "witchcraft-magic-sexuality", pub: 108, written: 50, code: "W4",   title: "Chaos Magick", status: "published", url: "https://books2read.com/u/4jkZo5" },
  { category: "witchcraft-magic-sexuality", pub: 53,  code: "W1-3", title: "The Complete Witchcraft Training Manual", note: "box set · W1–W3", status: "published", url: "https://amazon.es/dp/B0F32D82J9" },
  { category: "witchcraft-magic-sexuality", pub: 54,  code: "W1-A", title: "Practical Guide to Witchcraft & Chaos Magick", status: "published", url: "https://amazon.es/dp/B0F9XZJVQL" },
  { category: "witchcraft-magic-sexuality", pub: 55, written: 88, title: "Entre Gemidos", language: "Spanish", status: "published", url: "https://amazon.es/dp/B0FB9QK8JZ" },
  { category: "witchcraft-magic-sexuality", pub: 56, written: "89", title: "Behind the Moans", status: "published", url: "https://amazon.es/dp/B0FB525NFB" },
  { category: "witchcraft-magic-sexuality", written: "110", title: "Desire and Denunciation", status: "editing" },
  { category: "witchcraft-magic-sexuality", written: "111", title: "Re-Enchantment of the Body", status: "editing" },

  // ---------------- English Readers (RJP Readers) ----------------
  { category: "readers", pub: 47, written: "56",    level: "A1.1", title: "Max the Brave", status: "published", url: "https://books2read.com/u/baxvka" },
  { category: "readers", pub: 48, written: "57",    level: "A1.1", title: "The Runaway Robot", status: "published", url: "https://books2read.com/u/mexOkA" },
  { category: "readers", pub: 49,                   level: "A1.1", title: "Max the Brave and The Runaway", note: "bundle", status: "published", url: "https://amazon.es/dp/B0F6T4CS9R" },
  { category: "readers", pub: 50, written: "59",    level: "A1.2", title: "The Mystery of the Missing Cake", status: "published", url: "https://books2read.com/u/3JA9DP" },
  { category: "readers", pub: 51, written: "58",    level: "A1.2", title: "The Dead Cat on My Doorstep", status: "published", url: "https://books2read.com/u/31oZG6" },
  { category: "readers", pub: 52,                   level: "A1.2", title: "The Dead Cat on My Doorstep and The Mystery of the Missing Cake", note: "bundle", status: "published", url: "https://amazon.es/dp/B0F6TNX7YV" },
  { category: "readers", pub: 57, written: "60",    level: "A2.1", title: "The Lighthouse Code", status: "published", url: "https://books2read.com/u/bzw1YZ" },
  { category: "readers", pub: 58, written: "61",    level: "A2.1", title: "The New Student", status: "published", url: "https://books2read.com/u/3Rgz9L" },
  { category: "readers", pub: 59,                   level: "A2.1", title: "The Lighthouse Code and Others", note: "bundle", status: "published", url: "https://amazon.es/dp/BOFD7HBPZY" },
  { category: "readers", pub: 60, written: "62",    level: "A2.1", title: "The Street Dog", status: "published", url: "https://books2read.com/u/4E1JAY" },
  { category: "readers", pub: 61, written: "63",    level: "A2.2", title: "The Alley Cat", status: "published", url: "https://books2read.com/u/ba9oN8" },
  { category: "readers", pub: 62, written: "62+63", level: "A2.1+A2.2", title: "Street Dog and Alley Cat", note: "bundle", status: "published", url: "" },
  { category: "readers", pub: 63, written: "64",    level: "A2.2", title: "The House on Silver Street", status: "published", url: "https://books2read.com/u/brLXoe" },
  { category: "readers", pub: 64, written: "65",    level: "A2.2", title: "The Midnight Phone Call", status: "published", url: "https://books2read.com/u/3G6jna" },
  { category: "readers", pub: 65, written: "66",    level: "A2.2", title: "The Window Across the Street", status: "published", url: "https://books2read.com/u/4jQVDv" },
  { category: "readers", pub: 66,                   level: "A2.2", title: "The Alley Cat and Other Stories", note: "bundle", status: "published", url: "https://amazon.es/dp/B0FD7MGR8M" },
  { category: "readers", pub: 67, written: "67",    level: "B1.1", title: "Shadows at School", status: "published", url: "https://books2read.com/u/bPjAXx" },
  { category: "readers", pub: 68, written: "68",    level: "B1.1", title: "The Girl Who Wasn't There", status: "published", url: "https://books2read.com/u/317wYw" },
  { category: "readers", pub: 69, written: "69",    level: "B1.1", title: "The Secret Lab", status: "published", url: "https://books2read.com/u/3yp8DJ" },
  { category: "readers", pub: 70, written: "70",    level: "B1.2", title: "Digital Ghost", status: "published", url: "https://books2read.com/u/mv8AnV" },
  { category: "readers", pub: 71, written: "69+70", level: "B1.1+B1.2", title: "The Secret Lab and The Digital Ghost", note: "bundle", status: "published", url: "https://books2read.com/u/mdeZNZ" },
  { category: "readers", pub: 72,                   level: "B1.1", title: "Shadows at School and Others", note: "bundle", status: "published", url: "https://amazon.es/dp/B0FD8QL5JN" },
  { category: "readers", pub: 73, written: "71",    level: "B1.2", title: "Second Skin", status: "published", url: "https://books2read.com/u/bQz8xD" },
  { category: "readers", pub: 74, written: "72",    level: "B1.2", title: "The Last Game", status: "published", url: "https://books2read.com/u/bMdLZk" },
  { category: "readers", pub: 75, written: "73",    level: "B1.2", title: "The Package", status: "published", url: "https://books2read.com/u/492YMM" },
  { category: "readers", pub: 76, written: "70-73", level: "B1.2", title: "Second Skin and Other Stories", note: "bundle", status: "published", url: "https://amazon.es/dp/B0FD8PMQGV" },
  { category: "readers", pub: 77, written: "74",    level: "B2.1", title: "The Disappearing Hour", status: "published", url: "https://books2read.com/u/bW2XN7" },
  { category: "readers", pub: 78, written: "75",    level: "B2.1", title: "The Fall of Elias Grey", status: "published", url: "https://books2read.com/u/m0nyDM" },
  { category: "readers", pub: 79, written: "76",    level: "B2.1", title: "Voices from the Deep", status: "published", url: "https://books2read.com/u/4AyqZe" },
  { category: "readers", pub: 80, written: "74-76", level: "B2.1", title: "The Disappearing Hour and Others", note: "bundle", status: "published", url: "https://amazon.es/dp/B0FDJPGGCG" },
  { category: "readers", pub: 81, written: "77",    level: "B2.2", title: "The Hacker Code", status: "published", url: "" },
  { category: "readers", pub: 82, written: "78",    level: "B2.2", title: "The Inheritance Algorithm", status: "published", url: "https://books2read.com/u/mV5GGA" },
  { category: "readers", pub: 83, written: "79",    level: "B2.2", title: "The Island of Secrets", status: "published", url: "https://books2read.com/u/b5Peep" },
  { category: "readers", pub: 84,                   level: "B2.2", title: "The Hacker Code and Other Stories", note: "bundle", status: "published", url: "https://amazon.es/dp/B0FDGMQN4Y" },
  { category: "readers", pub: 85, written: "80",    level: "C1.1", title: "Eternal Echoes", status: "published", url: "https://books2read.com/u/3yyPQp" },
  { category: "readers", pub: 86, written: "81",    level: "C1.1", title: "The Weight of Silence", status: "published", url: "https://books2read.com/u/mgdK5R" },
  { category: "readers", pub: 87,                   level: "C1.1", title: "Eternal Echoes and The Weight of Silence", note: "bundle", status: "published", url: "https://amazon.es/dp/B0FFMZV2VX" },
  { category: "readers", pub: 88, written: "82",    level: "C1.2", title: "The Collapse", status: "published", url: "https://books2read.com/u/3kzZOL" },
  { category: "readers", pub: 89, written: "83",    level: "C1.2", title: "The Memory Index", status: "published", url: "https://books2read.com/u/bzNpq9" },
  { category: "readers", pub: 90,                   level: "C1.2", title: "The Collapse and The Memory Index", note: "bundle", status: "published", url: "https://amazon.es/dp/B0FFN7GFK2" },
  { category: "readers", pub: 91, written: "84",    level: "C2.1", title: "The Archive of Vanishing Things", status: "published", url: "https://books2read.com/u/mYMRWY" },
  { category: "readers", pub: 92, written: "85",    level: "C2.1", title: "Under the Skin", status: "published", url: "https://books2read.com/u/3kzZQN" },
  { category: "readers", pub: 93,                   level: "C2.1", title: "The Archive of Vanishing Things and Under the Skin", note: "bundle", status: "published", url: "https://amazon.es/dp/B0FFMZW73V" },
  { category: "readers", pub: 94, written: "86",    level: "C2.2", title: "Clean Slate", status: "published", url: "https://books2read.com/u/47pkBE" },
  { category: "readers", pub: 95, written: "87",    level: "C2.2", title: "Underneath Her Smile", status: "published", url: "https://books2read.com/u/bQoZ7v" },
  { category: "readers", pub: 96,                   level: "C2.2", title: "Clean Slate and Underneath Her Smile", note: "bundle", status: "published", url: "https://amazon.es/dp/B0FFN4XCYV" },

  // ---------------- Novellas ----------------
  { category: "novellas", pub: 38, written: 36, code: "R01", title: "The Never-Ending Question", status: "published", url: "https://books2read.com/u/brEorZ" },
  { category: "novellas", pub: 39, written: 42, code: "R02", title: "The Moonfire Pact", note: "novelette", status: "published", url: "https://books2read.com/u/4E0v0e" },
  { category: "novellas", pub: 97,  written: "90G", title: "Ein Café namens Zuflucht", language: "German", status: "published", url: "https://books2read.com/u/mYJX9W" },
  { category: "novellas", pub: 98,  written: "90S", title: "Una Cafetería llamada Zuflucht", language: "Spanish", status: "published", url: "https://books2read.com/u/mVJpkA" },
  { category: "novellas", pub: 99,  written: "90F", title: "Un Café Nommé Zuflucht", language: "French", status: "published", url: "https://books2read.com/u/boJR6R" },
  { category: "novellas", pub: 100, written: "90I", title: "Un café chiamato Zuflucht", language: "Italian", status: "published", url: "https://books2read.com/u/bWM9WM" },
  { category: "novellas", pub: 101, written: "90E", title: "A Café called Zuflucht", language: "English", status: "published", url: "https://books2read.com/u/mvQvOq" },
  { category: "novellas", pub: 102, written: "91",  title: "L'Apagada", note: "novelette", status: "published", url: "https://books2read.com/u/3ykgNZ" },

  // ---------------- Language Learning ----------------
  { category: "language-learning", pub: 103, written: "94",  title: "How to Overcome Any Obstacle to Studying", status: "published", url: "https://books2read.com/u/bzMoyZ" },
  { category: "language-learning", pub: 104, written: "94S", title: "Cómo superar cualquier obstáculo para estudiar", language: "Spanish", status: "published", url: "https://books2read.com/u/m2WV16" },
  { category: "language-learning", pub: 105, written: "94F", title: "Comment surmonter tout obstacle à l'étude", language: "French", status: "published", url: "https://books2read.com/u/bWM1LD" },
  { category: "language-learning", pub: 106, written: "95",  title: "Technical English in 2026", status: "published", url: "https://books2read.com/u/4Xp2Q7" },
  { category: "language-learning", pub: 111, written: "96",  title: "Automatic Mind — Engineering the Subconscious for Language Mastery", status: "published", url: "https://www.amazon.es/dp/B0H1R23NCY" },
  { category: "language-learning", pub: 113, written: "97",  title: "Speak Naturally! Part 1 (A2–B1)", status: "published", url: "https://www.amazon.es/dp/B0HFSNDD4N" },
  { category: "language-learning", pub: 114, written: "98",  title: "Speak Naturally! Part 2 (B1–B2)", status: "published", url: "https://www.amazon.es/dp/B0HFT8YKG8" },
  { category: "language-learning", pub: 115, written: "99",  title: "Speak Naturally! Part 3 (B2–B2+)", status: "published", url: "https://www.amazon.es/dp/B0HF56GBTR9" },
  { category: "language-learning", pub: 116, title: "Speak Naturally! Box Set, Parts 1–3 (A2–B2+)", note: "bundle", status: "published", url: "https://www.amazon.es/dp/B0HFWJY4V3" },

  // ---------------- Thrillers ----------------
  { category: "thrillers", pub: 119, written: "104", title: "The 14th Page", status: "published", url: "https://www.amazon.es/dp/B0HJJY5J3F" },
  { category: "thrillers", written: "96", title: "The Secrets We Keep", status: "ready", url: "" },
  { category: "thrillers", written: "96S", title: "Los secretos que guardamos", language: "Spanish", status: "ready", url: "" },

  // ---------------- Science Fiction ----------------
  { category: "sci-fi", pub: 120, written: "93", title: "A Codex of Observations on Humanity", status: "published", url: "https://www.amazon.com/dp/B0HJK15DGQ" },
  { category: "sci-fi", written: "100", title: "The Universe in Extremis", status: "editing", url: "" },
  { category: "sci-fi", written: "102", title: "The Universe Extra Machina", status: "editing", url: "" },
  { category: "sci-fi", written: "103", title: "The Choir of Dust", status: "editing", url: "" },

];
