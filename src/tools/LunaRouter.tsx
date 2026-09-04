import { Fragment } from "react/jsx-runtime";
import Header from "../components/Header";
import Home from "../pages/Home";
import Hrt from "../pages/Hrt";
import Friends from "../pages/Friends";
import Gallery from "../pages/Gallery";
import "../App.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/Footer";
import Kitties from "../pages/Kitties";
import Aboutme from "../pages/Aboutme";
import ProjectPage from "../pages/Projects"
import Blogposts from "../pages/Blogposts"
import Pointerblogpost from "../pages/Blogpost/PointerBlogpost"
import BaseSystemBlogpost from "../pages/Blogpost/BaseSystemsBlogpost"
import GenericsBlogpost from "../pages/Blogpost/genericsblogpost"
import Fdecblogpost from "../pages/Blogpost/fdecblogpost"

//Blogposts

export default function LunaRouter() {
  const paths = {
    "/": <Home />,
    "/hrt": <Hrt />,
    "/friends": <Friends />,
    "/gallery": <Gallery />,
    "/kitties": <Kitties />,
    "/aboutme": <Aboutme />,
    "/projects": <ProjectPage />,
    "/blogposts":<Blogposts />,
    "/pointerblogpost": <Pointerblogpost/>,
    "/basesystemsblogpost": <BaseSystemBlogpost/>,
    "/genericsblogpost" : <GenericsBlogpost/>,
    "/fdecblogpost" : <Fdecblogpost/>
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
