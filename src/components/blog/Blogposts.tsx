import pointersexplained from "../../assets/Blogposts/PointersExplained.png";
import BaseSystems from "../../assets/Blogposts/A Beginner’s Guide to Base Systems.png"
interface Blog {
    title: string;
    image: string;
    href: string
}

export const Blogs: Blog[] = [
  {
    title: "Pointers Explained!",
    image: pointersexplained,
    href: "./pointerblogpost"
  },
  {
    title: "A Beginner’s Guide to Base Systems",
    image: BaseSystems,
    href: "./basesystemsblogpost"
  }

];