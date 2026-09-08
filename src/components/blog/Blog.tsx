import type { ReactNode } from "react"
import Github from "../../assets/home/github-mark-white.png";

const progressText = {
    "finished": "✅ Finished",
    "in-progress": "🟡 In Progress",
    "planned": "⚪ Planned",
}

type Progress = "finished" | "in-progress" | "planned";

type ChildrenProps = {
  children: ReactNode
}
type CodeProps = {
  children: ReactNode
  language?: string
  caption?: string
}
type CalloutProps = {
  children: ReactNode
  caption?: string
}

type ImageProps = {
  src: string
  width?: string
}

type ListProps = {
  items: string[]
}

type BlogpostProps ={
  src: string
  caption?: string
  href?: string
}

type ProjectProps ={
  caption?: string,
  href?: string
  src?: string
  progress: Progress
}

type ImportantInfo ={
  children: ReactNode
  textsize?: string
}


function Heading({ children }: ChildrenProps) {
    return(    
      <h1 className="text-4xl justify-center flex py-3">
        {children}
      </h1>
    )
}

function SubHeading({ children }: ChildrenProps) {
    return(    
      <h2 className="text-3xl flex pb-3 font-bold">
        {children}
      </h2>
    )
}

function Text({ children }: ChildrenProps) {
    return(    
      <p className="flex text-amber-50 pb-2">
        {children}
      </p>
    )
}

function ImportantInfo({ children, textsize }: ImportantInfo) {
    return(    
      <span className={`border ${textsize} bg-red-950 text-red-400 rounded-2xl px-2 mx-1`}>
        {children}
      </span>
    )
}

function Image({ src, width = "w-70" }: ImageProps) {
    return(    
      <img src={src} 
      className={`${width} rounded-3xl py-3`}/>
    )
}

function ThumbnailImage({ src }: ImageProps) {
    return(    
      <div className="justify-center flex">
      <img src={src}  className="flex justify-center w-full  max-w-md md:min-w-2xl xl:min-w-3xl 2xl:min-w-3xl p-4 rounded-md object-cover "></img>
    </div>
    )
}

function List({ items }: ListProps) {
  return (
    <ul className="text-gray-300 pb-10 ml-5 ">
      {items.map((item) => (
        <li className="pb-2" key={item}>{item}</li>
      ))}
    </ul>
  )
}

function Callout({ children, caption }: CalloutProps) {
    return(    
    <div className=" rounded-lg border bg-[#5f5f5f] border-black p-4 py-4.5 my-3 flex flex-wrap w-[auto]">
      <p className="pl-4 text-white font-md">  
      <Blog.ImportantInfo textsize="text-lg">!</Blog.ImportantInfo>{children}
      </p>
      <p className="font-thin text-sm">
        {caption}
      </p>
    </div>
    )
}


// <Pre> Important to remember becasue thts how we breakline in code blocks
function Code({children,language = "txt", caption}: CodeProps) {
  return (
    <>
    <div className="bg-[#1e1e1e] rounded-xl p-4 my-4 overflow-x-auto">
      <div className="text-gray-400 text-sm pb-2">
        {language}
      </div>

      <pre> 
        <code className="text-gray-100">
          {children}
        </code>
      </pre>
    </div>
    {caption&& (
      <p className="font-thin text-sm">
        {caption}
      </p>
    )}
    </>
  )
}

function Blogpost({caption, src, href}:BlogpostProps   )
{
  return(
    <>
      <div className="py-3">
      <div className="flex gap-4 flex-col items-start">
        <div className="" >
          <a href={href}>
          <img src={src} className=" hover:border-pink-400 transition-colors 2xl:min-w-1xl border p-4 rounded-lg object-cover "></img>
          </a>
        </div>
        <div className="projectComment  w-full 2xl:min-w-1xl break-words text-center">
          {caption}
        <p className="bg-red-200 rounded-4xl text-md">Click Thumbnail to read</p>
        </div>
      </div>
    </div>
    </>
  )
}

function Projects({caption, src, href, progress}:ProjectProps   )
{
  return(
    <>
      <div className="flex gap-4 flex-col pb-10">
        <div className="">
          <img src={src}  className=" hover:border-pink-400 transition-colors w-full  max-w-sm md:min-w-lg xl:min-w-1xl 2xl:min-w-1xl border p-4 rounded-lg object-cover "></img>
        </div>
        <div className="projectComment w-full max-w-sm md:min-w-lg xl:min-w-1xl 2xl:min-w-1xl break-words text-center">
        {caption}
        <a className="text-blue-600 flex justify-center" href={href}>Github Repo<img src={Github} className="w-[24px] bg-black rounded-4xl "></img></a>
        <div className="flex content-center text-center justify-center pt-1">
          <div className="border border-black p-1 rounded">
            <p>{progressText[progress]}</p>
          </div>
        </div>
        </div>
        
      </div>
    </>
  )
}



export const Blog = {
  Heading,
  Text,
  Image,
  SubHeading,
  ThumbnailImage,
  List,
  ImportantInfo,
  Callout,
  Code,
  Blogpost,
  Projects,
  


}