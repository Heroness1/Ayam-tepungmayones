import React, { useRef, useState } from "react";
import Amplop from "./Amplop";
import SuratAnnabey from "./SuratAnnabey";

export default function App() {
  const [isAmplopTerbuka, setIsAmplopTerbuka] = useState(false);
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

  return (
    <>
      <audio
        ref={audioRef}
        src="/musikadam.mp3"
        loop
        preload="auto"
      />

      {!isAmplopTerbuka ? (
        <Amplop onBukaSurat={handleBukaSurat} />
      ) : (
        <SuratAnnabey />
      )}
    </>
  );
}
