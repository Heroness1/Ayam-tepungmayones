import { useState } from "react";
import Surat from "./components/Surat";
import HalamanBalasan from "./components/HalamanBalasan";

export default function App() {

  const [isSelesaiBaca, setIsSelesaiBaca] = useState(false);

  return (
    <>
      {!isSelesaiBaca ? (
        // Menampilkan komponen Surat yang sudah kita buat sebelumnya
        // Props onSelesai dikirim agar bisa dipanggil dari dalam Surat.jsx
        <Surat onSelesai={() => setIsSelesaiBaca(true)} />
      ) : (
        // Menampilkan halaman baru setelah surat selesai dibaca
        <HalamanBalasan />
      )}
    </>
  );
}
