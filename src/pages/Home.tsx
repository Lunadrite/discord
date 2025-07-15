import ImageofMe from "../assets/home/IMG_6984.jpg";
import Github from "../assets/home/github-mark-white.png";
import Linkedin from "../assets/home/InBug-White.png";

import Connections from "../components/home/Connections";
export default function Home() {
  return (
    <main className="h-fit">
      <div className=" pt-4 font-medium text-center">
        <p className="text-3xl ">Hai, Welcome to my website!</p>
        <p className="font-light ">
          This is a very basic website just for the links enjoy i will fix while
          learning
        </p>
      </div>
      <div className="flex items-center pt-4 flex-col md:flex-row justify-center ">
        <div className="border-2 px-24 py-4 flex rounded-3xl flex-col  border-[#f68989] ">
          <img src={ImageofMe} className="w-64 rounded-xl"></img>
          <div className="rounded-md text-center font-bold text-2xl underline underline-offset-4 ">
            Luna
          </div>
          <div className="items-center text-center">Creative assistant</div>
          <div className="flex items-center text-center justify-center gap-4 pt-2">
            <a href="https://github.com/Lunadrite">
              <img src={Github} className="w-[24px]"></img>
            </a>

            <div className="flex items-center text-center justify-center">
              <a href="https://www.linkedin.com/in/luna-tattersall-87a908369/">
                <img src={Linkedin} className="w-[24px]"></img>
              </a>
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
