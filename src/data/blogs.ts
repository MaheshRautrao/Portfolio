import { Blog } from "@/types/types";

export const blogs: Blog[] = [
  {
    id: "1",
    blogTitle: "Automapper in C#",
    blogLink: "Next.js",
    blogCoverImageLink: "/blogImages/automapper.png",
    blogIntro: `When building applications, especially those that handle data
                  from different sources, you often find yourself copying values
                  from one object to another...`,
    blogContent: `
<h1>Introduction to AutoMapper in C#</h1>

<p><strong>#csharp #oop #programming #tutorial</strong></p>

<p>
  When building applications, especially those that handle data from different sources, you often find yourself copying values from one object to another. 
  This process can be repetitive and error-prone, but there's a solution that can save you time and make your code cleaner: AutoMapper.
</p>

<p>
  In this article, we’ll dive into what AutoMapper is, when and why you should use it, and its benefits. 
  I'll also provide some easy-to-follow examples to help you understand how it works.
</p>

<hr>

<h2>What is AutoMapper?</h2>

<p>
  AutoMapper is a popular object-to-object mapping library in C#. It helps developers automatically map data between objects that have similar structures. 
  Instead of writing tedious and repetitive code to copy values from one object to another, AutoMapper takes care of this process for you.
</p>

<hr>

<h2>When Should You Use AutoMapper?</h2>

<p>AutoMapper is particularly useful in scenarios where you need to map data between two different layers or models in your application. Here are a few common situations:</p>

<ul>
  <li>
    <strong>Mapping between Database Entities and DTOs (Data Transfer Objects):</strong> 
    When working with web APIs, you often need to convert database models into simpler objects that you send to the client. AutoMapper makes this conversion easy.
  </li>
  <li>
    <strong>Mapping between Different Layers:</strong> 
    If you have a service layer that needs to return data in a different format than what's stored in your data layer, AutoMapper can handle the transformation.
  </li>
  <li>
    <strong>Mapping between View Models and Domain Models:</strong> 
    In MVC or MVVM patterns, AutoMapper can help you convert data from your domain models to the view models that are used in your UI.
  </li>
</ul>

<hr>

<h2>Why Use AutoMapper?</h2>

<p>Using AutoMapper can significantly simplify your codebase. Here’s why:</p>

<ul>
  <li><strong>Reduces Boilerplate Code:</strong> No need to manually copy each property from one object to another.</li>
  <li><strong>Improves Maintainability:</strong> If your object structures change, you only need to update your mapping configuration in one place.</li>
  <li><strong>Increases Readability:</strong> AutoMapper configurations are easy to understand, making your code more readable.</li>
</ul>

<hr>

<h2>Benefits of AutoMapper</h2>

<ul>
  <li><strong>Automatic Mapping:</strong> Matches properties by name automatically.</li>
  <li><strong>Custom Mappings:</strong> Easily configure mappings for properties that don’t match by name.</li>
  <li><strong>Flexible and Extensible:</strong> Handles complex mappings, including nested objects and collections.</li>
  <li><strong>Performance:</strong> Adds a slight overhead but is generally efficient for most applications.</li>
</ul>

<hr>

<h2>Example: Mapping Between a User Model and a DTO</h2>

<p>Let’s walk through an example to see AutoMapper in action.</p>

<h3>Scenario</h3>

<p>Imagine you have a <code>User</code> model that represents data from your database:</p>

<pre><code class="language-csharp">public class User
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime DateOfBirth { get; set; }
}
</code></pre>

<p>You want to send this data to a client through an API, but you don’t want to expose all the properties. Instead, you want to send a simplified version of the object using a <code>UserDto</code>:</p>

<pre><code class="language-csharp">public class UserDto
{
    public int Id { get; set; }
    public string FullName { get; set; }
}
</code></pre>

<hr>

<h2>Setting Up AutoMapper</h2>

<p>First, install AutoMapper via NuGet:</p>

<pre><code class="language-bash">dotnet add package AutoMapper</code></pre>

<p>Next, configure AutoMapper to map from <code>User</code> to <code>UserDto</code>:</p>

<pre><code class="language-csharp">var config = new MapperConfiguration(cfg => 
{
    cfg.CreateMap<User, UserDto>()
       .ForMember(dest => dest.FullName, 
                  opt => opt.MapFrom(src => $"{src.FirstName} {src.LastName}"));
});

var mapper = config.CreateMapper();
</code></pre>

<p>Explanation:</p>

<ul>
  <li><code>CreateMap&lt;User, UserDto&gt;()</code> tells AutoMapper to map from the <code>User</code> class to the <code>UserDto</code> class.</li>
  <li><code>ForMember(dest => dest.FullName, opt => opt.MapFrom(src => $"{src.FirstName} {src.LastName}"))</code> specifies that the <code>FullName</code> property in <code>UserDto</code> should be created by combining the <code>FirstName</code> and <code>LastName</code> properties from the <code>User</code> class.</li>
</ul>

<hr>

<h2>Using AutoMapper</h2>

<p>Now, you can use AutoMapper to map a <code>User</code> object to a <code>UserDto</code>:</p>

<pre><code class="language-csharp">User user = new User 
{
    Id = 1,
    FirstName = "John",
    LastName = "Doe",
    DateOfBirth = new DateTime(1990, 1, 1)
};

UserDto userDto = mapper.Map&lt;UserDto&gt;(user);

Console.WriteLine(userDto.FullName); // Output: John Doe
</code></pre>

<p>AutoMapper automatically transfers the data, applying the custom logic you defined for the <code>FullName</code> property.</p>

<hr>

<h2>Conclusion</h2>

<p>
  AutoMapper is a powerful tool that can make your life as a developer much easier by reducing boilerplate code and improving the maintainability and readability of your code. 
  Whether you’re working with database entities, DTOs, view models, or any other types of objects, AutoMapper can help you quickly and efficiently map data between them.
</p>

<p><strong>Give it a try in your next project, and see how it simplifies your code!</strong></p>


  `,
    blogReadTime: "1 min read",
    tags: [
      { name: "C#" },
      { name: ".NET" },
      { name: "AutoMapper" },
      { name: "Object Mapping" },
      { name: "Dependency Injection" },
      { name: ".NET Core" },
      { name: "Data Transformation" },
      { name: "DTO" },
      { name: "Code Optimization" },
      { name: "Entity Framework" },
      { name: "ASP.NET Core" },
      { name: "C# Best Practices" },
      { name: "Performance Optimization" },
    ],
  },
];
