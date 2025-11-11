import ImageofMe from "../assets/home/IMG_6984.jpg";
import Github from "../assets/home/github-mark-white.png";
import Linkedin from "../assets/home/InBug-White.png";

import Connections from "../components/home/Connections";

export default function Home() {
  return (
    <main className="h-fit min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1b0f1d] text-[#eaeaea]">
      <div className="pt-6 pb-4 font-medium text-center">
        <p
          className="text-4xl md:text-5xl font-black text-[#b30059] mb-2"
          style={{ textShadow: "2px 2px 8px rgba(179, 0, 89, 0.7)" }}
        >
          ✦Welcome to my website ✦
        </p>
        <p className="font-light text-[#c0b283] text-base italic">
          Enjoy your stay...
        </p>
      </div>

      <div className="flex items-start pt-4 flex-col md:flex-row justify-center gap-4 px-4">
        <div className="border-2 px-8 md:px-12 py-6 flex rounded-md flex-col border-[#5e5bff] bg-gradient-to-b from-[#1a0520] to-[#0a0a0a] shadow-[0_0_25px_rgba(94,91,255,0.3)]">
          <div className="mb-3">
            <img
              src={ImageofMe}
              className="w-64 rounded-sm border-2 border-[#b30059] shadow-[0_0_15px_rgba(179,0,89,0.6)]"
              alt="Luna"
            />
          </div>

          <div
            className="text-center font-bold text-3xl text-[#c0b283] mb-1"
            style={{
              textShadow: "1px 1px 4px #000, -1px -1px 2px #5e5bff",
            }}
          >
            ✦ Luna ✦
          </div>

          <div className="text-center text-[#9c0b3b] font-semibold text-sm mb-1 animate-pulse">
            “Learning by candlelight…”
          </div>

          <div className="text-center text-[#c0b283] text-xs mb-3">
            ✧ Online ✧
          </div>

          <div className="flex items-center text-center justify-center gap-6 pt-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Lunadrite"
              className="hover:brightness-125 transition-all"
            >
              <img
                src={Github}
                className="w-[32px] drop-shadow-[0_0_8px_rgba(94,91,255,0.7)]"
                alt="GitHub"
              />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/luna-tattersall-87a908369/"
              className="hover:brightness-125 transition-all"
            >
              <img
                src={Linkedin}
                className="w-[32px] drop-shadow-[0_0_8px_rgba(94,91,255,0.7)]"
                alt="LinkedIn"
              />
            </a>
          </div>

          <div className="mt-4 pt-3 border-t border-dashed border-[#5e5bff]">
            <div className="text-xs text-center text-[#b30059] font-semibold mb-1">
              ── Stats ──
            </div>
            <div className="text-[10px] text-[#eaeaea] space-y-0.5">
              <div>♥ Mood: Haunted</div>
              <div>♪ Listening to: Violent Vira</div>
              <div>★ Status: Craving Diet Coke</div>
            </div>
          </div>
        </div>

        <div className="2xl:px-4 w-full 2xl:w-fit">
          <Connections />
        </div>
      </div>
    </main>
  );
}
