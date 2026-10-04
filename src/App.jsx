import React, { useRef, useState } from "react";
import Amplop from "./Amplop";
import SuratAnnabey from "./SuratAnnabey";
import gameUrl from "./annabey-run.html?url";

export default function App() {
  const [isAmplopTerbuka, setIsAmplopTerbuka] = useState(false);
  const [showGame, setShowGame] = useState(false);

  const audioRef = useRef(null);

  const handleBukaSurat = () => {
    setIsAmplopTerbuka(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.5;

      audioRef.current.play().catch((err) => {
        console.log("Audio autoplay dicegah browser:", err);
      });
    }
  };

  const handleBukaGame = () => {
    setShowGame(true);
  };

  const handleKembaliDariGame = () => {
    setShowGame(false);
  };

  return (
    <div className="min-h-[100dvh] bg-black">
      
      {/* MUSIC */}
      <audio
        ref={audioRef}
        src="/musikadam.mp3"
        loop
        preload="auto"
      />

      {/* =========================
          AMPOP
      ========================= */}
      {!isAmplopTerbuka && (
        <Amplop onBukaSurat={handleBukaSurat} />
      )}

      {/* =========================
          SURAT ANNABEY
      ========================= */}
      {isAmplopTerbuka && !showGame && (
        <SuratAnnabey onOpenGame={handleBukaGame} />
      )}

      {/* =========================
          ANNABEY RUN
      ========================= */}
      {showGame && (
        <div className="fixed inset-0 z-[9999] bg-black">
          
          {/* GAME */}
          <iframe
            src={gameUrl}
            title="Annabey Run"
            className="w-full h-full border-0"
            allow="autoplay"
          />

          {/* BACK BUTTON */}
          <button
            onClick={handleKembaliDariGame}
            className="
              fixed
              top-5
              left-5
              z-[10000]
              w-11
              h-11
              rounded-full
              border
              border-white/10
              bg-black/50
              backdrop-blur-xl
              text-white/70
              hover:text-white
              hover:bg-white/10
              transition-all
            "
            aria-label="Kembali"
          >
            ←
          </button>

        </div>
      )}
    </div>
  );
}
