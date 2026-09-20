import React, { useState } from "react";
import "./Amplop.css"; // Kita pakai CSS khusus untuk efek 3D amplop

export default function Amplop({ onBukaSurat }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleBuka = () => {
    // Mencegah double-click
    if (isOpen) return; 

    setIsOpen(true);
    
    // Set delay 1.5 detik untuk memutar animasi amplop terbuka, 
    // setelah itu baru pindah ke halaman isi surat.
    setTimeout(() => {
      onBukaSurat();
    }, 1500); 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans">
      
      <div 
        className={`envelope-wrapper ${isOpen ? "is-open" : ""}`} 
        onClick={handleBuka}
      >
        <div className="envelope">
          {/* Kertas Surat di dalam amplop */}
          <div className="letter">
            <p className="text-gray-800 font-semibold text-lg text-center">
              Untuk:<br />Tasya Septiani ❣️
            </p>
          </div>
          
          {/* Bagian depan amplop (Kiri, Kanan, Bawah) */}
          <div className="pocket"></div>
          
          {/* Tutup amplop atas */}
          <div className="flap"></div>
        </div>
      </div>

      <p className={`mt-16 text-gray-500 font-medium tracking-wide transition-opacity duration-300 ${isOpen ? 'animate-pulse' : ''}`}>
        {isOpen ? "Membuka surat..." : "Ketuk amplop untuk membuka"}
      </p>

    </div>
  );
}
