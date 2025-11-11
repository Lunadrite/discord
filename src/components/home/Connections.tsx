export default function Connections() {
  return (
    <div className="mt-5 md:mt-0 p-4 w-full max-w-full rounded-sm bg-gradient-to-b from-[#1b0f1d] to-[#0a0a0a] border-4 border-[#5e5bff] shadow-[0_0_22px_rgba(94,91,255,0.25)] goth-vignette 2xl:w-[600px]">
     <h2
  className="text-2xl font-bold mb-4 text-center w-full text-[#d6c7a1] tracking-wider flex justify-center"
  style={{
    textShadow: "2px 2px 6px rgba(255, 105, 180, 0.8)",
    letterSpacing: "1px",
  }}
>
  ♥♥♥ Connect With Me ♥♥♥
</h2>

      <div className="text-center text-[#b30059] text-xs mb-4">
        <span className="animate-pulse">★ ･ﾟ･｡☆｡･ﾟ･★ Add me on everything! ★･ﾟ･｡☆｡･ﾟ･★</span>
      </div>

      <ul className="flex gap-5 flex-col list-none w-full max-w-full mx-auto">
        <li className="w-full max-w-full">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/lunalovezyouxx/"
            className="w-full block bg-gradient-to-r from-[#6f3a2d] via-[#b30059] to-[#3a0f27] text-[#eaeaea] border-2 border-[#b30059] shadow-[0_0_14px_rgba(179,0,89,0.35)] hover:shadow-[0_0_22px_rgba(179,0,89,0.6)] transition-all duration-300 px-6 py-4 rounded-lg cursor-pointer"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '3.5rem' }}
          >
            <span className="font-bold drop-shadow-md text-2xl">★ Instagram ★</span>
          </a>
        </li>

        <li className="w-full max-w-full">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://open.spotify.com/user/31xnzuknehiqb467bf72cka3c7by"
            className="block bg-gradient-to-r from-[#2b2b2b] to-[#0b0b0b] text-[#eaeaea] border-2 border-[#5e5bff] shadow-[0_0_12px_rgba(94,91,255,0.22)] hover:shadow-[0_0_20px_rgba(94,91,255,0.45)] transition-all duration-300 px-6 py-4 rounded-lg cursor-pointer"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '3.5rem' }}
          >
            <span className="font-bold drop-shadow-md text-2xl">♪ Spotify ♪</span>
          </a>
        </li>

        <li className="w-full max-w-full">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://soundcloud.com/grogfrog"
            className="block bg-gradient-to-r from-[#5a2b00] to-[#2b0f00] text-[#eaeaea] border-2 border-[#7a3a00] shadow-[0_0_12px_rgba(255,136,0,0.18)] hover:shadow-[0_0_20px_rgba(255,136,0,0.4)] transition-all duration-300 px-6 py-4 rounded-lg cursor-pointer"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '3.5rem' }}
          >
            <span className="font-bold drop-shadow-md text-2xl">♫ SoundCloud ♫</span>
          </a>
        </li>

        <li className="w-full max-w-full">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/luna-tattersall-87a908369/"
            className="block bg-gradient-to-r from-[#0a2746] to-[#061424] text-[#eaeaea] border-2 border-[#5e5bff] shadow-[0_0_12px_rgba(94,91,255,0.18)] hover:shadow-[0_0_20px_rgba(94,91,255,0.38)] transition-all duration-300 px-6 py-4 rounded-lg cursor-pointer"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '3.5rem' }}
          >
            <span className="font-bold drop-shadow-md text-2xl">✦ LinkedIn ✦</span>
          </a>
        </li>

        <li className="w-full max-w-full">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://steamcommunity.com/id/LunaWovesYou/"
            className="block bg-gradient-to-r from-[#081827] to-[#141922] text-[#eaeaea] border-2 border-[#00adee]/50 shadow-[0_0_12px_rgba(0,173,238,0.12)] hover:shadow-[0_0_20px_rgba(0,173,238,0.32)] transition-all duration-300 px-6 py-4 rounded-lg cursor-pointer"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '3.5rem' }}
          >
            <span className="font-bold drop-shadow-md text-2xl">☆ Steam ☆</span>
          </a>
        </li>
      </ul>

      <div className="mt-4 pt-3 border-t-2 border-dashed border-[#5e5bff] text-center text-[10px] text-[#c0b283]">
        ✧ Page views: 42069 ✧ Last updated: 2025 ✧
      </div>
    </div>
  );
}
