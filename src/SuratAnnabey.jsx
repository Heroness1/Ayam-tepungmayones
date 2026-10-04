import React, { useEffect, useState } from "react";



const styles = `
* { box-sizing: border-box; }
.annabey-page {
  --bg: #050608; --fg: #e8e5df; --muted: #85868a; --line: rgba(255,255,255,.12);
  min-height: 100dvh; position: relative; overflow: hidden; background: var(--bg); color: var(--fg);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  display:flex; align-items:center; justify-content:center; padding: 42px 7vw;
}
.annabey-page::before { content:""; position:absolute; inset:0; background: radial-gradient(circle at 82% 25%, rgba(90,100,125,.13), transparent 35%), radial-gradient(circle at 20% 80%, rgba(130,105,80,.08), transparent 30%); pointer-events:none; }
.grain { position:absolute; inset:-50%; opacity:.045; pointer-events:none; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E"); animation: grain .22s steps(2) infinite; }
.orb { position:absolute; border-radius:50%; filter:blur(70px); pointer-events:none; animation: drift 12s ease-in-out infinite alternate; }
.orb-one { width:42vw; height:42vw; right:-18vw; top:-18vw; background:rgba(87,99,125,.13); }
.orb-two { width:35vw; height:35vw; left:-20vw; bottom:-20vw; background:rgba(120,91,65,.08); animation-delay:-5s; }
.line { position:absolute; height:1px; width:32vw; background:linear-gradient(90deg, transparent, rgba(255,255,255,.16), transparent); transform:rotate(-38deg); opacity:.35; animation: sweep 9s ease-in-out infinite; }
.line-one { right:-8vw; top:28%; } .line-two { left:-12vw; bottom:22%; animation-delay:-4s; }
.topbar { position:absolute; top:25px; left:7vw; right:7vw; display:flex; justify-content:space-between; font-size:9px; letter-spacing:.28em; color:#707176; opacity:0; transform:translateY(-12px); transition:1s ease; z-index:4; }
.topbar.show { opacity:1; transform:none; } .topbar-center { position:absolute; left:50%; transform:translateX(-50%); }
.letter { width:min(760px,100%); min-height:470px; text-align:right; margin-left:auto; position:relative; z-index:2; opacity:0; transform:translateX(90px); transition:1s cubic-bezier(.16,1,.3,1); }
.letter.show { opacity:1; transform:none; }
.letter.leave-1 { opacity:0; transform:translateX(-80px) scale(.98); filter:blur(6px); }
.letter.leave--1 { opacity:0; transform:translateX(80px) scale(.98); filter:blur(6px); }
.chapter-meta { font-size:10px; letter-spacing:.35em; color:#777a80; margin-bottom:28px; }
.letter h1 { margin:0 0 42px auto; max-width:720px; font-family: Georgia, "Times New Roman", serif; font-size:clamp(45px,7vw,88px); line-height:.94; font-weight:400; letter-spacing:-.045em; color:#f1eee8; text-wrap:balance; }
.body-copy { max-width:620px; margin-left:auto; font-size:clamp(15px,1.8vw,18px); line-height:1.9; color:#a9a8a6; font-weight:300; }
.body-copy p { margin:0 0 20px; } .body-copy i { color:#ddd8cf; } .body-copy .quote { color:#eeeae2; font-family:Georgia,serif; font-size:1.15em; font-style:italic; }
.chapter-footer { border-top:1px solid var(--line); margin-top:55px; padding-top:18px; display:flex; justify-content:space-between; align-items:center; gap:20px; color:#66676b; font-size:9px; letter-spacing:.25em; text-transform:uppercase; }
.signature { font-family:Georgia,serif; font-style:italic; text-transform:none; letter-spacing:.04em; font-size:14px; color:#9a9893; }
.controls { position:absolute; right:7vw; bottom:35px; display:flex; align-items:center; gap:18px; z-index:5; opacity:0; transform:translateY(15px); transition:1s ease .25s; }
.controls.show { opacity:1; transform:none; } .controls > button { width:42px; height:42px; border:1px solid var(--line); border-radius:50%; background:rgba(255,255,255,.025); color:#aaa; cursor:pointer; transition:.4s; }
.controls > button:hover:not(:disabled) { background:rgba(255,255,255,.09); color:#fff; transform:scale(1.08); } .controls button:disabled { opacity:.18; cursor:default; }
.progress { display:flex; gap:7px; align-items:center; } .progress button { border:0; padding:0; width:18px; height:2px; background:#292a2d; cursor:pointer; transition:.5s; } .progress button.active { width:34px; background:#ddd8cf; }
.ending { position:fixed; inset:0; z-index:20; background:#050608; display:flex; align-items:center; justify-content:center; padding:30px; opacity:0; pointer-events:none; transition:1.5s ease; }
.ending.visible { opacity:1; pointer-events:auto; } .ending::after { content:""; position:absolute; inset:0; background:radial-gradient(circle at 75% 40%, rgba(100,105,120,.11), transparent 38%); }
.ending-inner { position:relative; z-index:1; width:min(650px,100%); text-align:right; transform:translateY(25px); transition:1.2s ease .3s; } .ending.visible .ending-inner { transform:none; }
.ending-label { font-size:9px; letter-spacing:.35em; color:#686a70; } .ending h2 { margin:25px 0; font:400 clamp(48px,8vw,92px)/.9 Georgia,serif; letter-spacing:-.05em; }
.ending p { color:#9d9d9d; line-height:1.9; font-size:15px; } .ending-small { margin-top:32px; font:italic 18px Georgia,serif; color:#d0cdc7 !important; }
.ending button { margin-top:55px; border:0; border-bottom:1px solid #44464a; padding:0 0 8px; background:none; color:#77797d; font-size:9px; letter-spacing:.3em; cursor:pointer; transition:.4s; } .ending button:hover { color:#eee; border-color:#aaa; }
@keyframes grain { 0%{transform:translate(0,0)} 25%{transform:translate(2%,-1%)} 50%{transform:translate(-1%,2%)} 75%{transform:translate(1%,1%)} 100%{transform:translate(-2%,-1%)} }
@keyframes drift { to { transform:translate(5vw,4vh) scale(1.12); } } @keyframes sweep { 0%,100%{transform:translateX(-10vw) rotate(-38deg);opacity:.1} 50%{transform:translateX(10vw) rotate(-38deg);opacity:.35} }
@media (max-width:700px) { .annabey-page { padding:70px 24px 105px; align-items:flex-start; } .topbar { left:24px; right:24px; } .topbar-center { display:none; } .letter { min-height:0; padding-top:35px; } .letter h1 { font-size:clamp(46px,14vw,72px); margin-bottom:32px; } .body-copy { font-size:15px; line-height:1.8; } .chapter-footer { margin-top:38px; } .controls { right:24px; bottom:24px; left:24px; justify-content:space-between; } .progress { flex:1; justify-content:center; } .progress button { width:12px; } .progress button.active { width:24px; } .ending-inner { width:100%; } }
`;

const chapters = [
  {
    eyebrow: "01 / THE BEGINNING",
    title: "It started with a chat.",
    body: (
      <>
        <p>Semua berawal dari sebuah percakapan kecil di TikTok.</p>
        <p>Awalnya cuma berbincang lewat chat. Tidak ada yang benar-benar tahu percakapan itu akan membawa kita sejauh ini.</p>
        <p>Sampai suatu hari, kamu mengirimkan sebuah surat. Sebuah ajakan sederhana untuk bermain <i>Sky</i>.</p>
        <p>Dan entah kenapa, dari ajakan sesederhana itu, cerita kita mulai berjalan.</p>
      </>
    ),
  },
  {
    eyebrow: "02 / SOMETHING UNEXPECTED",
    title: "I never planned for this.",
    body: (
      <>
        <p>Mungkin waktu itu kita sama-sama nggak pernah berpikir kalau seseorang yang awalnya hanya muncul di layar, perlahan bisa punya tempat sendiri di hidup kita.</p>
        <p>Ada obrolan yang awalnya biasa saja, lalu berubah menjadi sesuatu yang selalu ingin kita tunggu.</p>
        <p>Dan tanpa sadar, kita menciptakan cerita kita sendiri.</p>
      </>
    ),
  },
  {
    eyebrow: "03 / RIGHT NOW",
    title: "I understand.",
    body: (
      <>
        <p>Sekarang kita sedang berada di satu titik yang berbeda.</p>
        <p>Kamu punya sesuatu yang harus kamu perjuangkan. Kuliahmu, masa depanmu, dan dirimu sendiri.</p>
        <p>Dan kali ini, aku nggak ingin menjadi sesuatu yang membuat langkahmu terasa lebih berat.</p>
      </>
    ),
  },
  {
    eyebrow: "04 / NO PRESSURE",
    title: "So, take your time.",
    body: (
      <>
        <p>Aku nggak ingin kamu merasa harus memilih antara aku dan masa depanmu.</p>
        <p>Fokuslah. Kejar apa yang ingin kamu capai. Selesaikan apa yang harus kamu selesaikan.</p>
        <p>Kalau kamu lelah, istirahat. Kalau gagal, coba lagi. Nggak apa-apa.</p>
        <p>Aku mungkin nggak selalu ada di sampingmu seperti sebelumnya, tapi aku tetap berharap kamu berhasil.</p>
      </>
    ),
  },
  {
    eyebrow: "05 / FOR YOU",
    title: "Not because I expect something back.",
    body: (
      <>
        <p>Aku ingin melihat kamu menjadi versi dirimu yang kamu inginkan.</p>
        <p>Bukan supaya kamu kembali kepadaku. Bukan supaya kamu merasa punya kewajiban apa pun.</p>
        <p>Tapi karena aku memang ingin kamu punya kehidupan yang kamu banggakan.</p>
      </>
    ),
  },
  {
    eyebrow: "06 / MAYBE SOMEDAY",
    title: "If our paths meet again…",
    body: (
      <>
        <p>Mungkin suatu hari nanti kita akan bertemu lagi dengan versi diri kita yang lebih baik.</p>
        <p>Mungkin kita masih akan berjalan bersama.</p>
        <p>Mungkin juga hidup membawa kita ke arah yang berbeda.</p>
        <p>Entah bagaimana akhirnya, aku cuma berharap saat hari itu datang, kita masih bisa tersenyum dan berkata:</p>
        <p className="quote">“Ternyata perjalanan kita waktu itu memang berarti.”</p>
      </>
    ),
  },
  {
    eyebrow: "07 / FOR NOW",
    title: "Just keep going, Annabey.",
    body: (
      <>
        <p>Nggak perlu buru-buru.</p>
        <p>Nggak perlu memikirkan semuanya sekaligus.</p>
        <p>Satu semester. Satu tugas. Satu langkah. Satu hari pada satu waktu.</p>
        <p>Aku akan menjalani hidupku juga. Kamu jalani hidupmu.</p>
        <p>Dan untuk sekarang, itu sudah cukup.</p>
      </>
    ),
  },
];

export default function SuratAnnabey() {
  const [current, setCurrent] = useState(0);
  const [ready, setReady] = useState(false);
  const [direction, setDirection] = useState(1);
  const [leaving, setLeaving] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 120);
    return () => clearTimeout(t);
  }, []);

  const go = (next) => {
    if (leaving) return;
    if (next < 0 || next >= chapters.length) return;
    setDirection(next > current ? 1 : -1);
    setLeaving(true);
    setTimeout(() => {
      setCurrent(next);
      setLeaving(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);
  };

  const finish = () => {
    setFinished(true);
  };

  return (
    <>
      <style>{styles}</style>
    <main className={`annabey-page ${finished ? "finished" : ""}`}>
      <div className="grain" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="line line-one" />
      <div className="line line-two" />

      <header className={`topbar ${ready ? "show" : ""}`}>
        <span>ANNABEY</span>
        <span className="topbar-center">A LETTER / 2026</span>
        <span>{String(current + 1).padStart(2, "0")} — {String(chapters.length).padStart(2, "0")}</span>
      </header>

      <section className={`letter ${ready ? "show" : ""} ${leaving ? `leave-${direction}` : ""}`}>
        <div className="chapter-meta">{chapters[current].eyebrow}</div>
        <h1>{chapters[current].title}</h1>
        <div className="body-copy">{chapters[current].body}</div>

        <div className="chapter-footer">
          <span className="signature">— for Annabey</span>
          <span className="scroll-note">{current === chapters.length - 1 ? "THE LAST PAGE" : "KEEP GOING"}</span>
        </div>
      </section>

      <nav className={`controls ${ready ? "show" : ""}`}>
        <button onClick={() => go(current - 1)} disabled={current === 0 || leaving}>←</button>
        <div className="progress">
          {chapters.map((_, i) => (
            <button key={i} onClick={() => go(i)} className={i === current ? "active" : ""} aria-label={`Chapter ${i + 1}`} />
          ))}
        </div>
        {current < chapters.length - 1 ? (
          <button onClick={() => go(current + 1)} disabled={leaving}>→</button>
        ) : (
          <button onClick={finish} disabled={leaving}>↗</button>
        )}
      </nav>

      <div className={`ending ${finished ? "visible" : ""}`}>
        <div className="ending-inner">
          <span className="ending-label">NO PROMISES. NO PRESSURE.</span>
          <h2>Take your time.</h2>
          <p>
            Pergilah dan perjuangkan apa yang ingin kamu capai.<br />
            Aku juga akan terus berjalan di jalanku.
          </p>
          <p className="ending-small">And if our paths meet again… we'll see.</p>
          <button onClick={() => { setFinished(false); setCurrent(0); }}>READ AGAIN</button>
        </div>
      </div>
    </main>
    </>
  );
}

