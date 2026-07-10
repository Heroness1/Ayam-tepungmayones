import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function ApologyToDiah({ onForgive }) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 font-sans"
      style={{
        backgroundImage: "url('/pixel-moon-bg.jpg')",
        backgroundColor: "#1e1b2e",
      }}
    >
      <div className="w-full max-w-lg rounded-3xl border border-white/20 bg-black/30 backdrop-blur-xl shadow-2xl p-6 md:p-8">

        {!showMessage ? (
          <div className="text-center animate-fade-in">

            <div className="text-6xl mb-6 animate-pulse">
              🌙✨
            </div>

            <h1 className="text-3xl font-bold text-purple-200 mb-4">
              A Letter For Hyacinth
            </h1>

            <p className="text-purple-300 italic text-sm md:text-lg mb-10">
              "Every sincere apology begins with the courage to admit our mistakes."
            </p>

            <button
              onClick={() => setShowMessage(true)}
              className="rounded-full bg-purple-500 hover:bg-purple-600 px-8 py-3 text-white text-lg shadow-lg transition duration-300"
            >
              💌 Read the Letter
            </button>

          </div>
        ) : (
          <div className="animate-fade-in">

            <h1 className="text-center text-3xl md:text-4xl font-bold text-purple-200 mb-4">
              ✨ To Hyacinth ✨
            </h1>

            <p className="text-center italic text-sm md:text-lg text-purple-300 mb-8">
              "Sorry isn't just a word, it's a wish to heal."
            </p>

            <TypeAnimation
              sequence={[
`Hi Hyacinth,

สวัสดี... ไฮยาซินธ์

ฉันรู้ว่าที่ผ่านมา
ฉันไม่ได้ปฏิบัติกับคุณอย่างที่คนใจดีแบบคุณสมควรได้รับ

โดยไม่รู้ตัว
ฉันทำให้คุณเจ็บปวด
ด้วยความดื้อรั้น คำพูดที่รุนแรง
และการกระทำที่ควรทำให้คุณสบายใจ
แต่กลับกลายเป็นทำร้ายคุณ

ฉันอยากให้คุณรู้ว่า...

ฉันเสียใจจริง ๆ

ตอนนี้ฉันกำลังพยายามเปลี่ยนตัวเอง
พยายามเป็นคนที่ดีกว่าเมื่อวาน

ถ้าในหัวใจของคุณ
ยังเหลือพื้นที่เล็ก ๆ สำหรับฉัน...

ขอให้ฉันได้ค่อย ๆ แก้ไขทุกอย่าง
ทีละนิดก็ยังดี

คำขอโทษนี้
ออกมาจากก้นบึ้งของหัวใจฉันจริง ๆ

ถ้าคุณพร้อม...

กด "Forgive Me"
เพื่อดูสิ่งที่ฉันตั้งใจเตรียมไว้ให้คุณ ❤️`,
                1000,
              ]}
              wrapper="div"
              speed={50}
              repeat={0}
              className="mx-auto max-w-md whitespace-pre-line text-[15px] md:text-lg leading-8 text-purple-100 text-left"
            />

            <div className="mt-10 flex justify-center">
              <button
                onClick={onForgive}
                className="rounded-full bg-pink-500 hover:bg-pink-600 px-8 py-3 text-white text-lg shadow-lg transition duration-300"
              >
                💜 Forgive Me
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
