import React, { useState } from "react";
import Amplop from "./Amplop"; // Komponen Landing Page Amplop
import SuratTasya from "./SuratTasya"; // Ini halaman isi surat yg template putih tadi
// import ForgivePage from "./ForgivePage"; // Atau pakai nama komponen yang kamu mau

export default function App() {
  const [isAmplopTerbuka, setIsAmplopTerbuka] = useState(false);

  return (
    <>
      {!isAmplopTerbuka ? (
        // Tampilkan landing page amplop
        <Amplop onBukaSurat={() => setIsAmplopTerbuka(true)} />
      ) : (
        // Jika amplop sudah diklik dan animasi selesai, tampilkan isi suratnya
        <SuratTasya /> 
      )}
    </>
  );
}
