import React, { useEffect, useState } from "react";

export default function SuratTasya() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const photos = [
    {
      id: 1,
      src: "/adam1.jpg",
      text: "Semua berawal dari topi dan kopi. Setiap malam aku datang saat notifmu muncul. Berbincang tanpa kenal satu sama lain. Tertawa tanpa melihat raut wajah masing-masing. Berbicara dengan text sebagai penghantarnya. Hal yang tak terpikirkan akan sampai di titiknya."
    },
    {
      id: 2,
      src: "/adam2.jpg",
      text: "Mulai memberikan reaksi yang tidak bisa ditebak oleh otak dan dikatakan oleh kata-kata. Mulai memahami kehidupan satu sama lain. Dengan bekerja sama sebagai cover didepanya. Bercerita, berkabar, berbagi rasa, dan mempercayai satu sama lain. Permulaan munculnya tali merah diantara kita."
    },
    {
      id: 3,
      src: "/adam3.jpg",
      text: "Ini kali pertama hati kecil ini berdebar dengan sangatt kencang dan tak terkendali. Disini aku bener\" ngerasa apa ini ciptaan yang kamu berikan ya allah. Menunggu, tak sabar, senang, gembira, dan semua kata kata bahagia yang ga bisa aku sebutin semuanya. Aku bersyukurrr ketemu perempuan yang seperti kamu pada hari itu. Apa lagi di detik detik kedatangan kamu bener-bener makin kenceng tuh jantung rasanya. Dan paling gong nya tuh pas kamu lewat. Didepan pintu alfamart. Aku jep (kaget) dengan jaket berbulu kamu dan kacamata model kamu. Jalan lemes banget kayak orang abis lari 30km hahaha. Intinya disitu aku liat aku langsung lari. Rasanya mau langsung aku peluk. Tapi gabisa karena aku bawa teh anget dan air putih takut kamu butuh. Intinya ketemu kamu pertama kali di gambir, kebahagian aku terbesar dan aku bersyukur banget ketemu anak kecil Satu ini hahaha🥰❣️"
    },
    {
      id: 4,
      src: "/adam4.jpg",
      text: "Disini sedikit mulai ada perubahan between us. Ntah apa yang sebenernya terjadi saat itu. Aku berusaha untuk tidak mengingat apapun itu tapi selalu menghantui dan mendobrak keyakinan untuk tetap yakin. Ga banyak yang mau aku ucapin di perjalanan ketika sampai sini. Karena semua turun disini. Dan hampir hilang sedikit sedikit. Aku semoga lekas membaik kembali semua ini. Kalimat yang bisa ku ucapkan di perjalanan yang sampai ke foto ini \"Terima kasih😊\" Ungkapan ini untuk setelah aku pulang dari jogja dan perjalanan sampai ke foto ini. Aku juga berharap bisa kembali ke masa sebelum itu. Hubungan yang berjalan beberapa bulan terasa seperti sudah beberapa tahun yaa😁. Selamat ulang tahun dan happy terus yaa. Dengan semua pilihan kamu. ❣️"
    }
  ];

  const suratSlides = [
    {
      id: 1,
      content: (
        <>
          <p className="text-[#8c7a7a] text-[10px] sm:text-[11px] tracking-[0.4em] uppercase font-light mb-4 text-center">22 September 2026</p>
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
          <div className="pt-8 pb-4 border-t border-white/10 w-full text-center flex flex-col items-center overflow-hidden">
            <p className="font-medium text-[#e5d5d5] tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-8 opacity-80">
              Hope you always be my great expectation.
            </p>
            
            <div 
              className="w-full relative flex overflow-hidden mb-3"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
              }}
            >
              <div className="flex w-max animate-[tasyaMarquee_10s_linear_infinite]">
                
                {/* Teks "Happy born day" tanpa koma */}
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="flex-shrink-0 px-6 flex flex-col justify-center items-center">
                    <p className="font-serif text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f2e6e6] to-[#b39999] py-1 text-center italic opacity-80">
                      Happy born day
                    </p>
                  </div>
                ))}

              </div>
            </div>

            <p className="font-serif text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f2e6e6] to-[#b39999] py-2 drop-shadow-xl relative z-10">
              Tasya ❣️
            </p>

            <style>{`
              @keyframes tasyaMarquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); } 
              }
            `}</style>
          </div>
        </div>
      )
    },



    {
      id: 8,
      content: (
        <div className="flex flex-col items-center w-full">
          <p className="text-[#8c7a7a] text-[10px] sm:text-[11px] tracking-[0.5em] pl-[0.5em] uppercase font-light mb-8 text-center">
            The Memories
          </p>
          
          <div className="grid grid-cols-2 gap-4 w-full px-2">
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                onClick={() => {
                  setSelectedPhoto(photo);
                  setIsFlipped(false);
                }}
                className="group cursor-pointer relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-white/5"
              >
                <img 
                  src={photo.src} 
                  alt={`Memory ${photo.id}`} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-transparent transition-all duration-500">
                  <span className="text-white/60 text-[10px] tracking-widest uppercase group-hover:opacity-0 transition-opacity">Ketuk</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#a39494] text-[10px] sm:text-[11px] mt-8 tracking-widest font-light opacity-80">
            Buka satu per satu.
          </p>
        </div>
      )
    },
    {
      id: 9,
      content: (
        <div className="flex flex-col items-center justify-center w-full min-h-[300px]">
          <p className="text-[#d1c5c5] text-[14px] sm:text-[15px] font-light leading-relaxed tracking-wide text-center mb-6">
            Setiap cerita memiliki babnya masing-masing.
          </p>
          <p className="text-[#c9baba] text-[14px] sm:text-[15px] font-light leading-relaxed tracking-wide text-center mb-16">
            Aku selalu dukung apapun pilihan kamu.. Aku yakin kamu bisa menentukan yang terbaik buat kamu❣️
          </p>
          
          <button
            onClick={() => setIsLocked(true)}
            className="group relative flex flex-col items-center gap-3 transition-transform duration-500 hover:scale-105"
          >
            <div className="w-16 h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-500">
              <svg className="w-6 h-6 text-[#e5d5d5] group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <span className="text-[#a39494] text-[9px] sm:text-[10px] tracking-[0.3em] uppercase group-hover:text-[#e5d5d5] transition-colors duration-500">
              Kunci Kembali
            </span>
          </button>
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
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev + 1);
        setIsTransitioning(false);
      }, 600); 
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev - 1);
        setIsTransitioning(false);
      }, 600); 
    }
  };

  return (
    <div className={`min-h-[100dvh] flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden font-sans selection:bg-rose-500/30 transition-colors duration-[2000ms] ease-in-out ${isLocked ? 'bg-[#000000]' : 'bg-[#030303]'}`}>
      
      <div className={`fixed top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-[#3a0815] rounded-full mix-blend-screen filter blur-[150px] animate-slow-drift opacity-40 pointer-events-none transition-opacity duration-[2000ms] ${isLocked ? 'opacity-0' : 'opacity-40'}`}></div>
      <div className={`fixed bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-[#5c162e] rounded-full mix-blend-screen filter blur-[150px] animate-slow-drift-reverse opacity-40 pointer-events-none transition-opacity duration-[2000ms] ${isLocked ? 'opacity-0' : 'opacity-40'}`}></div>

      <div className={`w-full max-w-lg flex flex-col items-center transition-all duration-[2000ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isLocked ? 'scale-75 opacity-0 blur-xl pointer-events-none' : 'scale-100 opacity-100 blur-0'}`}>
        
        <div className={`absolute top-0 flex gap-2 z-20 transition-opacity duration-1000 ${isVisible && currentSlide < suratSlides.length - 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {suratSlides.slice(0, 7).map((_, index) => (
            <div 
              key={index} 
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'w-6 bg-white/80' : index < currentSlide ? 'w-2 bg-white/40' : 'w-2 bg-white/10'
              }`}
            />
          ))}
        </div>

        <div 
          className={`relative z-10 w-full min-h-[350px] flex flex-col justify-center bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-[2rem] p-6 sm:p-12 my-8 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className={`transition-all duration-500 ease-in-out flex-grow flex flex-col justify-center ${
            isTransitioning ? "opacity-0 scale-95 filter blur-sm" : "opacity-100 scale-100 filter blur-0"
          }`}>
            {suratSlides[currentSlide].content}
          </div>
        </div>

        <div className={`relative z-20 flex gap-4 h-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {currentSlide > 0 && (
            <button
              onClick={handlePrev}
              disabled={isTransitioning}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-transparent text-[#a39494] text-[10px] tracking-[0.2em] uppercase transition-all duration-500 hover:bg-white/5 hover:border-white/30 hover:text-white"
            >
              <svg className="w-3.5 h-3.5 transition-transform duration-500 group-hover:-translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali
            </button>
          )}

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

      {/* =========================================
          THE FINAL POST-CREDIT SCENE (Tombol Kembali ke Awal)
          ========================================= */}
      <div className={`absolute inset-0 z-50 flex flex-col items-center justify-center p-8 transition-all duration-[3000ms] delay-1000 ${isLocked ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <p className="font-serif text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#e5d5d5] to-[#b39999] tracking-widest text-center mb-16 drop-shadow-lg">
          I Hope from now you can find best way you want. Good luck🫡
        </p>

        {/* Tombol Restart / Balik ke halaman "Tap to Unlock" */}
        <button 
          onClick={() => window.location.reload()}
          className="text-[#594d4d] text-[10px] tracking-[0.4em] uppercase hover:text-[#c9baba] transition-colors duration-700 flex items-center gap-2 border-b border-transparent hover:border-[#c9baba] pb-1 cursor-pointer"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Kembali ke Awal
        </button>
      </div>

      {/* =========================================
          MODAL 3D FLIP CARD
          ========================================= */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-3xl p-4 sm:p-8 animate-in fade-in duration-700">
          <button 
            onClick={() => {
              setSelectedPhoto(null);
              setIsFlipped(false);
            }}
            className="absolute top-6 right-6 p-3 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full z-[110]"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="group relative w-full max-w-md h-[75vh] [perspective:1500px]">
            <div className={`w-full h-full relative transition-all duration-[800ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] [transform-style:preserve-3d] shadow-[0_0_50px_rgba(255,255,255,0.05)] rounded-2xl ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
              <div 
                className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden cursor-pointer bg-[#111] border border-white/10"
                onClick={() => setIsFlipped(true)}
              >
                <img src={selectedPhoto.src} alt="Memory" className="w-full h-full object-contain p-2"/>
                <div className="absolute bottom-6 left-0 w-full flex justify-center animate-pulse">
                  <span className="bg-black/60 backdrop-blur-md px-6 py-2 rounded-full text-white/80 text-[10px] tracking-widest uppercase border border-white/10">Ketuk untuk membalik</span>
                </div>
              </div>
              <div 
                className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#0d0d0d] rounded-2xl border border-white/10 p-6 sm:p-8 overflow-y-auto cursor-pointer custom-scrollbar flex flex-col justify-center"
                onClick={() => setIsFlipped(false)}
              >
                <p className="text-[#e5d5d5] font-light leading-relaxed text-[14px] sm:text-[15px] tracking-wide whitespace-pre-line text-center my-auto">{selectedPhoto.text}</p>
                <div className="mt-8 pt-6 border-t border-white/10 text-center flex-shrink-0">
                  <span className="text-white/40 text-[9px] tracking-[0.3em] uppercase">Ketuk untuk melihat foto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
