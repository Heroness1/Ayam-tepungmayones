import React, { useState, useRef } from "react";
import Amplop from "./Amplop"; 
import SuratTasya from "./SuratTasya"; 

export default function App() {
  const [isAmplopTerbuka, setIsAmplopTerbuka] = useState(false);
  
  // 1. Buat referensi untuk elemen audio
  const audioRef = useRef(null);

  // 2. Fungsi yang dijalankan saat Amplop diklik (Tap to Unlock)
  const handleBukaSurat = () => {
    setIsUnlocked(true); // Ganti state untuk pindah halaman
    
    // 3. Jalankan musik saat itu juga
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Atur volume (0.5 = 50%). Silakan ubah kalau terlalu pelan/keras
      audioRef.current.play().catch((err) => {
        console.log("Audio autoplay dicegah oleh browser: ", err);
      });
    }
  };

  // Helper untuk memperbaiki penamaan state di function di atas
  const setIsUnlocked = (value) => setIsAmplopTerbuka(value);

  return (
    <>
      {/* 4. Sisipkan elemen audio tersembunyi di sini */}
      <audio 
        ref={audioRef} 
        src="/musikadam.mp3" 
        loop 
        preload="auto"
      />

      {!isAmplopTerbuka ? (
        // Gunakan fungsi handleBukaSurat yang baru kita buat
        <Amplop onBukaSurat={handleBukaSurat} />
      ) : (
        <SuratTasya /> 
      )}
    </>
  );
}
