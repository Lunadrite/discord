import eyelashes from "../assets/cats/Eyelashes.jpg";
import bingus from "../assets/cats/bingus.jpg";
import bleh from "../assets/cats/bleh.jpg";
import eyes from "../assets/cats/eyesjpg.jpg";
import nose from "../assets/cats/nose.jpg";
import Piss from "../assets/cats/piss.jpg";
import Wah from "../assets/cats/wah.jpg";
import Blegh from "../assets/cats/BleghCat.png";



export default function HRT() {
  return (
    <>
      <p className="pt-3 mb-10 mx-auto text-center">
        Hey welcome to my about me page learn some silly things im doing!
      </p>
      <div className="grid 3xl:grid-cols-4 2xl:grid-cols-3 gap-8 lg:grid-cols-2 grid-cols-1 mx-auto ">
        <div className="flex gap-4 flex-col items-start">
          <div className="w-[300px]">
            <img src={eyelashes} className="border-1 p-3 rounded-lg"></img>
          </div>
          <div className="pictureComment max-w-[300px] break-words">
            Look at does eyelashes
          </div>
      </div>
      </div>
    </>

  );
}
