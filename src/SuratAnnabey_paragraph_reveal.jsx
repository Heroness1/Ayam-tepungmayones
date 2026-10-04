import React, { useEffect, useState } from "react";
import "./Amplop.css";

const chapters = [
  {
    eyebrow: "01 / THE BEGINNING",
    title: "It started with a chat.",
    body: (
      <>
        <p>
          Semua berawal dari sebuah percakapan kecil di TikTok.
        </p>

        <p>
          Awalnya cuma berbincang lewat chat. Tidak ada yang
          benar-benar tahu percakapan itu akan membawa kita
          sejauh ini.
        </p>

        <p>
          Sampai suatu hari, kamu mengirimkan sebuah surat.
          Sebuah ajakan sederhana untuk bermain <i>Sky</i>.
        </p>

        <p>
          Dan entah kenapa, dari ajakan sesederhana itu,
          cerita kita mulai berjalan.
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
          Mungkin waktu itu kita sama-sama nggak pernah
          berpikir kalau seseorang yang awalnya hanya muncul
          di layar, perlahan bisa punya tempat sendiri
          di hidup kita.
        </p>

        <p>
          Ada obrolan yang awalnya biasa saja, lalu berubah
          menjadi sesuatu yang selalu ingin kita tunggu.
        </p>

        <p>
          Dan tanpa sadar, kita menciptakan cerita kita sendiri.
        </p>
      </>
    ),
  },

  {
    eyebrow: "03 / RIGHT NOW",
    title: "I understand.",
    body: (
      <>
        <p>
          Sekarang kita sedang berada di satu titik yang berbeda.
        </p>

        <p>
          Kamu punya sesuatu yang harus kamu perjuangkan.
          Kuliahmu, masa depanmu, dan dirimu sendiri.
        </p>

        <p>
          Dan kali ini, aku nggak ingin menjadi sesuatu yang
          membuat langkahmu terasa lebih berat.
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
          Aku nggak ingin kamu merasa harus memilih antara aku
          dan masa depanmu.
        </p>

        <p>
          Fokuslah. Kejar apa yang ingin kamu capai.
          Selesaikan apa yang harus kamu selesaikan.
        </p>

        <p>
          Kalau kamu lelah, istirahat.
          Kalau gagal, coba lagi.
          Nggak apa-apa.
        </p>

        <p>
          Aku mungkin nggak selalu ada di sampingmu seperti
          sebelumnya, tapi aku tetap berharap kamu berhasil.
        </p>
      </>
    ),
  },

  {
    eyebrow: "05 / FOR YOU",
    title: "Not because I expect something back.",
    body: (
      <>
        <p>
          Aku ingin melihat kamu menjadi versi dirimu
          yang kamu inginkan.
        </p>

        <p>
          Bukan supaya kamu kembali kepadaku.
          Bukan supaya kamu merasa punya kewajiban apa pun.
        </p>

        <p>
          Tapi karena aku memang ingin kamu punya kehidupan
          yang kamu banggakan.
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
          Mungkin suatu hari nanti kita akan bertemu lagi
          dengan versi diri kita yang lebih baik.
        </p>

        <p>
          Mungkin kita masih akan berjalan bersama.
        </p>

        <p>
          Mungkin juga hidup membawa kita ke arah yang berbeda.
        </p>

        <p>
          Entah bagaimana akhirnya, aku cuma berharap saat
          hari itu datang, kita masih bisa tersenyum dan berkata:
        </p>

        <p className="quote">
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
        <p>
          Nggak perlu buru-buru.
        </p>

        <p>
          Nggak perlu memikirkan semuanya sekaligus.
        </p>

        <p>
          Satu semester.
          Satu tugas.
          Satu langkah.
          Satu hari pada satu waktu.
        </p>

        <p>
          Aku akan menjalani hidupku juga.
          Kamu jalani hidupmu.
        </p>

        <p>
          Dan untuk sekarang,
          itu sudah cukup.
        </p>
      </>
    ),
  },
];

const paragraphRevealStyles = `
.letter-body p {
  opacity: 0;
  filter: blur(16px);
  transform: translate3d(0, 22px, 0) scale(.985);
  will-change: opacity, filter, transform;
  animation: annabeyParagraphReveal 1.15s cubic-bezier(.16,1,.3,1) forwards;
}

.letter-body p:nth-of-type(1) { animation-delay: 320ms; }
.letter-body p:nth-of-type(2) { animation-delay: 540ms; }
.letter-body p:nth-of-type(3) { animation-delay: 760ms; }
.letter-body p:nth-of-type(4) { animation-delay: 980ms; }
.letter-body p:nth-of-type(5) { animation-delay: 1200ms; }

.letter-body p.quote {
  opacity: 0;
  filter: blur(18px);
  transform: translate3d(0, 26px, 0) scale(.98);
  color: #eeeae2;
  text-shadow: 0 0 0 rgba(255,255,255,0);
  animation: annabeyQuoteReveal 1.6s cubic-bezier(.16,1,.3,1) 1.15s forwards;
}

@keyframes annabeyParagraphReveal {
  0% {
    opacity: 0;
    filter: blur(16px);
    transform: translate3d(0, 22px, 0) scale(.985);
  }
  55% {
    opacity: .72;
    filter: blur(4px);
    transform: translate3d(0, 5px, 0) scale(1);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translate3d(0, 0, 0) scale(1);
  }
}

@keyframes annabeyQuoteReveal {
  0% {
    opacity: 0;
    filter: blur(18px);
    transform: translate3d(0, 26px, 0) scale(.98);
    text-shadow: 0 0 24px rgba(255,255,255,.18);
  }
  65% {
    opacity: .8;
    filter: blur(3px);
    transform: translate3d(0, 4px, 0) scale(1.005);
    text-shadow: 0 0 18px rgba(255,255,255,.08);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translate3d(0, 0, 0) scale(1);
    text-shadow: 0 0 0 rgba(255,255,255,0);
  }
}

/* Saat chapter berganti, paragraf baru dimulai lagi dari keadaan blur. */
.letter-content.leave-forward .letter-body p {
  animation: annabeyParagraphExitForward .42s cubic-bezier(.7,0,.84,0) forwards;
  animation-delay: 0ms;
}

.letter-content.leave-back .letter-body p {
  animation: annabeyParagraphExitBack .42s cubic-bezier(.7,0,.84,0) forwards;
  animation-delay: 0ms;
}

@keyframes annabeyParagraphExitForward {
  to {
    opacity: 0;
    filter: blur(12px);
    transform: translate3d(-28px, -4px, 0) scale(.985);
  }
}

@keyframes annabeyParagraphExitBack {
  to {
    opacity: 0;
    filter: blur(12px);
    transform: translate3d(28px, -4px, 0) scale(.985);
  }
}

@media (prefers-reduced-motion: reduce) {
  .letter-body p,
  .letter-body p.quote,
  .letter-content.leave-forward .letter-body p,
  .letter-content.leave-back .letter-body p {
    animation: none !important;
    opacity: 1 !important;
    filter: none !important;
    transform: none !important;
    text-shadow: none !important;
  }
}
`;

export default function SuratAnnabey() {
  const [current, setCurrent] = useState(0);
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [direction, setDirection] = useState(1);
  const [finished, setFinished] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const go = (next) => {
    if (leaving) return;

    if (next < 0 || next >= chapters.length) {
      return;
    }

    setDirection(next > current ? 1 : -1);
    setLeaving(true);

    setTimeout(() => {
      setCurrent(next);
      setLeaving(false);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 520);
  };

  const next = () => {
    if (current < chapters.length - 1) {
      go(current + 1);
    } else {
      setFinished(true);
    }
  };

  const previous = () => {
    go(current - 1);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      next();
    }

    if (event.key === "ArrowLeft") {
      previous();
    }

    if (event.key === "Escape") {
      setFinished(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <style>{paragraphRevealStyles}</style>
      <main
      className={`annabey-letter-page ${
        finished ? "ending-active" : ""
      }`}
      style={{
        "--mouse-x": mouse.x,
        "--mouse-y": mouse.y,
      }}
    >
      {/* BACKGROUND */}

      <div className="letter-noise" />

      <div className="letter-aura aura-one" />
      <div className="letter-aura aura-two" />

      <div className="letter-grid" />

      <div className="letter-light" />

      {/* TOP BAR */}

      <header
        className={`letter-topbar ${
          ready ? "show" : ""
        }`}
      >
        <div className="brand">
          ANNABEY
        </div>

        <div className="top-center">
          A LETTER / 2026
        </div>

        <div className="chapter-counter">
          {String(current + 1).padStart(2, "0")}
          <span>/</span>
          {String(chapters.length).padStart(2, "0")}
        </div>
      </header>

      {/* MAIN LETTER */}

      <section
        className={`letter-content ${
          ready ? "show" : ""
        } ${
          leaving
            ? direction > 0
              ? "leave-forward"
              : "leave-back"
            : ""
        }`}
        key={current}
      >
        <div className="letter-inner">

          <div className="chapter-eyebrow">
            <span className="eyebrow-line" />
            {chapters[current].eyebrow}
          </div>

          <h1>
            {chapters[current].title}
          </h1>

          <div className="letter-body">
            {chapters[current].body}
          </div>

          <div className="letter-footer">
            <span className="signature">
              — for Annabey
            </span>

            <span>
              {current === chapters.length - 1
                ? "THE LAST PAGE"
                : "KEEP GOING"}
            </span>
          </div>

        </div>
      </section>

      {/* SIDE DECOR */}

      <div className="side-number">
        {String(current + 1).padStart(2, "0")}
      </div>

      <div className="side-line" />

      {/* CONTROLS */}

      <nav
        className={`letter-controls ${
          ready ? "show" : ""
        }`}
      >
        <button
          className="nav-button"
          onClick={previous}
          disabled={current === 0 || leaving}
          aria-label="Previous chapter"
        >
          <span>←</span>
        </button>

        <div className="chapter-progress">
          {chapters.map((_, index) => (
            <button
              key={index}
              className={
                index === current
                  ? "progress-active"
                  : ""
              }
              onClick={() => go(index)}
              disabled={leaving}
              aria-label={`Chapter ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="nav-button next-button"
          onClick={next}
          disabled={leaving}
          aria-label="Next chapter"
        >
          <span>
            {current === chapters.length - 1
              ? "↗"
              : "→"}
          </span>
        </button>
      </nav>

      {/* SCROLL HINT */}

      {!finished && (
        <div className="scroll-hint">
          <span>USE ARROWS</span>
          <div className="scroll-line" />
        </div>
      )}

      {/* ENDING */}

      <div
        className={`annabey-ending ${
          finished ? "visible" : ""
        }`}
      >
        <div className="ending-aura" />

        <div className="ending-content">

          <div className="ending-eyebrow">
            NO PROMISES · NO PRESSURE
          </div>

          <h2>
            Take
            <br />
            <em>your time.</em>
          </h2>

          <div className="ending-divider" />

          <p>
            Pergilah dan perjuangkan apa yang ingin
            kamu capai.
            <br />
            Aku juga akan terus berjalan di jalanku.
          </p>

          <p className="ending-quote">
            And if our paths meet again…
            <br />
            we'll see.
          </p>

          <button
            className="read-again"
            onClick={() => {
              setFinished(false);
              setCurrent(0);
              setLeaving(false);
            }}
          >
            <span>READ AGAIN</span>
            <i>↗</i>
          </button>

        </div>
      </div>
      </main>
    </>
  );
}
