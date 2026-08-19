import pointersexplained from "../../assets/Blogposts/PointersExplained.png";
import BaseSystems from "../../assets/Blogposts/A Beginner’s Guide to Base Systems.png"
import Generics from "../../assets/Blogposts/Generics/An intro to generics in c++.png"
import FDEC from "../../assets/Blogposts/FDEC/FDEChumbnail.png"

interface Blog {
    title: string;
    image: string;
    href: string
}

export const Blogs: Blog[] = [
  {
    title: "The fetch-decode-execute cycle",
    image: FDEC,
    href: "./fdecblogpost",
  },
  {
    title: "An intro to Generics in c++",
    image: Generics,
    href: "./genericsblogpost"
  },
  {
    title: "A Beginner’s Guide to Base Systems",
    image: BaseSystems,
    href: "./basesystemsblogpost"
  },
  {
    title: "Pointers Explained!",
    image: pointersexplained,
    href: "./pointerblogpost"
  },

];