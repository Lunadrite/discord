import railroad from "../assets/gallery/railroad.jpg";
import rails from "../assets/gallery/rails.jpg";
import railstation from "../assets/gallery/railstation.jpg";
import time from "../assets/gallery/time.jpg";
import tunnel from "../assets/gallery/tunnel.jpg";
import crossroads from "../assets/gallery/crossroads.jpg";
import castle from "../assets/gallery/castle.jpg";

export default function Gallery() {
  const images = [
    { img: railroad, text: "🖤🖤" },
    { img: railstation, text: "🏴🖤" },
    { img: time, text: "🎩🕰" },
    { img: tunnel, text: "⬛◼◾▪" },
    { img: rails, text: "🏴🖤" },
    { img: crossroads, text: "🖤🛣" },
    { img: castle, text: "🏰🐦‍⬛" },
  ];

  return (
    <>
      <p className="pt-6 mb-10 mx-auto text-center text-lg text-gray-300">
        Welcome to my gallery — hope you enjoy my pictures :)
      </p>

      <div className="grid 3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-y-14 gap-x-10 mx-auto justify-center">
        {images.map((item, i) => (
          <div key={i} className="flex flex-col items-start w-[300px]">
            {/* Image */}
            <div className="relative group w-full overflow-hidden rounded-xl border border-[#8a2be2]/40 shadow-md hover:shadow-[0_0_20px_rgba(138,43,226,0.6)] transition-all duration-300">
              <img
                src={item.img}
                alt=""
                className="w-full h-[400px] object-cover rounded-xl transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Text bubble under image */}
            <div className="mt-4 bg-gradient-to-b from-[#1b1b1b] to-[#0a0a0a] border border-[#8a2be2]/60 shadow-[0_0_8px_rgba(138,43,226,0.5)] rounded-full px-4 py-2 flex items-center justify-center text-gray-100 font-semibold text-center whitespace-nowrap">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
