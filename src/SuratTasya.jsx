import React, { useEffect, useState } from "react";

export default function SuratTasya() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Pecah surat menjadi beberapa bagian (slide) agar tidak terlalu panjang
  const suratSlides = [
    {
      id: 1,
      content: (
        <>
          <p className="text-[#8c7a7a] text-[10px] sm:text-[11px] tracking-[0.4em] uppercase font-light mb-4 text-center">
            22 September 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#f2e6e6] to-[#b39999] tracking-wide text-center mb-8 py-2 drop-shadow-lg">
            Selamat Ulang Tahun.
          </h1>
          <p className="text-[#d1c5c5] text-[15px] sm:text-[16px] font-light leading-relaxed tracking-wide text-center">
            Selamat hari kelahiran Tasya Septiani. <br/><br/> Hari ini kamu sudah kepala 2 ternyata. 🎉
          </p>
        </>
      )
    },
    {
      id: 2,
      content: (
        <>
          <p className="text-[#d1c5c5] text-[15px] sm:text-[16px] font-light leading-relaxed tracking-wide text-center">
            Di ulang tahun ini.. Aku hanya bisa berdoa yang terbaik untuk kamu.<br/><br/>
            Aku berdoa di peningkatan umur kamu kali ini, kamu bisa memperbaiki semua yang ingin kamu perbaiki.
          </p>
          <p className="text-[#c9baba] text-[14px] sm:text-[15px] font-light leading-relaxed tracking-wide text-center mt-6">
            Menggapai apa yang ingin kamu capai, mendapatkan apa yang kamu inginkan, menemukan tempat yang bisa membawa kamu ke dalam ketenanganmu, dan mendapatkan kesenangan yang belum pernah kamu dapatkan sebelumnya.
          </p>
        </>
      )
    },
    {
      id: 3,
      content: (
        <>
          <p className="text-[#d1c5c5] text-[15px] sm:text-[16px] font-light leading-relaxed tracking-wide text-center">
            Aku juga berdoa kamu bisa bekerja dengan kesenangan yang kamu inginkan. Bertemu teman yang benar peduli denganmu apa adanya.
          </p>
          <p className="text-[#e5d5d5] text-[15px] sm:text-[16px] font-medium leading-relaxed tracking-wide text-center mt-6">
            Dan mendapatkan seseorang yang lebih baik lagi kedepannya <br/>
            <span className="text-[#a39494] text-sm">(jika memang aku itu orangnya).</span>
          </p>
        </>
      )
    },
    {
      id: 4,
      content: (
        <>
          <p className="text-[#d1c5c5] text-[15px] sm:text-[16px] font-light leading-relaxed tracking-wide text-center">
            Jujur, sebelumnya memang aku ada rencana datang ke tempatmu untuk membuat sebuah kejutan. Semua terurungkan, sejak aku pernah pergi kesana.. 
          </p>
          <p className="text-[#e5d5d5] text-[16px] sm:text-[17px] font-serif italic leading-relaxed tracking-wide text-center mt-6">
            Tapi yeahh, all good until now. Don't mind it.
          </p>
          <p className="text-[#c9baba] text-[14px] sm:text-[15px] font-light leading-relaxed tracking-wide text-center mt-6">
            Aku yakin disana pasti akan ada yang memberikan kamu kejutan yang lebih spesial. Aku juga yakin harimu akan lebih terasa spesial dengan kegiatan yang akan kamu jalani nanti.
          </p>
        </>
      )
    },
    {
      id: 5,
      content: (
        <>
          <p className="text-[#d1c5c5] text-[15px] sm:text-[16px] font-light leading-relaxed tracking-wide text-center">
            Mungkin aku belum bisa menjadikan kamu seorang <span className="italic text-[#e5d5d5]">princess or treat you like a queen</span> 👸🏼.<br/> Terlalu banyak kekurangan yang aku punya.
          </p>
          <p className="text-[#d1c5c5] text-[15px] sm:text-[16px] font-light leading-relaxed tracking-wide text-center mt-6">
            Tapi, aku sangat berterima kasih kamu sudah mengisi kekosongan dan mewarnai hidupku ini (dan aku tetap berharap akan terus seperti itu).
          </p>
        </>
      )
    },
    {
      id: 6,
      content: (
        <>
          <p className="text-[#e5d5d5] text-[18px] sm:text-[20px] font-serif italic leading-relaxed tracking-wide text-center">
            "But, we look later, we can be together or we can't. I pray to God to make you always be beside me. All time big hope. Day by day."
          </p>
        </>
      )
    },
    {
      id: 7,
      content: (
        <div className="flex flex-col items-center">
          <p className="text-[#d1c5c5] text-[14px] sm:text-[15px] font-light leading-relaxed tracking-wide text-center mb-10">
            Hmm.. Cuma ini yang bisa aku ucapkan. Aku belum bisa memberikan apapun ke kamu di hari spesial kamu kali ini.
          </p>
          <div className="pt-8 pb-4 border-t border-white/10 w-full text-center flex flex-col items-center">
            <p className="font-medium text-[#e5d5d5] tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-6 opacity-80">
              Hope you always be my great expectation.
            </p>
            <p className="font-serif text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f2e6e6] to-[#b39999] py-2">
              Happy born day,<br/>Tasya ❣️
            </p>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  const handleNext = () => {
    if (currentSlide < suratSlides.length - 1) {
      // Memicu animasi keluar
      setIsTransitioning(true);
      
      // Tunggu animasi keluar selesai, ganti konten, lalu picu animasi masuk
      setTimeout(() => {
        setCurrentSlide(prev => prev + 1);
        setIsTransitioning(false);
      }, 600); // Durasi ini harus sinkron dengan durasi transisi CSS
    }
  };

  return (
    <div className="min-h-[100dvh] bg-[#030303] flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden font-sans selection:bg-rose-500/30">
      
      {/* AURA MEWAH */}
      <div className="fixed top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-[#3a0815] rounded-full mix-blend-screen filter blur-[150px] animate-slow-drift opacity-40 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-[#5c162e] rounded-full mix-blend-screen filter blur-[150px] animate-slow-drift-reverse opacity-40 pointer-events-none"></div>

      {/* PROGRESS INDICATOR (Titik-titik di atas) */}
      <div className={`absolute top-10 flex gap-2 z-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {suratSlides.map((_, index) => (
          <div 
            key={index} 
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'w-6 bg-white/80' 
                : index < currentSlide 
                  ? 'w-2 bg-white/40' 
                  : 'w-2 bg-white/10'
            }`}
          />
        ))}
      </div>

      {/* CONTAINER KACA UTAMA */}
      <div 
        className={`relative z-10 w-full max-w-lg min-h-[350px] flex flex-col justify-center bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-[2rem] p-8 sm:p-12 my-8 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        
        {/* KONTEN SLIDE DENGAN ANIMASI FADE & SCALE */}
        <div className={`transition-all duration-500 ease-in-out flex-grow flex flex-col justify-center ${
          isTransitioning ? "opacity-0 scale-95 filter blur-sm" : "opacity-100 scale-100 filter blur-0"
        }`}>
          {suratSlides[currentSlide].content}
        </div>

      </div>

      {/* TOMBOL LANJUT (Hanya muncul jika belum slide terakhir) */}
      <div className={`relative z-20 h-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {currentSlide < suratSlides.length - 1 && (
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="group flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[#d1c5c5] text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:bg-white/10 hover:border-white/40 hover:text-white"
          >
            Lanjutkan
            <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        )}
      </div>

    </div>
  );
}
