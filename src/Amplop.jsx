import React, { useState } from "react";
import "./Amplop.css";

export default function Amplop({ onBukaSurat }) {
  const [isRevealing, setIsRevealing] = useState(false);

  const handleReveal = () => {
    setIsRevealing(true);
    
    // Transisi 2.5 detik full cinematic (Zoom, Blur, Fade)
    setTimeout(() => {
      onBukaSurat();
    }, 2500);
  };

  return (
    // Background Obsidian Black murni
    <div className="min-h-screen bg-[#030303] flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-rose-500/30">
      
      {/* 
        AURA MEWAH: Gradasi Rose Gold & Burgundy yang sangat berat untuk dirender GPU, 
        tapi terlihat sangat mahal dan sensual di layar OLED.
      */}
      <div className={`absolute inset-0 transition-opacity duration-[2000ms] ${isRevealing ? 'opacity-0' : 'opacity-100'}`}>
         <div className="absolute top-[-20%] left-[-10%] w-[75vw] h-[75vw] bg-[#3a0815] rounded-full mix-blend-screen filter blur-[120px] sm:blur-[150px] animate-slow-drift"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[65vw] h-[65vw] bg-[#5c162e] rounded-full mix-blend-screen filter blur-[140px] sm:blur-[180px] animate-slow-drift-reverse"></div>
      </div>

      {/* KONTEN UTAMA */}
      <div className={`relative z-10 flex flex-col items-center justify-center w-full h-full transition-all duration-[2000ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
        isRevealing ? "opacity-0 scale-125 blur-2xl" : "opacity-100 scale-100 blur-0"
      }`}>
        
        {/* Subtitle Minimalis */}
        <p className="text-[#8c7a7a] text-[10px] sm:text-xs tracking-[0.6em] uppercase font-light mb-8 opacity-80">
          A Private Reflection
        </p>

        {/* Nama dengan Font Serif Elegan & Gradasi Titanium/Rose Gold */}
        <h1 className="text-5xl sm:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#f2e6e6] to-[#b39999] tracking-wide text-center mb-16 px-4">
          Tasya Septiani.
        </h1>

        {/* Tombol Unlock / Fingerprint Mewah */}
        <div className="flex flex-col items-center">
          <button
            onClick={handleReveal}
            className="group relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[0.5px] border-white/20 bg-white/5 backdrop-blur-3xl shadow-[0_0_50px_rgba(255,255,255,0.03)] transition-all duration-700 hover:scale-105 hover:bg-white/10 hover:border-white/40 overflow-hidden cursor-pointer active:scale-95"
          >
            {/* Inner glow saat di-hover/ditekan */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#b76e79]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
            
            {/* Icon Fingerprint tipis & elegan */}
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white/60 group-hover:text-white transition-colors duration-700 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </button>
          
          <p className="mt-6 text-[#594d4d] text-[9px] sm:text-[10px] tracking-[0.4em] uppercase font-light transition-colors duration-500">
            {isRevealing ? "Unlocking..." : "Tap to Unlock"}
          </p>
        </div>
        
      </div>
    </div>
  );
}
