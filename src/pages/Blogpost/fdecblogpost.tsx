import { Blog } from "../../components/blog/Blog"
import thumbnail from "../../assets/Blogposts/FDEC/FDEChumbnail.png"
import FDECoverview from "../../assets/Blogposts/FDEC/FDE"
import catbye from "../../assets/Blogposts/CatWaveBYE.gif"
export default function Blogpost(){
    return(
        <div className="mx-[10%]">
            <Blog.Heading>The Fetch, Decode, Execute Cycle</Blog.Heading>
            <Blog.ThumbnailImage src={thumbnail}/>
            <Blog.SubHeading>Table of contents:</Blog.SubHeading>
            <Blog.List items={[
                "What is the Fetch, decode, Execute cycle?",
                "Fetch",
                "Decode",
                "Execute",
                "Cycle",
                "What is overclocking?",
                "Conclusion",
            ]}/>
            <Blog.SubHeading>What is the Fetch, decode, Execute cycle?</Blog.SubHeading>
            <Blog.Callout>In this article, whenever I mention “FDEC,” I mean the Fetch Decode Execute Cycle</Blog.Callout>
            <Blog.Text>The FDEC is important to learn since it’s the basis of the CPU architecture and defines how the CPU runs in a step-by-step process</Blog.Text>
            <Blog.Text>First, let’s describe the idea of the FDEC in a metaphor for you to understand easily:</Blog.Text>
            <Blog.Text>Fetch</Blog.Text>
            <Blog.List items={["The CPU asks for boxes from the RAM and sends them to a specific place."]}/>
            <Blog.Text>Decode</Blog.Text>
            <Blog.List items={["Inside the CPU’s Office, they ask where the specific place is for the boxes."]}/>
            <Blog.Text>Execute</Blog.Text>
            <Blog.List items={["The ALU takes these boxes and does simple math for a finished result."]}/>
            
            <FDECoverview/>
            

            <Blog.Text>So let’s talk about what's going on in this diagram!</Blog.Text>
            <Blog.SubHeading>Fetching</Blog.SubHeading>
            <Blog.Text>Let’s first focus on how we are fetching instructions, </Blog.Text>
            <Blog.Text>We start in the Register PC, also known as the process counter, </Blog.Text>
            <Blog.Text>This counter starts at 0 and sends a signal through the Address Bus of its number [0],</Blog.Text>
            <Blog.Text>The Address Bus goes to the RAM, it searches for the instruction at Index [0],</Blog.Text>
            <Blog.Text>It then brings back the instruction using the Data Bus,</Blog.Text>
            <Blog.Text>The instruction is then put into the Register MAR, also known as Memory Address Register.</Blog.Text>
            <Blog.SubHeading>Decoding</Blog.SubHeading>
            <Blog.Text>Next, we have to decode the instruction before it can run. In this process, the control unit is used to work out what signals to send to other components.</Blog.Text>
            <Blog.Text>So the control unit decodes the LOAD 4 to mean load the value at location 4 in the RAM into the Accumulator to temporarily store data. </Blog.Text>
            <Blog.SubHeading>Executing</Blog.SubHeading>
            <Blog.Text>Finally, we are onto Execution!</Blog.Text>
            <Blog.Text>PC loads the next cycle, which is ADD 4 </Blog.Text>
            <Blog.Text>So the ALU takes the LOAD 4, which was the value 7, and ADDS 4</Blog.Text>
            <Blog.Text>This brings the end of the cycle with the value 11 in the Accumulator and in the MDR Register.</Blog.Text>
            <Blog.SubHeading>Cycle</Blog.SubHeading>
            <Blog.Text>You start the process all over again!</Blog.Text>
            <Blog.SubHeading>Overclocking</Blog.SubHeading>
            <Blog.Text>Overclocking is simply speeding up this cycle, This is why it’s mostly better to just stick to your systems base speed instead of trying to increase it, as these errors can cause system crashes.</Blog.Text>
            <Blog.Text>Just to show how much strain it puts on your system, just try saying,</Blog.Text>
            <Blog.Text>“Fetch, decode, execute” over and over and over again, eventually you will make a mistake; this is the exact risk of overclocking.</Blog.Text>
            <Blog.Callout>Fun fact, the FDEC’s Speed and Efficiency can be drastically improved by the architecture of the CPU and the type of RAM used (DDR2/DDR3/DDR4…)</Blog.Callout>
            <Blog.SubHeading>Conclusion</Blog.SubHeading>
            <Blog.Text>You should have the idea of what fetch decode execute is now! </Blog.Text>
            <Blog.Callout>But remember, the best way to solidify your knowledge is to go out and learning more about the fetch, decode, execute cycle! It’s a fundamental that is very important in building the base blocks of understanding computing</Blog.Callout>
            <Blog.Text>Thank you for reading this article! I hope it helped you learn more about the fetch decode, and execute cycle!</Blog.Text>
            <Blog.Text>Have an amazing day, drink some water</Blog.Text>
            <Blog.Text>Have a good day!</Blog.Text>
            <Blog.Image src={catbye} />
        </div>

    )
}