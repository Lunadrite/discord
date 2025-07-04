export default function Connections() {
  return (
    <div className="mt-5 ">
      <div className="" />
      <ul className="flex gap-[20px] flex-col list-none w-[600px] mx-[auto]">
        {" "}
        {/* mx change for picture later */}
        <li>
          <a
            href="https://www.instagram.com/lunalovezyouxx/"
            className="navElements bg-linear-65 from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://open.spotify.com/user/31xnzuknehiqb467bf72cka3c7by"
            className="navElements bg-linear-65 from-[#1db954] to-[#191414] text-white"
          >
            Spotify
          </a>
        </li>
        <li>
          <a
            href="https://soundcloud.com/grogfrog"
            className="navElements bg-linear-65 from-[#ff8800] to-[#ff3300]"
          >
            Soundcloud
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/luna-tattersall-87a908369/"
            className="navElements bg-linear-65 from-[#0A66C2] to-white text-white"
          >
            LinkedIn
          </a>
        </li>
        <button>
          <a
            href="https://steamcommunity.com/id/LunaWovesYou/"
            className="navElements bg-linear-65 from-[#00adee] to-[#000000] text-white"
          >
            Steam
          </a>
        </button>
      </ul>
    </div>
  );
}
