import TransBanner from "../assets/footer/TransBanner.png";
import MOTDBanner from "../assets/footer/MOTDBanner.png";
import Kitty from "../assets/footer/d8062f4023cc4304d8cfc2d2d15df6fa.jpg";

export default function Footer() {
  return (
    <footer className="relative mt-12 mb-[2vh] rounded-3xl bg-gradient-to-b from-[#0a0a0a] to-[#1a001f] border border-[#a200ff]/40 shadow-[0_0_15px_rgba(162,0,255,0.25)] p-6">
      {/* Centered text */}
      <div className="flex justify-center mb-2">
        <div className="text-center text-gray-300">
          <p className="opacity-70 text-sm tracking-wide">Luna!</p>
          <p className="opacity-50 text-xs">© 2025</p>
        </div>
      </div>

      {/* Banner icons */}
      <div className="absolute bottom-4 right-4 flex flex-row items-center gap-4">
        {/* Trans Banner */}
        <div className="rounded-lg border border-[#a200ff]/50 shadow-[0_0_8px_rgba(162,0,255,0.4)] overflow-hidden hover:shadow-[0_0_15px_rgba(162,0,255,0.7)] transition-shadow duration-300">
          <img
            src={TransBanner}
            className="w-[50px] h-[30px] object-contain"
            alt="Trans Banner"
          />
        </div>

        {/* MOTD Banner */}
        <div className="rounded-lg border border-[#a200ff]/50 shadow-[0_0_8px_rgba(162,0,255,0.4)] overflow-hidden hover:shadow-[0_0_15px_rgba(162,0,255,0.7)] transition-shadow duration-300">
          <img
            src={MOTDBanner}
            className="w-[50px] h-[30px] object-contain"
            alt="MOTD Banner"
          />
        </div>

        {/* Kitty Button */}
        <a
          href="/kitties"
          className="rounded-lg border border-[#a200ff]/50 shadow-[0_0_8px_rgba(162,0,255,0.4)] hover:shadow-[0_0_15px_rgba(162,0,255,0.7)] transition-shadow duration-300 overflow-hidden"
        >
          <img
            src={Kitty}
            className="w-[75px] h-[30px] object-cover"
            alt="Kitty"
          />
        </a>
      </div>
    </footer>
  );
}
