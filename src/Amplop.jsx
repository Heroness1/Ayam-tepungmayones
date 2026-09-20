import React, { useState } from "react";
import "./Amplop.css";

export default function Amplop({ onBukaSurat }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleBuka = () => {
    if (isOpen) return; 
    setIsOpen(true);
    
    // Delay ditambah jadi 2.5 detik agar Tasya bisa melihat 
    // efek stempel pecah dan hujan love sebelum pindah halaman
    setTimeout(() => {
      onBukaSurat();
    }, 2500); 
  };

  // Membuat array 30 item untuk memunculkan 30 emoji love secara acak
  const hearts = Array.from({ length: 30 });

  return (
    <div className="night-background min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden relative">
      
      {/* Container Hujan Love (Hanya muncul kalau amplop diklik) */}
      {isOpen && (
        <div className="hearts-container">
          {hearts.map((_, i) => (
            <div 
              key={i} 
              className="heart" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${1.5 + Math.random()}s`
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}

      {/* Bagian Amplop */}
      <div 
        className={`envelope-wrapper ${isOpen ? "is-open" : ""}`} 
        onClick={handleBuka}
      >
        <div className="envelope">
          {/* Kertas Surat */}
          <div className="letter">
            <p className="text-gray-800 font-serif font-bold text-xl text-center">
              Untuk:<br />Tasya Septiani ❣️
            </p>
          </div>
          
          {/* Saku Bawah */}
          <div className="pocket"></div>
          
          {/* Tutup Amplop Atas & Stempel Lilin */}
          <div className="flap">
            <div className="wax-seal">
              <span className="wax-text">T</span>
            </div>
          </div>
        </div>
      </div>

      <p className={`mt-16 text-pink-200 font-medium tracking-widest transition-all duration-300 ${isOpen ? 'animate-pulse opacity-50' : 'animate-bounce'}`}>
        {isOpen ? "Membuka keajaiban..." : "Ketuk surat rahasia ini"}
      </p>

    </div>
  );
}
