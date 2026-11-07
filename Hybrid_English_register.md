<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Register your interest in receiving information about the Hybrid English 5.0 language learning program.">
  <title>Hybrid English 5.0 | Request information</title>
  <style>
    :root { color-scheme: light; --navy: #092d55; --blue: #087eb5; --ink: #18324d; --muted: #60758a; }
    * { box-sizing: border-box; }
    body { margin: 0; min-height: 100vh; font-family: "IBM Plex Sans", "Segoe UI", sans-serif; color: var(--ink); background: radial-gradient(ellipse at 20% 10%, #e0f4fc 0, transparent 45%), linear-gradient(145deg, #f7fbfe, #eaf2f8); }
    .page { width: min(100% - 32px, 1080px); margin: auto; padding: 32px 0 56px; }
    .topline { display: flex; align-items: center; justify-content: space-between; color: var(--navy); font-size: .88rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
    .topline a { color: inherit; text-decoration: none; letter-spacing: 0; text-transform: none; }
    main { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(340px, .95fr); gap: clamp(28px, 6vw, 76px); align-items: center; padding: clamp(38px, 8vh, 88px) 0; }
    .intro { padding: 12px 0; }
    .logo { display: block; width: min(100%, 300px); height: auto; margin: 0 auto 32px 0; filter: drop-shadow(0 10px 20px #06325b18); }
    .eyebrow { color: var(--blue); font-size: .8rem; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }
    h1 { color: var(--navy); font-size: clamp(2.8rem, 6vw, 5rem); line-height: .98; letter-spacing: -.055em; margin: 14px 0 20px; }
    .intro p { max-width: 540px; color: #49647d; font-size: 1.15rem; line-height: 1.7; }
    .chips { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 28px; }
    .chips span { border: 1px solid #c9dcea; border-radius: 99px; padding: 9px 14px; color: #385a78; font-size: .88rem; background: #ffffffa8; }
    .card { background: #fff; border: 1px solid #e2eaf1; border-radius: 22px; padding: clamp(25px, 4vw, 42px); box-shadow: 0 24px 70px #092d5516; }
    .card h2 { color: var(--navy); font-size: 1.65rem; margin: 0 0 8px; }
    .card > p { color: var(--muted); margin: 0 0 26px; line-height: 1.55; }
    label { display: block; color: #27445f; font-size: .9rem; font-weight: 700; margin: 18px 0 8px; }
    input { display: block; width: 100%; border: 1px solid #cbd8e3; border-radius: 10px; padding: 13px 14px; font: inherit; color: var(--ink); background: #fbfdff; }
    input:focus { outline: 3px solid #149ad329; border-color: var(--blue); }
    button { margin-top: 25px; width: 100%; border: 0; border-radius: 10px; padding: 15px; color: #fff; background: linear-gradient(100deg, #087eb5, #07569a); font: inherit; font-weight: 800; cursor: pointer; box-shadow: 0 8px 18px #087eb533; }
    button:hover { filter: brightness(1.06); }
    .privacy { margin: 14px 0 0 !important; font-size: .78rem; line-height: 1.5 !important; }
    footer { border-top: 1px solid #d8e3eb; padding-top: 20px; color: #718398; font-size: .82rem; text-align: center; }
    @media(max-width: 760px) { .page { padding-top: 22px; } main { grid-template-columns: 1fr; gap: 16px; padding-top: 42px; } .logo { width: 230px; margin: 0 auto 25px; } .intro { text-align: center; } .intro p { margin-left: auto; margin-right: auto; } .chips { justify-content: center; } .card { max-width: 540px; width: 100%; margin: 0 auto; } }
  </style>
</head>
<body>
  <div class="page">
    <nav class="topline" aria-label="Main navigation">
      <span>Hybrid English 5.0</span>
      <a href="/">← Back to rikkijprince.com</a>
    </nav>
    <main>
      <section class="intro" aria-labelledby="page-title">
        <img class="logo" src="/assets/images/hybrid-english-5-logo.png" alt="Hybrid English 5.0 — AI and Human Tutoring Combined">
        <span class="eyebrow">English learning, with a human touch</span>
        <h1 id="page-title">Hybrid English 5.0</h1>
        <p>Interested in the Hybrid English 5.0 language learning program? Leave your details and we’ll get in touch with more information.</p>
        <div class="chips" aria-label="Program features"><span>AI-supported practice</span><span>Human tutoring</span><span>Personal progress</span></div>
      </section>
      <section class="card" aria-labelledby="form-title">
        <h2 id="form-title">Request information</h2>
        <p>Register your interest and we’ll contact you about the program.</p>
        <form action="mailto:221idiomas@gmail.com" method="post" enctype="text/plain">
          <label for="full-name">Full name</label>
          <input id="full-name" name="Full name" type="text" autocomplete="name" required>
          <label for="phone">Phone number</label>
          <input id="phone" name="Phone number" type="tel" autocomplete="tel" required>
          <label for="email">Email address</label>
          <input id="email" name="Email address" type="email" autocomplete="email" required>
          <button type="submit">Send my details</button>
          <p class="privacy">By submitting, you agree that your details may be used to contact you about Hybrid English 5.0. We won’t use them for unrelated messages.</p>
        </form>
      </section>
    </main>
    <footer>Hybrid English 5.0 · AI &amp; Human Tutoring Combined</footer>
  </div>
</body>
</html>
