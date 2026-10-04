import React, { useState } from "react";
import "./Amplop.css";

export default function Amplop({ onBukaSurat }) {
  const [isRevealing, setIsRevealing] = useState(false);

  const handleReveal = () => {
    setIsRevealing(true);

    setTimeout(() => {
      onBukaSurat();
    }, 2500);
  };

  return (
    <div className="min-h-[100dvh] bg-[#030303] flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-white/20">

      {/* =========================================
          AMBIENT CINEMATIC LIGHT
      ========================================= */}
      <div
        className={`absolute inset-0 transition-opacity duration-[2000ms] ${
          isRevealing ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute top-[-20%] right-[-15%] w-[75vw] h-[75vw] bg-[#172033] rounded-full mix-blend-screen filter blur-[140px] sm:blur-[180px] animate-slow-drift opacity-60" />

        <div className="absolute bottom-[-25%] left-[-15%] w-[65vw] h-[65vw] bg-[#211a2b] rounded-full mix-blend-screen filter blur-[140px] sm:blur-[180px] animate-slow-drift-reverse opacity-50" />
      </div>

      {/* SUBTLE FILM GRAIN */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <div
        className={`relative z-10 flex flex-col items-end justify-center w-full max-w-2xl px-8 sm:px-12 text-right transition-all duration-[2000ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
          isRevealing
            ? "opacity-0 translate-x-16 scale-105 blur-2xl"
            : "opacity-100 translate-x-0 scale-100 blur-0"
        }`}
      >

        {/* SMALL LABEL */}
        <p className="text-[#8f929b] text-[9px] sm:text-[10px] tracking-[0.55em] uppercase font-light mb-6 opacity-80">
          A letter for you
        </p>

        {/* TITLE */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#e4e6eb] to-[#777c88] tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.08)]">
          Annabey.
        </h1>

        {/* DIVIDER */}
        <div className="w-20 h-px bg-gradient-to-l from-white/50 to-transparent mt-8 mb-7" />

        {/* SUBTITLE */}
        <p className="text-[#b7b9c0] text-sm sm:text-base font-light leading-relaxed tracking-wide max-w-md">
          Some things don't need to be rushed.
          <br />
          Some stories just need a little time.
        </p>

        {/* =========================================
            BUTTON
        ========================================= */}
        <div className="flex flex-col items-end mt-12">

          <button
            onClick={handleReveal}
            disabled={isRevealing}
            aria-label="Open letter"
            className="group relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.03)] transition-all duration-700 hover:scale-105 hover:bg-white/[0.08] hover:border-white/40 hover:shadow-[0_0_60px_rgba(255,255,255,0.10)] active:scale-95 overflow-hidden"
          >

            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Rotating ring */}
            <div className="absolute inset-[-5px] rounded-full border border-dashed border-white/10 group-hover:rotate-180 transition-transform duration-[2000ms]" />

            {/* Letter icon */}
            <svg
              className="w-8 h-8 sm:w-9 sm:h-9 text-white/70 group-hover:text-white transition-all duration-700 z-10 group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5v10.5H3.75z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 7.5 7.5 6 7.5-6"
              />
            </svg>
          </button>

          {/* BUTTON LABEL */}
          <p className="mt-7 text-[#8f929b] text-[9px] sm:text-[10px] tracking-[0.45em] uppercase font-light">
            {isRevealing ? "Opening..." : "Read the letter"}
          </p>

        </div>

        {/* BOTTOM MICRO TEXT */}
        <p className="mt-16 text-[#555862] text-[8px] sm:text-[9px] tracking-[0.3em] uppercase">
          No pressure · Take your time
        </p>

      </div>

      {/* =========================================
          REVEAL FLASH
      ========================================= */}
      <div
        className={`fixed inset-0 z-50 bg-[#050507] pointer-events-none transition-all duration-[2500ms] ${
          isRevealing
            ? "opacity-100 scale-100"
            : "opacity-0 scale-110"
        }`}
      />
    </div>
  );
}
