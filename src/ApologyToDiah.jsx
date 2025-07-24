import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function ApologyToDiah({ onForgive }) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6 text-gray-800 font-sans"
    >
      <div className="backdrop-blur-sm bg-white/70 w-full max-w-2xl p-8 rounded-2xl shadow-xl">
        {!showMessage ? (
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-extrabold text-green-700 mb-4">
            
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A message from someone who's deeply regretful.
            </p>
            <button
              onClick={() => setShowMessage(true)}
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 text-lg shadow-lg transition-all duration-300"
            >
              Read the Letter
            </button>
          </div>
        ) : (
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">🌿 To Diah Kumala</h1>
            <p className="italic text-lg text-gray-500 mb-8">
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
This apology comes from the deepest part of me.`,
              ]}
              wrapper="span"
              speed={40}
              className="whitespace-pre-line text-lg leading-relaxed text-gray-700"
              repeat={0}
            />

            <div className="mt-12 flex justify-center">
              <button
                onClick={onForgive}
                className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-2 text-lg transition"
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
