import Logo from "../assets/Portfolio-LOGO.jpg";

export default function Header({ path }: { path: string }) {
  return (
    <header className="border-2 border-[#880808] py-2 justify-center h-[73px] text-white flex-col md:flex-row flex md:justify-between items-center px-5 rounded-lg mt-[2vh]">
      <div className="Logo-Name font-bold flex gap-1.5 items-center">
        <img src={Logo} width={34} />
        <a href="/">
          <p className="mb-1  text-base lg:text-2xl md:text-lg ">
            Luna's Designs
          </p>
        </a>
      </div>

      <div className="flex justify-end items-start " />
      <ul className="flex gap-[20px] text-md flex-row list-none sm:text-[]">
        <li className={path === "/" ? "underline font-bold " : ""}>
          <a href="/">Links</a>
        </li>
        <li className={path === "/projects" ? "underline font-bold " : ""}>
          <a href="/projects">Projects</a>
        </li>
        <li className={path === "/gallery" ? "underline font-bold " : ""}>
          <a href="/gallery">Gallery</a>
        </li>
        <li className={path === "/blogposts" ? "underline font-bold " : ""}>
          <a href="/blogposts">Blogposts</a>
        </li>
      </ul>
    </header>
  );
}
