import { Fragment } from "react/jsx-runtime";
import Header from "../components/Header";
import Home from "../pages/Home";
import HRT from "../pages/HRT";
import Friends from "../pages/Friends";
import Gallery from "../pages/Gallery";
import "../App.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/Footer";

export default function LunaRouter() {
  const paths = {
    "/": <Home />,
    "/hrt": <HRT />,
    "/friends": <Friends />,
    "/gallery": <Gallery />,
  };

  const PageRouter = () => {
    const currentPath = window.location.pathname;

    if (currentPath in paths) return paths[currentPath as keyof typeof paths];

    window.history.replaceState(null, "", "/");
    return <Home />;
  };

  return (
    <Fragment>
      <div className="min-h-screen flex flex-col justify-between xl:px-[15rem] lg:px-[9rem] md:px-[6rem] px-[1rem]">
        <div className="h-full flex flex-col mb-5">
          <Header path={location.pathname} />
          <PageRouter />
        </div>
        <Footer />
      </div>
      <Analytics />
    </Fragment>
  );
}
