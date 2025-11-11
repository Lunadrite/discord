import eyelashes from "../assets/cats/Eyelashes.jpg";
import bingus from "../assets/cats/bingus.jpg";
import bleh from "../assets/cats/bleh.jpg";
import eyes from "../assets/cats/eyesjpg.jpg";
import nose from "../assets/cats/nose.jpg";
import Piss from "../assets/cats/piss.jpg";
import Wah from "../assets/cats/wah.jpg";
import Blegh from "../assets/cats/BleghCat.png";

export default function Cats() {
  const cats = [
    { img: eyelashes, text: "Look at does eyelashes" },
    { img: bleh, text: "🏴🖤" },
    { img: bingus, text: "🎩🕰" },
    { img: eyes, text: "⬛◼◾▪" },
    { img: nose, text: "🏴🖤" },
    { img: Piss, text: "🖤🛣" },
    { img: Wah, text: "🖤🛣" },
    { img: Blegh, text: "👅🐈‍⬛" },
  ];

  return (
    <>
      <p className="pt-3 mb-10 mx-auto text-center">
        WOAH WELCOME TO MY SECRET PAGE KITTIES FOR YOU KITTIES EVERYWHERE
      </p>

      <div className="grid 3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-y-14 gap-x-10 mx-auto justify-center">
        {cats.map((cat, index) => (
          <div key={index} className="flex flex-col items-start w-[300px]">
            {/* Image */}
            <div className="relative group w-full overflow-hidden rounded-xl border border-[#8a2be2]/40 shadow-md hover:shadow-[0_0_20px_rgba(138,43,226,0.6)] transition-all duration-300">
              <img
                src={cat.img}
                alt=""
                className="w-full h-[400px] object-cover rounded-xl transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Bubble under image */}
            <div className="mt-4 bg-gradient-to-b from-[#1b1b1b] to-[#0a0a0a] border border-[#8a2be2]/60 shadow-[0_0_8px_rgba(138,43,226,0.5)] rounded-full px-4 py-2 flex items-center justify-center text-gray-100 font-semibold text-center whitespace-nowrap">
              {cat.text}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
