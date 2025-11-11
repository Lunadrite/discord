import Logo from "../assets/Portfolio-LOGO.jpg";

export default function Header({ path }: { path: string }) {
  return (
    <header className="rounded-b-3xl bg-gradient-to-b from-[#1a001f] to-[#0a0a0a] border border-[#a200ff]/40 shadow-[0_0_20px_rgba(162,0,255,0.3)] backdrop-blur-sm p-4 mb-8">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto w-full">
        <div className="Logo-Name font-bold flex gap-2 items-center">
          <img src={Logo} width={34} alt="Luna Logo" />
          <a href="/" className="mb-1 text-base lg:text-2xl md:text-lg text-gray-100 hover:text-[#d18aff] transition-colors">
            Luna's Designs
          </a>
        </div>

        <div className="flex justify-end items-start" />

        <ul className="flex gap-[20px] flex-row list-none text-sm">
          <li className={path === "/" ? "underline font-bold" : ""}>
            <a href="/">Links</a>
          </li>

          <li>
            <button className={path === "/aboutme" ? "underline font-bold" : ""}>
              <a href="/aboutme">About me</a>
            </button>
          </li>

          <li className={path === "/hrt" ? "underline font-bold" : ""}>
            <a href="/hrt">HRT</a>
          </li>

          <li className={path === "/friends" ? "underline font-bold" : ""}>
            <a href="/friends">Friends</a>
          </li>

          <li>
            <button className={path === "/gallery" ? "underline font-bold" : ""}>
              <a href="/gallery">Gallery</a>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
