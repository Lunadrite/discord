export default function Header() {
  return (
    <header className="bg-[#2c2c2c] h-[73px] text-white flex justify-between items-center px-8 md:px-16 lg:px-28 rounded-lg">
      <div className="Logo-Name text-[25px] font-bold flex gap-2 items-center">
        <p className="mb-2">Luna's Links :3</p>
      </div>

      <div className="flex justify-end items-start" />
      <ul className="flex gap-[15px] flex-row list-none">
        <li className="font-bold underline">Links</li>
        <li>HRT</li>
        <li>Friends</li>
        <button className="bg-linear-to-b/srgb from-[#b138a7] to-[#87ff83] cursor-pointer duration-200 rounded-lg px-3 py-0.5 hover:bg-linear-to-r/srgb hover:from-[#87ff83] hover:to-[#b138a7]">
          Gallery
        </button>
      </ul>
    </header>
  );
}
