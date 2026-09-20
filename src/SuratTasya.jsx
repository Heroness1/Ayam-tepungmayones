import React, { useEffect, useState } from "react";

export default function SuratTasya() {
  const [isVisible, setIsVisible] = useState(false);

  // Efek fade-in halus saat halaman surat pertama kali dimuat
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    // Background sama dengan halaman amplop agar transisinya seamless
    <div className="min-h-[100dvh] bg-[#030303] flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden font-sans selection:bg-rose-500/30">
      
      {/* AURA MEWAH (Lebih redup dari halaman depan agar fokus ke tulisan) */}
      <div className="fixed top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-[#3a0815] rounded-full mix-blend-screen filter blur-[150px] animate-slow-drift opacity-40 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-[#5c162e] rounded-full mix-blend-screen filter blur-[150px] animate-slow-drift-reverse opacity-40 pointer-events-none"></div>

      {/* CONTAINER SURAT GLASSMORPHISM */}
      <div 
        className={`relative z-10 w-full max-w-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-3xl p-8 sm:p-12 my-8 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        
        {/* HEADER */}
        <p className="text-[#8c7a7a] text-[10px] sm:text-[11px] tracking-[0.4em] uppercase font-light mb-4 text-center">
          21 September 2026
        </p>
        
        <h1 className="text-3xl sm:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#f2e6e6] to-[#b39999] tracking-wide text-center mb-12 py-2 drop-shadow-lg">
          Selamat Ulang Tahun.
        </h1>

        {/* ISI SURAT */}
        <div className="space-y-6 text-[#d1c5c5] text-[14px] sm:text-[15px] font-light leading-relaxed tracking-wide">
          <p>
            Selamat hari kelahiran Tasya Septiani. Hari ini kamu sudah kepala 2 ternyata. 🎉
          </p>

          <p>
            Di ulang tahun ini.. Aku hanya bisa berdoa yang terbaik untuk kamu. Aku berdoa di peningkatan umur kamu kali ini, kamu bisa memperbaiki semua yang ingin kamu perbaiki. Menggapai apa yang ingin kamu capai, mendapatkan apa yang kamu inginkan, menemukan tempat yang bisa membawa kamu ke dalam ketenanganmu, dan mendapatkan kesenangan yang belum pernah kamu dapatkan sebelumnya.
          </p>

          <p>
            Aku juga berdoa kamu bisa bekerja dengan kesenangan yang kamu inginkan. Bertemu teman yang benar peduli denganmu apa adanya. Mendapatkan seseorang yang lebih baik lagi kedepannya (jika memang aku itu orangnya).
          </p>

          <p>
            Jujur, sebelumnya memang aku ada rencana datang ke tempatmu untuk membuat sebuah kejutan. Semua terurungkan, sejak aku pernah pergi kesana.. Tapi <span className="italic text-[#e5d5d5]">yeahh, all good until now. Don't mind it.</span>
          </p>

          <p>
            Aku yakin disana pasti akan ada yang memberikan kamu kejutan yang lebih spesial di hari spesialmu kali ini. Aku juga yakin harimu akan lebih terasa spesial dengan kegiatan yang akan kamu jalani nanti.
          </p>

          <p>
            Mungkin aku belum bisa menjadikan kamu seorang <span className="italic text-[#e5d5d5]">princess or treat you like a queen</span> 👸🏼. Aku sangat yakin akan ada yang melakukannya disana untukmu. Terlalu banyak kekurangan yang aku punya. Tapi, aku sangat berterima kasih kamu sudah mengisi kekosongan dan mewarnai hidupku ini (dan aku tetap berharap akan terus seperti itu).
          </p>

          <p className="font-serif italic text-lg text-[#e5d5d5] pt-2">
            But, we look later, we can be together or we can't. I pray to God to make you always be beside me. All time big hope. Day by day.
          </p>

          <p>
            Hmm.. Cuma ini yang bisa aku ucapkan. Aku belum bisa memberikan apapun ke kamu di hari spesial kamu kali ini.
          </p>

          <div className="pt-8 pb-4 border-t border-white/10 mt-8 text-center flex flex-col items-center">
            <p className="font-medium text-[#e5d5d5] tracking-widest text-xs uppercase mb-4">
              Hope you always be my great expectation.
            </p>
            
            <p className="font-serif text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#e5d5d5] to-[#b39999]">
              Happy born day, Tasya ❣️
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
