export default function Connections() {
  return (
    <div className="mt-5 md:mt-0 p-4 w-full max-w-full rounded-sm bg-gradient-to-b from-[#1a0520] to-[#4a0e4e] border-4 border-[#00d4ff] shadow-[0_0_20px_rgba(0,212,255,0.6)] lg:w-[] 2xl:w-[600px]">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#ffff00] tracking-wider" style={{textShadow: '2px 2px 4px rgba(255, 105, 180, 0.8)'}}>
        ♥♥♥ Connect With Me ♥♥♥
      </h2>
      <div className="text-center text-[#ff69b4] text-xs mb-4 animate-pulse">
        ★ ･ﾟ･｡☆｡･ﾟ･★ Add me on everything! ★･ﾟ･｡☆｡･ﾟ･★
      </div>
      <ul className="flex gap-5 flex-col list-none w-full max-w-full mx-auto">
        <li className="w-full max-w-full">
          <a
            target="_blank" 
            rel="noopener noreferrer"
            href="https://www.instagram.com/lunalovezyouxx/"
            className="w-full block bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white border-2 border-white shadow-[0_0_10px_rgba(238,42,123,0.8)] hover:shadow-[0_0_20px_rgba(238,42,123,1)] transition-all duration-300 px-6 py-4 rounded-lg cursor-pointer"
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '3.5rem'}}
          >
            <span className="font-bold drop-shadow-md text-2xl">★ Instagram ★</span>
          </a>
        </li>
        <li className="w-full max-w-full">
          <a
            target="_blank" 
            rel="noopener noreferrer"
            href="https://open.spotify.com/user/31xnzuknehiqb467bf72cka3c7by"
            className="block bg-gradient-to-r from-[#1db954] to-[#191414] text-white border-2 border-[#1db954] shadow-[0_0_10px_rgba(29,185,84,0.8)] hover:shadow-[0_0_20px_rgba(29,185,84,1)] transition-all duration-300 px-6 py-4 rounded-lg cursor-pointer"
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '3.5rem'}}
          >
            <span className="font-bold drop-shadow-md text-2xl">♪ Spotify ♪</span>
          </a>
        </li>
        <li className="w-full max-w-full">
          <a
            target="_blank" 
            rel="noopener noreferrer"
            href="https://soundcloud.com/grogfrog"
            className="block bg-gradient-to-r from-[#ff8800] to-[#ff3300] text-white border-2 border-[#ff8800] shadow-[0_0_10px_rgba(255,136,0,0.8)] hover:shadow-[0_0_20px_rgba(255,136,0,1)] transition-all duration-300 px-6 py-4 rounded-lg cursor-pointer"
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '3.5rem'}}
          >
            <span className="font-bold drop-shadow-md text-2xl">♫ SoundCloud ♫</span>
          </a>
        </li>
        <li className="w-full max-w-full">
          <a
            target="_blank" 
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/luna-tattersall-87a908369/"
            className="block bg-gradient-to-r from-[#0A66C2] to-[#004182] text-white border-2 border-[#0A66C2] shadow-[0_0_10px_rgba(10,102,194,0.8)] hover:shadow-[0_0_20px_rgba(10,102,194,1)] transition-all duration-300 px-6 py-4 rounded-lg cursor-pointer"
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '3.5rem'}}
          >
            <span className="font-bold drop-shadow-md text-2xl">✦ LinkedIn ✦</span>
          </a>
        </li>
        <li className="w-full max-w-full">
          <a
            target="_blank" 
            rel="noopener noreferrer"
            href="https://steamcommunity.com/id/LunaWovesYou/"
            className="block bg-gradient-to-r from-[#00adee] to-[#1b2838] text-white border-2 border-[#00adee] shadow-[0_0_10px_rgba(0,173,238,0.8)] hover:shadow-[0_0_20px_rgba(0,173,238,1)] transition-all duration-300 px-6 py-4 rounded-lg cursor-pointer"
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '3.5rem'}}
          >
            <span className="font-bold drop-shadow-md text-2xl">☆ Steam ☆</span>
          </a>
        </li>
      </ul>
      <div className="mt-4 pt-3 border-t-2 border-dashed border-[#ff69b4] text-center text-[10px] text-[#00ff00]">
        ✧ Page views: 42069 ✧ Last updated: 2025 ✧
      </div>
    </div>
  );
}