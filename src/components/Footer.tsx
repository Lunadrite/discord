import TransBanner from "../assets/footer/TransBanner.png";
import MOTDBanner from "../assets/footer/MOTDBanner.png";
import Kitty from "../assets/footer/d8062f4023cc4304d8cfc2d2d15df6fa.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#2c2c2c] rounded-3xl mb-[2vh] p-4 relative min-h-20">
      <div className="flex justify-center mb-2">
        <div className="text-center">
          <p className="opacity-50">Luna!</p>
          <p className="opacity-50">©2025</p>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex flex-row items-center gap-4">
        <div className="bg-white w-[50px] h-[30px] border-2 border-black overflow-hidden">
          <img
            src={TransBanner}
            className="w-full h-full object-contain"
            alt="Trans Banner"
          />
        </div>
        <div className="bg-white w-[50px] h-[30px] border-2 border-black overflow-hidden">
          <img
            src={MOTDBanner}
            className="w-full h-full object-contain"
            alt="MOTD Banner"
          />
        </div>
        <div className="bg-white w-[75px] h-[30px] border-2 border-black overflow-hidden">
          <a href="/kitties" className="block w-full h-full">
            <img
              src={Kitty}
              className="w-full h-full object-contain"
              alt="Kitty"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
