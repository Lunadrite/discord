import { Blog } from "../components/blog/Blog.tsx"
import silly from "../assets/Blogposts/BaseSystems/silly.jpg"
import BinarMeme from "../assets/Blogposts/BaseSystems/BinaryMEME.jpg"
import binarbreakdown from "../assets/Blogposts/BaseSystems/BinaryBreakdown.png"
import binaryshowcase from  "../assets/Blogposts/BaseSystems/Binary-Showcase.png"
import william from "../assets/Blogposts/BaseSystems/William_Sellers_small.png"

export default function Blogposts() {
    return(
        <div className="mx-[10%]">
            <Blog.Heading>A Beginner’s Guide to Base Systems</Blog.Heading>
            <Blog.SubHeading>In this article, we will learn about Base systems and the most common ones in programming!</Blog.SubHeading>
            <Blog.Image src={silly}/>
            <Blog.SubHeading>So, what are Base Systems?</Blog.SubHeading>
            <Blog.Text>Put simply, it’s just a way of expressing numbers. This way of expressing numbers can be with digits or other symbols in a consistent manner, The most common Base System you will be aware of is called Base-10 this uses the numbers from 0-9.</Blog.Text>
            <Blog.Text>Okay Nice! Now that you know that Base Systems are just counting, lets get into some common ones you will see in your programming journey!</Blog.Text>
            <Blog.SubHeading>Reading Base Systems</Blog.SubHeading>
            <Blog.Text>In this chapter, you will learn how to read the common Base Systems, along with how to write your mathematics with them! , So let’s get started with…</Blog.Text>     
            <Blog.SubHeading>Binary</Blog.SubHeading>
            <Blog.Image src={BinarMeme}/>
            <Blog.SubHeading>Why do we use binary?</Blog.SubHeading>
            <Blog.Text>The Binary Base system is as simple as a schema of 1s and 0s that offers a way of showing 2 states:</Blog.Text>
            <Blog.Image width="30%" src={binarbreakdown}/>
            <Blog.Text>You may be thinking, well, just 1’s and 0’s, not that big of a deal, right? </Blog.Text>
            <Blog.Text>But it’s a huge deal because it allows us to store data called Bits,</Blog.Text>
            <Blog.Callout>Bits = “Binary digit”</Blog.Callout>
            <Blog.Text>You might be wondering why computers don’t just use Decimal like we do. Like we said before, Binary is only ON and OFF. Well, well instead of 2 processes, it would need to do 10 process checks, which would take longer and would be harder on our hardware.</Blog.Text>
            <Blog.Text>Just like everything in our world can be broken down into matter and atoms, the online world can be broken down into only Ones and Zeros!</Blog.Text>
            <Blog.SubHeading>So, how do we calculate and add with them?</Blog.SubHeading>
            <Blog.Image width="30%" src={binaryshowcase}/>
            <Blog.Text>This looks nice to computers, and they can process this a lot faster, BUT it’s hard for humans to read and process.</Blog.Text>
            <Blog.Text>Well, we have a problem there, don't we? That’s what John William Nystrom thought too and made the system called Hexadecimal, which we cover in this next part :)</Blog.Text>
            <Blog.Image src={william}/>
            <Blog.SubHeading>Hexadecimal</Blog.SubHeading>

        
        
        </div>
  );
}