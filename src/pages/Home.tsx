import ImageofMe from "../assets/home/IMG_6984.jpg";
import Github from "../assets/home/github-mark-white.png";
import Linkedin from "../assets/home/InBug-White.png";

import Connections from "../components/home/Connections";
export default function Home() {
  return (
    <main className="h-fit">
      <div className=" pt-3 font-medium text-center">
        <p className="text-3xl ">Hai, Welcome to my website!</p>
        <p className="font-light ">
          This is a very basic website just for the links enjoy i will fix while
          learning
        </p>
      </div>
      <div className="flex items-center pt-2">
        <div className="border-2 px-20 py-3 flex rounded-3xl flex-col border-[#f68989]">
          <img src={ImageofMe} className="w-50"></img>
          <div className="mt-2 p-1 rounded-md text-center font-bold text-2xl underline underline-offset-4 ">
            Luna
          </div>
          <div className="items-center text-center">Creative assistant</div>
          <div className="flex items-center text-center justify-center gap-3 pt-2">
            <img src={Github} className="w-[25px]"></img>
            <div className="flex items-center text-center justify-center">
              <img src={Linkedin} className="w-[25px]"></img>
            </div>
          </div>
        </div>
        <div className="flex">
          <Connections />
        </div>
      </div>
    </main>
  );
}
