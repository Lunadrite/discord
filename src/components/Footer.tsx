import TransBanner from "../assets/footer/TransBanner.png";
import MOTDBanner from "../assets/footer/MOTDBanner.png";
import Kitty from "../assets/footer/d8062f4023cc4304d8cfc2d2d15df6fa.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#2c2c2c] h-20 rounded-3xl mb-[2vh] justify-center ">
      <p className="flex justify-center pt-6 text-center mx-auto my-auto opacity-50">
        Luna!
      </p>
      <div className="flex justify-end flex-row items-end flex-wrap pr-4 gap-4">
        <div className="flex gap-[15px] flex-row list-none bg-white w-[50px] border-2 border-black">
          <img src={TransBanner}></img>
        </div>

        <div className="flex gap-[15px] flex-row list-none bg-white w-[50px] border-2 border-black">
          <img src={MOTDBanner}></img>
        </div>
        <div className="flex gap-[15px] flex-row list-none bg-white w-[75px] border-2 border-black">
          <a href="/kitties">
            <img src={Kitty}></img>
          </a>
        </div>
      </div>
    </footer>
  );
}
