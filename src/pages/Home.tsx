import ImageofMe from "../assets/home/IMG_6984.jpg";
import Github from "../assets/home/github-mark-white.png";
import Linkedin from "../assets/home/InBug-White.png";

import Connections from "../components/home/Connections";

export default function Home() {
  return (
    <main className="h-fit min-h-screen">
      <div className="pt-6 pb-4 font-medium text-center">
        <p className="text-4xl md:text-5xl font-bold text-[#00d4ff] mb-2" style={{textShadow: '2px 2px 4px rgba(0, 212, 255, 0.5)'}}>
          Hai, Welcome to my website!
        </p>
        <p className="font-normal text-[#ffff00] text-base">
          ★ This is a silly connection page just go check me out silly!★
        </p>
      </div>
      
      <div className="flex items-start pt-4 flex-col md:flex-row justify-center gap-4 px-4">
        <div className="border-4 px-8 md:px-12 py-6 flex rounded-sm flex-col border-[#ff69b4] bg-gradient-to-b from-[#4a0e4e] to-[#1a0520] shadow-[0_0_20px_rgba(255,105,180,0.6)]">
          <div className="mb-3">
            <img 
              src={ImageofMe} 
              className="w-64 rounded-sm border-4 border-[#00d4ff] shadow-[0_0_15px_rgba(0,212,255,0.8)]"
              alt="Luna"
            />
          </div>
          
          <div className="text-center font-bold text-3xl text-[#ff69b4] mb-1" style={{textShadow: '2px 2px 0px #000, -1px -1px 0px #fff'}}>
            ~*~ Luna ~*~
          </div>
          
          <div className="text-center text-[#00ff00] font-bold text-sm mb-1 animate-pulse">
            ♪♫ I hate tech ♫♪
          </div>

          <div className="text-center text-[#ffff00] text-xs mb-3">
            ✧･ﾟ: *✧･ﾟ:* Online Now! *:･ﾟ✧*:･ﾟ✧
          </div>
          
          <div className="flex items-center text-center justify-center gap-6 pt-2">
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://github.com/Lunadrite"
              className="hover:brightness-125 transition-all"
            >
              <img src={Github} className="w-[32px] drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" alt="GitHub" />
            </a>

            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://www.linkedin.com/in/luna-tattersall-87a908369/"
              className="hover:brightness-125 transition-all"
            >
              <img src={Linkedin} className="w-[32px] drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" alt="LinkedIn" />
            </a>
          </div>

          <div className="mt-4 pt-3 border-t-2 border-dashed border-[#00d4ff]">
            <div className="text-xs text-center text-[#ff69b4] font-bold mb-1">
              .:*~*:. Stats .:*~*:.
            </div>
            <div className="text-[10px] text-white space-y-0.5">
              <div>♥ Mood: Lustin</div>
              <div>♪ Listening to: Silly Music :3</div>
              <div>★ Status: learnin</div>
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