import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function ApologyToDiah({ onForgive }) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6 font-sans"
      style={{
        backgroundImage: "url('/pixel-moon-bg.jpg')",
        backgroundColor: "#1e1b2e",
      }}
    >
      <div className="backdrop-blur-md bg-white/10 border border-white/20 w-full max-w-2xl p-8 rounded-2xl shadow-2xl">
        {!showMessage ? (
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-extrabold text-purple-200 drop-shadow mb-4">
              💫 Dear Diah
            </h1>
            <p className="text-xl text-purple-300 mb-8 italic">
              A message from someone who's deeply regretful.
            </p>
            <button
              onClick={() => setShowMessage(true)}
              className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-8 py-3 text-lg shadow-lg transition-all duration-300"
            >
              Read the Letter
            </button>
          </div>
        ) : (
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow">
              🌙 To Diah Kumala
            </h1>
            <p className="italic text-lg text-purple-200 mb-8">
              "Sorry isn't just a word, it's a wish to heal."
            </p>

            <TypeAnimation
              sequence={[
                `Hi Diah,\n
I know I haven’t been fair to someone who gave me warmth and attention.\n
Without realizing it, I’ve hurt you with my arrogance, harsh words, and presence that brought pain instead of comfort.\n
I want you to know… I’m truly sorry.\n
Aku minta maaf aku suka marah-marah dan kasar 😭\n
I’m trying to grow, to become a better version of myself.\n
But today, more than anything, I just want to say: I'm sorry.\n
I miss your sweet and warm self 😔\n
If there’s still space in your heart… please let me try to make things right, even if slowly.\n
This apology comes from the deepest part of me.\n
Tekan Forgive me untuk hadiah menarik.`,
              ]}
              wrapper="span"
              speed={40}
              className="whitespace-pre-line text-lg leading-relaxed text-purple-100 glow-text"
              repeat={0}
            />

            <div className="mt-12 flex justify-center">
              <button
                onClick={onForgive}
                className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-6 py-2 text-lg transition"
              >
                Forgive Me
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
