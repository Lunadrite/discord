import Logo from "../assets/Portfolio-LOGO.jpg";

export default function Header({ path }: { path: string }) {
  return (
    <header className="bg-[#2c2c2c] h-[73px] text-white flex justify-between items-center px-5 rounded-lg mt-[2vh]">
      <div className="Logo-Name font-bold flex gap-1.5 items-center">
        <img src={Logo} width={34} />
        <a href="/">
          <p className="mb-1 text-base lg:text-2xl md:text-lg">
            Luna's Designs
          </p>
        </a>
      </div>

      <div className="flex justify-end items-start" />
      <ul className="flex gap-[15px] flex-row list-none">
        <li className={path === "/" ? "underline font-bold " : ""}>
          <a href="/">Links</a>
        </li>
        <li className={path === "/hrt" ? "underline font-bold " : ""}>
          <a href="/hrt">HRT</a>
        </li>
        <li className={path === "/friends" ? "underline font-bold " : ""}>
          <a href="/friends">Friends</a>
        </li>
        <button className="bg-linear-to-b/srgb from-[#b138a7] to-[#87ff83] cursor-pointer duration-200 rounded-lg px-3 py-0.5 hover:bg-linear-to-r/srgb hover:from-[#87ff83] hover:to-[#b138a7]">
          <a href="/gallery">Gallery</a>
        </button>
      </ul>
    </header>
  );
}
