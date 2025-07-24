import { TypeAnimation } from "react-type-animation";

export default function ForgivePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6 font-sans"
      style={{
        backgroundImage: "url('/pixel-moon-bg.jpg')",
        backgroundColor: "#1e1b2e", // fallback warna malam
      }}
    >
      <div className="backdrop-blur-md bg-white/10 border border-white/20 w-full max-w-2xl p-8 rounded-2xl shadow-2xl text-center animate-fade-in">
        <h1 className="text-4xl font-bold text-purple-200 mb-4 drop-shadow">
          💜 Thank You, Diah
        </h1>

        <p className="italic text-lg text-purple-300 mb-6">
          "Forgiveness is the softest light in the darkest sky."
        </p>

        <TypeAnimation
          sequence={[
            `Diah,\n
You didn’t have to forgive me, but you did.\n
That act alone… speaks volumes about your heart.\n
I feel unworthy, but grateful. Deeply.\n
This second chance means the world to me.\n
I'll be more patient, more present, more gentle.\n
You're not someone I just want to win back...\n
You're someone I want to grow alongside.\n
Thank you, for seeing the good in me, even when I couldn't.\n
💫 From the bottom of my heart, Angga.`,
          ]}
          wrapper="span"
          speed={40}
          className="whitespace-pre-line text-lg leading-relaxed text-purple-100"
          repeat={0}
        />

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="/images/pixel-moon-art.png"
            download="pixel-moon-art.png"
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full text-lg shadow-md transition hover:scale-105 duration-300"
          >
            🌙 Download Hadiah 1
          </a>

          <a
            href="/images/dear-diah-art.png"
            download="dear-diah-art.png"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-lg shadow-md transition hover:scale-105 duration-300"
          >
            💌 Download Hadiah 2
          </a>
        </div>
      </div>
    </div>
  );
}
