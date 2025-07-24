import { TypeAnimation } from "react-type-animation";

export default function ForgivePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-6 text-gray-800 font-sans">
      <div className="text-center max-w-2xl animate-fade-in">
        <h1 className="text-4xl font-bold text-green-700 mb-4">🌧️ Thank You, Diah</h1>
        <p className="italic text-lg text-gray-600 mb-6">
          "Forgiveness is the fragrance that the flower leaves on the heel that crushed it."
        </p>

        <TypeAnimation
          sequence={[
            `Thank you for giving me another chance.\n
Your heart is much more beautiful than I deserve.\n
I'll do my best not to fail you again.\n
You're not just someone I miss...\n
You're someone I want to protect and grow with.\n
Even if it takes time, I want to be better for you, for us.\n
Thank you, Diah. From the bottom of my heart 💚`,
          ]}
          wrapper="span"
          speed={40}
          className="whitespace-pre-line text-lg leading-relaxed text-gray-700"
          repeat={0}
        />
      </div>
    </div>
  );
}
