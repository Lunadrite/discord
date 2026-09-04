import { Blog } from "../../components/blog/Blog.tsx"
import silly from "../../assets/Blogposts/BaseSystems/silly.jpg"
import BinarMeme from "../../assets/Blogposts/BaseSystems/BinaryMEME.jpg"
import binarbreakdown from "../../assets/Blogposts/BaseSystems/BinaryBreakdown.png"
import binaryshowcase from  "../../assets/Blogposts/BaseSystems/Binary-Showcase.png"
import william from "../../assets/Blogposts/BaseSystems/William_Sellers_small.png"
import hexmeme from "../../assets/Blogposts/BaseSystems/hexmeme.png"
import basesystemrep from "../../assets/Blogposts/BaseSystems/Base-10-16-Showcase.png"
import hexbreakdown from "../../assets/Blogposts/BaseSystems/Hex-Breakdown.png"
import catWave from "../../assets/Blogposts/CatWaveBYE.gif"

export default function Blogposts() {
    return(
        <div className="mx-[10%]">
            <Blog.Heading>A Beginner’s Guide to Base Systems</Blog.Heading>
            <br></br>

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
            <Blog.Image src={hexmeme}/>
            <Blog.SubHeading>Why do we use Hexadecimal?</Blog.SubHeading>
            <Blog.Text>We use hexadecimal because it’s useful to display large numbers using fewer digits, </Blog.Text>
            <Blog.Text>For example, representing color values and MAC addresses. In addition to this, once you learn Hex, it’s easier to read than binary! </Blog.Text>
            <Blog.Text>Being able to show large numbers is used to display memory to the user, and we use to to define the location in memory we want to use, or display. Doing this in Binary would be way too large to read and keep track of.  </Blog.Text>
            <Blog.Text>So let’s get started on how to read it!</Blog.Text>
            <Blog.Image width="50%" src={basesystemrep}/>
            <Blog.Text>In this diagram, you can see that in base 16 we continue from 9 and go to A, </Blog.Text>
            <Blog.Text>A in Hex is 10</Blog.Text>
            <Blog.Text>F in Hex is 15,</Blog.Text>
            <Blog.Text>Knowing this, you can fill in the gaps! So let’s go on to learn how to read examples such as 0xF8</Blog.Text>
            <Blog.Image width="50%" src={hexbreakdown}/>
            <Blog.Callout>“0x” is just a notation device we use to show we are using Hexadecimal.</Blog.Callout>
            <Blog.SubHeading>Conclusion</Blog.SubHeading>
            <Blog.Text>You should have the idea of what the basic Base addresses are now! </Blog.Text>
            <Blog.Text>Remember that learning a new base system can be hard, so don't worry about not getting it straight away! Even if you come back to it and know it once, you need to learn it.</Blog.Text>
            <Blog.Text>Thank you for reading this article, and I hope it helped you learn more about Base Addresses if you where confused! </Blog.Text>
            <Blog.Text>Have a good day!</Blog.Text>
            <Blog.Image src={catWave}/>
        
        </div>
  );
}