import ImageofMe from "../../assets/home/PridePic.png";
import Github from "../../assets/home/github-mark-white.png";
import Linkedin from "../../assets/home/InBug-White.png";



export default function HeroCard() {
    return(
        <>
    <div className="pt-4">
        <div className=" flex border-3 py-4  rounded-3xl flex-col  border-[#880808] items-center text-center justify-center ">
        <img src={ImageofMe} className="w-70 rounded-3xl p-3"></img>
        <div className="rounded-md text-center font-bold text-2xl underline underline-offset-4 ">
            Luna
        </div>
        <div className="items-center text-center">Computing Student!</div>
        <div className="flex items-center text-center justify-center gap-4 pt-2">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Lunadrite">
            <img src={Github} className="w-[24px]"></img>
            </a>

            <div className="flex items-center text-center justify-center">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jamie-luna-tattersall/">
                <img src={Linkedin}  className="w-[24px]"></img>
            </a>
            </div>
     
        </div>
        </div>
        </div>
        </>
    )
}