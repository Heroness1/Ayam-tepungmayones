import React, { useEffect, useRef, useState } from "react";
import "./Amplop.css";

const chapters = [
  {
    eyebrow: "01 / THE BEGINNING",
    title: "It started with a chat.",
    body: (
      <>
        <p>Semua berawal dari sebuah percakapan kecil di TikTok.</p>
        <p>
          Awalnya cuma berbincang lewat chat. Tidak ada yang benar-benar tahu
          percakapan itu akan membawa kita sejauh ini.
        </p>
        <p>
          Sampai suatu hari, kamu mengirimkan sebuah surat. Sebuah ajakan
          sederhana untuk bermain <i>Sky</i>.
        </p>
        <p>
          Dan entah kenapa, dari ajakan sesederhana itu, cerita kita mulai
          berjalan.
        </p>
      </>
    ),
  },
  {
    eyebrow: "02 / SOMETHING UNEXPECTED",
    title: "I never planned for this.",
    body: (
      <>
        <p>
          Mungkin waktu itu kita sama-sama nggak pernah berpikir kalau
          seseorang yang awalnya hanya muncul di layar, perlahan bisa punya
          tempat sendiri di hidup kita.
        </p>
        <p>
          Ada obrolan yang awalnya biasa saja, lalu berubah menjadi sesuatu
          yang selalu ingin kita tunggu.
        </p>
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
        <p>
          Kamu punya sesuatu yang harus kamu perjuangkan. Kuliahmu, masa
          depanmu, dan dirimu sendiri.
        </p>
        <p>
          Dan kali ini, aku nggak ingin menjadi sesuatu yang membuat langkahmu
          terasa lebih berat.
        </p>
      </>
    ),
  },
  {
    eyebrow: "04 / NO PRESSURE",
    title: "So, take your time.",
    body: (
      <>
        <p>
          Aku nggak ingin kamu merasa harus memilih antara aku dan masa
          depanmu.
        </p>
        <p>
          Fokuslah. Kejar apa yang ingin kamu capai. Selesaikan apa yang harus
          kamu selesaikan.
        </p>
        <p>Kalau kamu lelah, istirahat. Kalau gagal, coba lagi. Nggak apa-apa.</p>
        <p>
          Aku mungkin nggak selalu ada di sampingmu seperti sebelumnya, tapi aku
          tetap berharap kamu berhasil.
        </p>
      </>
    ),
  },
  {
    eyebrow: "05 / FOR YOU",
    title: "Not because I expect something back.",
    body: (
      <>
        <p>Aku ingin melihat kamu menjadi versi dirimu yang kamu inginkan.</p>
        <p>
          Bukan supaya kamu kembali kepadaku. Bukan supaya kamu merasa punya
          kewajiban apa pun.
        </p>
        <p>
          Tapi karena aku memang ingin kamu punya kehidupan yang kamu banggakan.
        </p>
      </>
    ),
  },
  {
    eyebrow: "06 / MAYBE SOMEDAY",
    title: "If our paths meet again…",
    body: (
      <>
        <p>
          Mungkin suatu hari nanti kita akan bertemu lagi dengan versi diri kita
          yang lebih baik.
        </p>
        <p>Mungkin kita masih akan berjalan bersama.</p>
        <p>Mungkin juga hidup membawa kita ke arah yang berbeda.</p>
        <p>
          Entah bagaimana akhirnya, aku cuma berharap saat hari itu datang,
          kita masih bisa tersenyum dan berkata:
        </p>
        <p className="cinematic-quote">
          “Ternyata perjalanan kita waktu itu memang berarti.”
        </p>
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
        <p>
          Satu semester. Satu tugas. Satu langkah. Satu hari pada satu waktu.
        </p>
        <p>Aku akan menjalani hidupku juga. Kamu jalani hidupmu.</p>
        <p>Dan untuk sekarang, itu sudah cukup.</p>
      </>
    ),
  },
];

function splitWords(text) {
  return text.split(" ").map((word, index) => (
    <span
      key={`${word}-${index}`}
      className="kinetic-word"
      style={{ "--word-index": index }}
    >
      {word}
      {index !== text.split(" ").length - 1 ? "\u00A0" : ""}
    </span>
  ));
}

export default function SuratAnnabey() {
  const [current, setCurrent] = useState(0);
  const [ready, setReady] = useState(false);
  const [direction, setDirection] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [finished, setFinished] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const timeoutRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 100);

    const handlePointerMove = (event) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      setMouse({
        x: x * 12,
        y: y * 12,
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("pointermove", handlePointerMove);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const go = (next) => {
    if (
      transitioning ||
      next < 0 ||
      next >= chapters.length ||
      next === current
    ) {
      return;
    }

    setDirection(next > current ? 1 : -1);
    setTransitioning(true);

    timeoutRef.current = setTimeout(() => {
      setCurrent(next);

      requestAnimationFrame(() => {
        setTransitioning(false);
      });

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 620);
  };

  const restart = () => {
    setFinished(false);
    setTransitioning(false);
    setCurrent(0);
    setReady(false);

    setTimeout(() => setReady(true), 80);
  };

  const chapter = chapters[current];

  return (
    <main
      className={`annabey-page ${
        ready ? "is-ready" : ""
      } ${transitioning ? "is-transitioning" : ""} ${
        finished ? "is-finished" : ""
      }`}
      style={{
        "--mouse-x": `${mouse.x}px`,
        "--mouse-y": `${mouse.y}px`,
      }}
    >
      {/* BACKGROUND */}
      <div className="ambient-background">
        <div className="noise-layer" />
        <div className="ambient-glow glow-a" />
        <div className="ambient-glow glow-b" />
        <div className="ambient-glow glow-c" />

        <div className="orbit orbit-a" />
        <div className="orbit orbit-b" />

        <div className="light-streak streak-a" />
        <div className="light-streak streak-b" />

        <div className="grid-floor" />
      </div>

      {/* TOP NAV */}
      <header className="annabey-topbar">
        <div className="brand-mark">
          <span className="brand-dot" />
          ANNABEY
        </div>

        <div className="top-center">
          A LETTER / 2026
        </div>

        <div className="chapter-counter">
          <span>{String(current + 1).padStart(2, "0")}</span>
          <span className="counter-line" />
          <span>{String(chapters.length).padStart(2, "0")}</span>
        </div>
      </header>

      {/* SIDE DECORATION */}
      <div className="side-label side-left">
        A STORY BETWEEN
      </div>

      <div className="side-label side-right">
        TAKE YOUR TIME
      </div>

      {/* MAIN LETTER */}
      <section
        className={`cinematic-letter ${
          transitioning
            ? direction > 0
              ? "exit-forward"
              : "exit-backward"
            : "enter"
        }`}
      >
        <div className="chapter-number">
          {String(current + 1).padStart(2, "0")}
        </div>

        <div className="chapter-meta">
          <span className="meta-line" />
          <span>{chapter.eyebrow}</span>
        </div>

        <h1 key={`title-${current}`}>
          {splitWords(chapter.title)}
        </h1>

        <div
          className="letter-body"
          key={`body-${current}`}
        >
          {chapter.body}
        </div>

        <div className="letter-footer">
          <span className="signature">
            — for Annabey
          </span>

          <span className="footer-status">
            {current === chapters.length - 1
              ? "THE LAST PAGE"
              : "KEEP GOING"}
          </span>
        </div>
      </section>

      {/* NAVIGATION */}
      <nav className="cinematic-controls">
        <button
          className="circle-control"
          onClick={() => go(current - 1)}
          disabled={current === 0 || transitioning}
          aria-label="Previous"
        >
          <span>←</span>
        </button>

        <div className="chapter-progress">
          {chapters.map((_, index) => (
            <button
              key={index}
              onClick={() => go(index)}
              className={index === current ? "active" : ""}
              disabled={transitioning}
              aria-label={`Chapter ${index + 1}`}
            >
              <span />
            </button>
          ))}
        </div>

        {current < chapters.length - 1 ? (
          <button
            className="circle-control next"
            onClick={() => go(current + 1)}
            disabled={transitioning}
            aria-label="Next"
          >
            <span>→</span>
          </button>
        ) : (
          <button
            className="circle-control next finish-button"
            onClick={() => setFinished(true)}
            disabled={transitioning}
            aria-label="Finish"
          >
            <span>↗</span>
          </button>
        )}
      </nav>

      {/* SWIPE HINT */}
      <div className="swipe-hint">
        <span>SWIPE</span>
        <div className="swipe-line">
          <i />
        </div>
      </div>

      {/* FINAL SCENE */}
      <div className={`final-scene ${finished ? "visible" : ""}`}>
        <div className="final-orb" />

        <div className="final-content">
          <span className="final-eyebrow">
            NO PROMISES. NO PRESSURE.
          </span>

          <h2>
            Take
            <br />
            <em>your time.</em>
          </h2>

          <div className="final-divider" />

          <p>
            Pergilah dan perjuangkan apa yang ingin
            kamu capai.
            <br />
            Aku juga akan terus berjalan di jalanku.
          </p>

          <p className="final-quote">
            And if our paths meet again…
            <br />
            <span>we'll see.</span>
          </p>

          <button
            className="read-again"
            onClick={restart}
          >
            <span>READ AGAIN</span>
            <i />
          </button>
        </div>

        <div className="final-corner">
          ANNABEY / 2026
        </div>
      </div>
    </main>
  );
}
