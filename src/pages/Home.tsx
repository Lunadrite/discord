import Connections from "../components/home/Connections";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <>
      <p className="text-3xl flex pt-3 font-medium">
        Hai, Welcome to my website!
      </p>
      <p className="flex pt-2 font-light">
        This is a very basic website just for the links enjoy i will fix while
        learning
      </p>
      <Connections />
    </>
  );
}
