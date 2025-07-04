import TransBanner from "../assets/footer/TransBanner.png";
import MOTDBanner from "../assets/footer/MOTDBanner.png";

export default function Footer() {
  return (
    <footer className="bg-[#2c2c2c] h-20 rounded-3xl mb-[2vh] justify-center ">
      <p className="flex justify-center pt-6 text-center mx-auto my-auto opacity-50">
        Luna!
      </p>
      <div className="flex justify-end items- pr-4 gap-4">
        <div className="flex gap-[15px] flex-row list-none bg-white w-[50px] border-2 border-black">
          <img src={TransBanner}></img>
        </div>

        <div className="flex gap-[15px] flex-row list-none bg-white w-[50px] border-2 border-black">
          <img src={MOTDBanner}></img>
        </div>
      </div>
    </footer>
  );
}
