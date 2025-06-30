export default function Connections() {
  return (
    <div className="mt-10">
      <div className="flex justify-end items-start" />
      <ul className="flex gap-[20px] flex-col list-none">
        <li className="navElements bg-linear-65 from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] ">
          <a href="https://www.instagram.com/lunalovezyouxx/">Instagram</a>
        </li>
        <li className="navElements bg-linear-65 from-[#1db954] to-[#191414]">
          <a href="https://open.spotify.com/user/31xnzuknehiqb467bf72cka3c7by">
            Spotify
          </a>
        </li>
        <li className="navElements bg-linear-65 from-[#0A66C2] to-white">
          <a href="https://www.linkedin.com/in/luna-tattersall-87a908369/">
            LinkedIn
          </a>
        </li>
        <button className="navElements bg-linear-65 from-[#00adee] to-[#000000]">
          <a href="https://steamcommunity.com/id/LunaWovesYou/">Steam</a>
        </button>
      </ul>
    </div>
  );
}
