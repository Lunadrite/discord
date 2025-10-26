export default function HRT() {
  return (
    <>
      <p className="pt-3 mb-10 mx-auto text-center">
        Hey welcome to my about me page learn some silly things im doing!
      </p>
      <div className="grid 3xl:grid-cols-4 2xl:grid-cols-3 gap-8 lg:grid-cols-2 grid-cols-1 mx-auto ">
        <div className="flex gap-4 flex-col items-start">
          <div className="w-[600px] border-1 p-3 rounded-lg ">
            <p className="pb-1">
              Japanese | Im learning all the 46 hiragana hope to be done in 1-2 weeks!
            </p>
            <p className="pb-1">
              French | I learned the basics enough to sound like a baby haha will learn!
            </p>
            <p className="pb-1">
              Art | Im loving learning art, learning fundementals and will add art to my gallery!
            </p>
          </div>
          <div className="pictureComment max-w-[300px] break-words">
            Here are some things im learning and the level im at!
          </div>
      </div>
      </div>
    </>

  );
}
