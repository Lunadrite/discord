import { Fragment } from "react/jsx-runtime";
import Header from "../components/Header";
import Home from "../pages/Home";
import HRT from "../pages/HRT";
import Friends from "../pages/Friends";
import Gallery from "../pages/Gallery";
import "../App.css";

export default function LunaRouter() {
  const paths = {
    "/": <Home />,
    "/hrt": <HRT />,
    "/friends": <Friends />,
    "/gallery": <Gallery />,
  };

  const PageRouter = () => {
    const currentPath = location.pathname;

    if (currentPath in paths) return paths[currentPath as keyof typeof paths];

    window.history.replaceState(null, "", "/");
    return <Home />;
  };

  return (
    <Fragment>
      <Header path={location.pathname} />
      <PageRouter />
    </Fragment>
  );
}
