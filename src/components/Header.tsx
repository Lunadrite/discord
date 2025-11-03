import Logo from "../assets/Portfolio-LOGO.jpg";

export default function Header({ path }: { path: string }) {
  return (
    <header className="border-1 border-[#f68989] py-2 justify-center h-[73px] text-white flex-col md:flex-row flex md:justify-between items-center px-5 rounded-lg mt-[2vh]">
      <div className="Logo-Name font-bold flex gap-1.5 items-center">
        <img src={Logo} width={34} />
        <a href="/">
          <p className="mb-1  text-base lg:text-2xl md:text-lg">
            Luna's Designs
          </p>
        </a>
      </div>

      <div className="flex justify-end items-start" />
      <ul className="flex gap-[20px] flex-row list-none">
        <li className={path === "/" ? "underline font-bold " : ""}>
          <a href="/">Links</a>
        </li>
        <li>
        <button className={path === "/aboutme" ? "underline font-bold " : ""}>
          <a href="/aboutme">About me</a>
        </button>
        </li>
        <li className={path === "/hrt" ? "underline font-bold " : ""}>
          <a href="/hrt">HRT</a>
        </li>
        <li className={path === "/friends" ? "underline font-bold " : ""}>
          <a href="/friends">Friends</a>
        </li>
        <li>
        <button className={path === "/gallery" ? "underline font-bold " : ""}>
          <a href="/gallery">Gallery</a>
        </button>
        </li>
      </ul>
    </header>
  );
}
