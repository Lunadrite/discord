import { Blog } from "../components/blog/Blog"
import {Blogs} from "../components/blog/Blogposts"

export default function Blogposts() {
  return (
    <>
    <p className="pt-4 mb-4 mx-auto text-center">
      Here are my blogposts, I plan to write and import all of them so make sure to come back!
    </p>

    <div className="flex justify-center">
    <div className="grid 3xl:grid-cols-2 2xl:grid-cols-2 gap-x-70 lg:grid-cols-1 grid-cols-1 content-center w-[50%]">
        {Blogs.map((blog) => (
        <Blog.Blogpost
          caption={blog.title}
          src={blog.image}
          href={blog.href}
        />
          ))}
  
    
    
    </div>
    </div>

    
    </>
  );
}
