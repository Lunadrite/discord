import railroad from "../assets/gallery/railroad.jpg";
import rails from "../assets/gallery/rails.jpg";
import railstation from "../assets/gallery/railstation.jpg";
import time from "../assets/gallery/time.jpg";
import tunnel from "../assets/gallery/tunnel.jpg";
import crossroads from "../assets/gallery/crossroads.jpg";

export default function HRT() {
  return (
    <>
      <p className="pt-3 mb-10 mx-auto text-center">
        Welcome to my gallery hope you enjoy my pictures :)
      </p>
      <div className="grid 3xl:grid-cols-4 2xl:grid-cols-3 gap-8 lg:grid-cols-2 grid-cols-1 mx-auto ">
        <div className="flex gap-4 flex-col items-start">
          <div className="w-[300px]">
            <img src={railroad} className="border-1 p-3 rounded-lg"></img>
          </div>
          <div className="pictureComment max-w-[300px] break-words">🖤🖤</div>
        </div>
        <div className="flex gap-4 flex-col items-start">
          <div className="w-[300px]">
            <img src={railstation} className="border-1 p-3 rounded-lg"></img>
          </div>
          <div className="pictureComment max-w-[300px] break-words">🏴🖤</div>
        </div>
        <div className="flex gap-4 flex-col items-start">
          <div className="w-[300px]">
            <img src={time} className="border-1 p-3 rounded-lg"></img>
          </div>
          <div className="pictureComment max-w-[300px] break-words">🎩🕰</div>
        </div>

        <div className="flex gap-4 flex-col items-start">
          <div className="w-[300px]">
            <img src={tunnel} className="border-1 p-3 rounded-lg"></img>
          </div>
          <div className="pictureComment max-w-[300px] break-words">⬛◼◾▪</div>
        </div>
        <div className="flex gap-4 flex-col items-start">
          <div className="w-[300px]">
            <img src={rails} className="border-1 p-3 rounded-lg"></img>
          </div>
          <div className="pictureComment max-w-[300px] break-words">🏴🖤</div>
        </div>
        <div className="flex gap-4 flex-col items-start">
          <div className="w-[300px]">
            <img src={crossroads} className="border-1 p-3 rounded-lg"></img>
          </div>
          <div className="pictureComment max-w-[300px] break-words">🖤🛣</div>
        </div>
      </div>
    </>
  );
}
