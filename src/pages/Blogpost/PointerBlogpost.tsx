import pointersexplained from "../../assets/Blogposts/PointersExplained.png";
import pointer from "../../assets/Blogposts/pointer.jpg"
import Pageicon from "../../components/icons/Blogpost/PointerExampleUI.tsx"
import { Blog } from "../../components/blog/Blog.tsx"
import pointershortcut from "../../assets/Blogposts/pointershortcut.png"
import pointerGameMeme from "../../assets/Blogposts/GamePointerMeme.png"
import foomemory from "../../assets/Blogposts/foomemory.png"
import foomemoryaddress from "../../assets/Blogposts/foomemoryaddresspointer.png"
import voidpointer from "../../assets/Blogposts/void-pointer.png"
import smartpointers from "../../assets/Blogposts/smartpointers.webp"

export default function Blogposts() {
  return (
    <>
    <div className="mx-[10%]">
    <Blog.Heading>Understanding Pointers in C++</Blog.Heading>
    <Blog.ThumbnailImage src={pointersexplained} />
    <Blog.SubHeading> Table of contents:</Blog.SubHeading> 
    <Blog.List items={[
      "Table of contents",
      "So, what is a pointer?", 
      "Pointer Declaratiom/De-referencing",
      "So, how does this look inside the memory?",
      "Why do we even use pointers?",
      "How do we manage memory?",
      "Don't be scared of smart pointers!",
      "Conclusion"]}/>
     {/* Table of contents over */}
    <Blog.Text>
      In this article we are going to talk about the most over-complicated thing in computing, These are (drum role please) Pointers!
    </Blog.Text>
    <Blog.Image src={pointer} />
    <Blog.SubHeading> So what is a pointer?</Blog.SubHeading> 
    <Blog.Text>
      Pointers can be simply be explained in 10 words "A variable that holds a memory address as a value"
    </Blog.Text>
    <Blog.Text>
    Here's a little diagram to explain it:
    </Blog.Text>
    <Pageicon color={""} />
    <Blog.Text>Value = The date stored at the Address</Blog.Text>
    <Blog.Text>Address = Where the data "lives" in the memory</Blog.Text>
    <br/>
    <Blog.Text>You may be wondering why the Addresses all begin with 0x, and it’s simple to indicate that it is following a Value written in Hexadecimal, aka Base 16. If you want to learn more about this, I will be making an article teaching Hex along with binary, so look out for that!</Blog.Text>
    <Blog.Text>So, as we see in the diagram in the Address of <Blog.ImportantInfo>0x100000</Blog.ImportantInfo>, we have the value of 1,</Blog.Text>
    <Blog.Text>In the Address of <Blog.ImportantInfo>0x1007F8</Blog.ImportantInfo>, we have the Value of <Blog.ImportantInfo>0x100000</Blog.ImportantInfo>, which has the value of 1.</Blog.Text>
    <Blog.Text>Address <Blog.ImportantInfo>0x1007F8</Blog.ImportantInfo> is known as a Pointer Because it holds the value of an Address.</Blog.Text>
    <br/>
    <Blog.Text>It’s as simple as that! 😜</Blog.Text>
    <br/>
    <Blog.Text>If you still don't get it, here's another personal favorite metaphore i love:</Blog.Text>
    <Blog.Text>"A pointer is very much like a shortcut on a desktop."</Blog.Text>
    <Blog.Image src={pointershortcut} width='w-100'></Blog.Image>
    <Blog.Text>So now that you know that Pointers point to a specific address in memory, let’s talk more about them!</Blog.Text>
    <br/>
    <Blog.Text>The size of the pointer depends on the architecture chosen, e.g., 32 Bits = 4 bytes, 64 Bits = 8 bytes.</Blog.Text>
    <Blog.Text>The reason why this is the case is that the size is dependenton the size</Blog.Text>
    <Blog.Callout>NOT the size of the variable space, but the maximum addressable space.</Blog.Callout>
    <Blog.Text>We can also point to a place where we want to allocate memory, which is called dynamic memory allocation. We will discuss the uses of pointers later in this article! </Blog.Text>
    <Blog.Text>When declaring a pointer, you always want to set it to a Null pointer. A null pointer simply doesn't point to anywhere. We can represent that in a lot of ways!</Blog.Text>
    <Blog.Code language="cpp">{`int main(){
	int* Pointer1 = nullptr; // #1 nullptr == 0
	int* Pointer2 = NULL; // #2 NULL == 0
	int* Pointer3 = 0; // #3
	
	return 0;
          }`
}</Blog.Code>

    <Blog.Text>These all mean the same thing and you can interchange them, But I highly suggest using the first option, nullptr, Which is a lot easier to read and if you ever work with people on a project they will love you a lot more for using it, We want to declare the pointers before use for the same reason! It’s conventional, and we want to stick to this for easier-to-read code!</Blog.Text>
    <Blog.Callout>De-referencing a null pointer can lead to undefined actions. Avoid it due to it possibly leading to application crashes.</Blog.Callout>
    <Blog.SubHeading>Pointer Declaration/De-referencing</Blog.SubHeading>
    <Blog.Text>As you saw in the previous example, I used something that u may not have seen if you’re a beginner, and that is int*. The important thing is the ‘ * ’, </Blog.Text>
    <Blog.Text>In that example we where declaring a pointer which is holding a de-referenced value of int, Then we gave the pointer a name in our example i used “Pointer1”, “Pointer2” and “Pointer3”, Then gave it where the pointer points too, In that case we declared it so gave it a NULL path. </Blog.Text>
    
    <Blog.Code 
    caption="The ‘&’ Basically just means address, so reading this, it would be the Address of the variable. ">
      &variablename
    </Blog.Code>

        <Blog.Code 
    caption="Creating an int* like we talked about in the previous part!">
      int* pointerName
    </Blog.Code>

        <Blog.Code 
    caption="This syntax is for dereferencing a pointer. De-referencing just means accessing the value at the memory address.">
      *pointerName
    </Blog.Code>

    <Blog.Text>So let’s do this again after learning about these syntax rules:</Blog.Text>

    <Blog.Code language="cpp">{`#include <iostream>

int main()
{
	int foo = 4; // Declaring an int variable with value 4
	int* pFoo = nullptr; // Declaring a pointer named pX

	pFoo = &foo; // Assigning The Address of variable X to pX, we get the address with '&'

	std::cout << "Current Value of Variable X: " << foo << "\n";

	*pFoo = 3; // The dereferenced pointer of pX = 3

	std::cout << "Address of X" << pFoo << "\n";

	return 0;
}`}</Blog.Code>

    <Blog.SubHeading>So, how does this look inside the memory</Blog.SubHeading>
    <Blog.Image src={pointerGameMeme} />
    <Blog.Text>Well, first let's look at our foo memory block:</Blog.Text>
    <Blog.Image src={foomemory} />
    <Blog.Text>As you can see, in the memory address on the left, we are storing the value [04 00 00 00] in the 4 bytes we allocated for that address</Blog.Text>
    <Blog.Image src={foomemoryaddress}/>
    <Blog.Text>This is the Address and Value of the Pointer “pFoo”. You can read the address if you know about little-endian and big-endian. </Blog.Text>
    <Blog.Text>If you don't know about endian, we will be writing an article on it, so be on the lookout!</Blog.Text>
    <Blog.SubHeading>Why do we even use pointers?</Blog.SubHeading>
    <Blog.Text>There are many reasons why we use pointers in programming. Efficient memory management is one of the primary benefits of pointers, as they allow programmers to directly read from and write to specific memory locations, giving precise control over how memory is allocated and deallocated during program execution.</Blog.Text>
    <br/>
    <Blog.Text>Performance optimization is another significant advantage of using pointers, because accessing data directly through memory addresses is considerably faster than making expensive copies of data, which can dramatically improve execution speed for programs working with large amounts of information.</Blog.Text>
    <br/>
    <Blog.Text>Pointers also enable calling functions by reference rather than by value, which means functions can modify the original variables passed to them instead of working with temporary copies, making it possible to create functions that can change multiple values and return them to the calling code.</Blog.Text>
    <br/>
    <Blog.Text>When working with arrays, particularly character arrays used for strings, pointers provide a more intuitive and flexible approach to manipulating data elements, allowing for operations like substring extraction or string concatenation without unnecessary memory overhead.</Blog.Text>
    <br/>
    <Blog.Text>Finally, pointers are absolutely essential when implementing complex data structures such as linked lists or trees, where elements need to reference other elements dynamically, creating relationships that would be impossible to represent efficiently without the ability to store and follow memory addresses.</Blog.Text>
    
    <Blog.SubHeading>How do we manage memory?</Blog.SubHeading>
    <Blog.Image src={voidpointer}/>
    <Blog.Text>Memory management is an important aspect of coding in every language, but especially in low-level languages such as C/C++, where you don't have an automatic garbage collector. </Blog.Text>
    <Blog.Text>So, to prevent memory leaks and other bugs, we MUST use efficient Memory management. We use pointers! </Blog.Text>
    <Blog.Text>You may have seen I have always typed Pointers, but only showed two types, both of which are Raw pointers. Well… there are a lot more different types of pointers. Some of the most common ones would be:</Blog.Text>
    
    <Blog.Code language="cpp" caption="Null pointer (a pointer that doesn't point to any valid address)">{`int* pointerName = NULL;`}</Blog.Code>

    <Blog.Code language="cpp" caption="Void pointer (a pointer that can hold the address of any data type)">{`void* pointerName`}</Blog.Code>

    <Blog.Code language="cpp" caption="Dangling pointer (a pointer that is accessing freed memory)">{`int* pointerToMyFavouriteNumber = new int(69);
delete pointerToMyFavouriteNumber;

// Try to access the deallocated value
*pointerToMyFavouriteNumber // will result in unexpected behaviours`}</Blog.Code>

    <Blog.Code language="cpp" caption="Smart Pointers (automatically de-allocating objects when out of scope)">{`std::unique_ptr<int> pointerToFoo = std::make_unique<int>(69);
// This way, memory is automatically cleaned up when pointerToFoo goes out of scope`}</Blog.Code>

    <Blog.Code language="cpp" caption="Function pointers (a pointer that points to a function instead of a variable)">{`int foo()
{
 int goo = 5;
 return goo;
}

int (*FunctionPointer)() {&foo}; // Function Pointer pointes to the funciton & of foo`}</Blog.Code>

    <Blog.SubHeading>Don’t be scared of Smart Pointers! 👻</Blog.SubHeading>
    <Blog.Image src={smartpointers} />
    <Blog.Text>First, let’s look at a Smart pointer and what it really does. In modern C++, we use Smart pointers to abstract away the ownership of addresses. You may not know what this means, don't worry, smart pointers are complicated at the beginning of your journey.</Blog.Text>
    <Blog.Text>I also said it automatically de-allocates itself when out of scope, but what does that mean? And why do we need to deallocate it well? Not freeing that pointer will lead to Dangling pointers.</Blog.Text>
    <Blog.Text>These Dangling pointers, if dereferenced, will have undefined actions, and if you write to them, it may cause Memory Corruption, which may lead to crashes in your program.</Blog.Text>
    <Blog.Text>But to quickly sum it up, </Blog.Text>

    <Blog.Callout>Instead of holding an address like a Raw pointer, A smart pointer owns the address and takes responsibility for allocating the memory, along with de-allocating the memory automatically, so you don't need to manage it manually.</Blog.Callout>
    <Blog.Text>I will write more about Smart Pointers in another article in the future!</Blog.Text>

    <Blog.SubHeading>Conclusion</Blog.SubHeading>
    <Blog.Text>You should have the idea of what a pointer is now! </Blog.Text>
    <Blog.Callout>But remember, the best way to solidify your knowledge is to go out and experiment with pointers in your code! You won’t get it straight away since it is pretty complicated at first, but hopefully, now that you have read our blog, you will understand how the pointers in memory work!</Blog.Callout>
    <br/>
    <br/>
    <Blog.Text>Thank you for reading this article, and I hope it helped you learn more about pointers if you were confused! Have a good day!!</Blog.Text>
    
    </div>
  </>
  );
}
