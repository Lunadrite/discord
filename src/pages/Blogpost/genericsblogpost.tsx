import { Blog } from "../../components/blog/Blog"
import thumbnail from "../../assets/Blogposts/Generics/An intro to generics in c++.png"
import catbye from "../../assets/Blogposts/CatWaveBYE.gif"

export default function Blogposts() {
  return (
    <div className="mx-[10%]">
    <Blog.Heading>An intro to Generics in c++</Blog.Heading>
    <Blog.ThumbnailImage src={thumbnail}/>
    <Blog.Text>Generic Programming, also known as parametric polymorphism, is a SUPER cool thing to learn, so I hope I can show you today. Let's get straight into it!</Blog.Text>
    <Blog.SubHeading>What is Generic Programming?</Blog.SubHeading>
    <Blog.Text>Generic programming is a style of computer programming where algorithms are written with a type that can be specified later. This is amazing since it allows us to avoid duplication in our code and keep it very simple for us to create one block that controls if for example a string is entered. Still, we can reuse this code for an integer without changing anything.</Blog.Text>
    <Blog.Callout>What helped me to understand it is thinking of it like a function with an auto keyword</Blog.Callout>
    <Blog.Callout>Auto keyword assumes you have a type, Generics, you are making one.</Blog.Callout>
    <Blog.SubHeading>What are the Benefits of Generics?</Blog.SubHeading>
    <Blog.Text>If any future data types are added to the language of your choice, it’s future-proofed already! This allows for less time in the future that you need to spend on fixing or redoing when a new language version is released.</Blog.Text>
    <Blog.Text>Stronger type-checking is one of the most important, because it saves time by fending off ClassCastException’s that might be thrown at runtime.</Blog.Text>
    <Blog.Callout>It allows us to abstract away data types, allowing you to reuse code and maintain the ability!</Blog.Callout>
    <Blog.SubHeading>What are Templates?</Blog.SubHeading>
    <Blog.Text>Generics can be implemented in C++ using Templates!</Blog.Text>
    <Blog.Text>Templates are very simple but very powerful, The idea is to pass the data type as a parameter. So a template is defined, the compiler can use the template to generate as many overloaded functions (or classes) as needed, each using different actual types!</Blog.Text>
    <Blog.Text>C++ supports 3 different kinds of template parameters:</Blog.Text>
    <Blog.List items={[
      "Type template parameters (where the template parameter represents a type).",
      "Non-type template parameters (where the template parameter represents a constexpr value).",
      "Template template parameters (where the template parameter represents a template)."

    ]}/>
    <Blog.SubHeading>Naming Convention</Blog.SubHeading>
    <Blog.Text>When we name Templates you may be wondering why do we use “T”, well its pretty simple!</Blog.Text>
    <Blog.Text>T can stand for many things but the common name is Type or even Template, But we always but it in, Its a quick placeholder name that is just universally used! So what happens if we want to make another template? Well T is used to we go to the next letter in the alphabet which is (T,U,V, ect.. ) </Blog.Text>
    <Blog.SubHeading>Example Of Generics in C++</Blog.SubHeading>
    <Blog.SubHeading>Generic Functions using Template</Blog.SubHeading>
    <Blog.Code language="cpp" caption="Allows the add function to take multiple data types, whether it be int, double, or float.">
    {`#include <iostream>

template <typename T>
T add(T num1, T num2)
{
	return number1 + number2;
}

int main()
{
	auto result = add(1.3, 9.2);
	return 0;
}
    `}</Blog.Code>
    <br></br>

      <Blog.Text>So why did we use Generics here? Well, say if we wanted to get the max of a float value, but we only made the add function for integers. When we pass in a float, for example, the function would return an error because that's not the argument the function is expecting. </Blog.Text>
      <Blog.Text>So, to bypass function overload by using the C++ Feature called Templates, which we talked about!</Blog.Text>
      <Blog.SubHeading>Generic Class using Template:</Blog.SubHeading>
      
      <Blog.Code language="cpp" caption="Version of the class is created and replaces { N } with 5">
      {`#include <iostream>
#include <string>

template<int N> 
class Array
{
Private:
			int m_Array[N];
public:
			int GetSize() const { return N;}
};

int main()
{
		Array<5> array;
		return 0;
}
      `}
      </Blog.Code>
        <br></br>
      <Blog.Text>What we are doing here is making a normal C style array with templates, Arrays need a value at compile time which Templates do So its possible for us to make an int instead of a typename template at Compile time and use it in an array!</Blog.Text>

      <Blog.Code language="cpp" caption="As you can see, we can declare multiple templates simultaneously. In this case, we are making the type a variable, so we want to choose what type this array stores at compile time!">
        {`
        #include <iostream>
#include <string>

template<typename T,int N> 
class Array
{
private:
			T m_Array[N];
public:
			T GetSize() const { return N;}
};

int main()
{
		Array<int, 5> array;
		// Array<std::string, "Hello World" > array;
		// Array<float, 3.141592 > array;
		return 0;
}

        `}

      </Blog.Code>
        <br></br>
      <Blog.Text>This is a basic introduction introduction to how powerful Templates can be in C++ but remember with great power comes great responsibility and overusing Templates can be a lot more confusing for you and the people you work with if something goes wrong with a very complex Template system, Use Templates where needed but remember sometimes its better to manually write these to better keep track of your code!</Blog.Text>
      
      <Blog.SubHeading>Conclusion</Blog.SubHeading>
      <Blog.Text>You should have the idea of what generics are now! </Blog.Text>
      <Blog.Callout>But remember, the best way to solidify your knowledge is to go out and learn more about templates! It's an advanced topic that is very important for keeping your code base small and creating these small blueprints for you to reuse.</Blog.Callout>
      <Blog.Text>Thank you for reading this article, and I hope it helped ou learn more about Generics if you were confused!</Blog.Text>
      <Blog.Text>Have a good day!</Blog.Text>
      <Blog.Image src={catbye}/>
    </div>
  )
}