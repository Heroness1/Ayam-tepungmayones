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
    <div className="min-h-[100dvh] bg-[#030303] flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-rose-500/30">
      
      {/* AURA MEWAH */}
      <div className={`absolute inset-0 transition-opacity duration-[2000ms] ${isRevealing ? 'opacity-0' : 'opacity-100'}`}>
         <div className="absolute top-[-20%] left-[-10%] w-[75vw] h-[75vw] bg-[#3a0815] rounded-full mix-blend-screen filter blur-[120px] sm:blur-[150px] animate-slow-drift"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[65vw] h-[65vw] bg-[#5c162e] rounded-full mix-blend-screen filter blur-[140px] sm:blur-[180px] animate-slow-drift-reverse"></div>
      </div>

      {/* KONTEN UTAMA */}
      <div className={`relative z-10 flex flex-col items-center justify-center w-full transition-all duration-[2000ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
        isRevealing ? "opacity-0 scale-125 blur-2xl" : "opacity-100 scale-100 blur-0"
      }`}>
        
        <p className="text-[#c9baba] text-[11px] sm:text-xs tracking-[0.6em] pl-[0.6em] uppercase font-light mb-5 opacity-90 drop-shadow-md text-center">
          Happy Birthday
        </p>

        <h1 className="text-5xl sm:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#f2e6e6] to-[#b39999] tracking-wide text-center mb-10 px-4 py-4 leading-relaxed drop-shadow-lg">
          Tasya Septiani.
        </h1>

        {/* CONTAINER TOMBOL & TEKS */}
        <div className="flex flex-col items-center justify-center w-full">
          <button
            onClick={handleReveal}
            className="group relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/30 bg-white/10 backdrop-blur-xl shadow-[0_0_25px_rgba(255,255,255,0.05)] transition-all duration-700 hover:scale-105 hover:bg-white/20 hover:border-white/50 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] overflow-hidden cursor-pointer active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#b76e79]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
            
            <svg className="w-9 h-9 sm:w-11 sm:h-11 text-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] group-hover:text-white transition-all duration-700 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </button>
          
          {/* PERBAIKAN: Jarak diturunkan jadi mt-8, ditambah pl-[0.4em] untuk penyeimbang tracking, dan text-center */}
          <p className="mt-8 text-[#e5d5d5] text-[10px] sm:text-[11px] tracking-[0.4em] pl-[0.4em] text-center uppercase font-medium drop-shadow-md transition-colors duration-500">
            {isRevealing ? "Unlocking..." : "Tap to Unlock"}
          </p>
        </div>
        
      </div>
    </div>
  );
}
