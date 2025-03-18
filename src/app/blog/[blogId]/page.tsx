import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  BlogContent,
  BlogCoverImage,
  BlogHeading,
  BlogReadTime,
  BlogSection,
  BlogTags,
  BlogTitle,
  CodeLabel,
  StrongContent,
} from "@/components/blogs/formatting-components";

function getBlogById(blogId: string) {
  return blogs.find((blog) => blog.id === blogId);
}

export default function BlogDetailsPage({
  params,
}: {
  params: { blogId: string };
}) {
  const { blogId } = params; // Dynamic route parameter
  const blog = getBlogById(blogId);

  // If blog not found, show 404
  if (!blog) return notFound();

  return (
    <div className="px-48 py-10">
      <div className="flex justify-center flex-col pb-10 leading-loose">
        {/* Blog Cover Image */}
        <BlogCoverImage
          blogCoverImageLink={blog.blogCoverImageLink}
          blogTitle={blog.blogTitle}
        />

        <div>
          {/* Blog Title */}
          <BlogTitle blogTitle={blog.blogTitle} />

          {/* Blog Meta (Read Time) */}
          <BlogReadTime blogReadTime={blog.blogReadTime} />

          <BlogTags tags={blog.tags} />

          {/* Blog Content */}
          <div className="mt-6">
            <div className="flex gap-12 flex-col">
              <div>
                <BlogContent>
                  When building applications, especially those that handle data
                  from different sources, you often find yourself copying values
                  from one object to another. This process can be repetitive and
                  error-prone, but there&apos;s a solution that can save you
                  time and make your code cleaner: AutoMapper.
                </BlogContent>

                <BlogContent>
                  In this article, we’ll dive into what AutoMapper is, when and
                  why you should use it, and its benefits. I&apos;ll also
                  provide some easy-to-follow examples to help you understand
                  how it works.
                </BlogContent>
              </div>

              <BlogSection
                heading="What is AutoMapper?"
                content="  AutoMapper is a popular object-to-object mapping library in
                  C#. It helps developers automatically map data between objects
                  that have similar structures. Instead of writing tedious and
                  repetitive code to copy values from one object to another,
                  AutoMapper takes care of this process for you."
              />

              <BlogSection
                heading="When Should You Use AutoMapper?"
                content="AutoMapper is particularly useful in scenarios where you need to map data between two different layers or models in your application. Here are a few common situations:"
                list={[
                  {
                    title:
                      "Mapping between Database Entities and DTOs (Data Transfer Objects):",
                    description:
                      "When working with web APIs, you often need to convert database models into simpler objects that you send to the client. AutoMapper makes this conversion easy.",
                  },
                  {
                    title: "Mapping between Different Layers:",
                    description:
                      "If you have a service layer that needs to return data in a different format than what's stored in your data layer, AutoMapper can handle the transformation.",
                  },
                  {
                    title: "Mapping between View Models and Domain Models:",
                    description:
                      "In MVC or MVVM patterns, AutoMapper can help you convert data from your domain models to the view models that are used in your UI.",
                  },
                ]}
              />

              <BlogSection
                heading="Why Use AutoMapper?"
                content="Using AutoMapper can significantly simplify your codebase. Here’s why:"
                list={[
                  {
                    title: "Reduces Boilerplate Code:",
                    description:
                      "No need to manually copy each property from one object to another.",
                  },
                  {
                    title: "Improves Maintainability:",
                    description:
                      "If your object structures change, you only need to update your mapping configuration in one place.",
                  },
                  {
                    title: "Increases Readability:",
                    description:
                      "AutoMapper configurations are easy to understand, making your code more readable.",
                  },
                ]}
              />

              <BlogSection
                heading="Benefits of AutoMapper"
                list={[
                  {
                    title: "Automatic Mapping:",
                    description: "Matches properties by name automatically.",
                  },
                  {
                    title: "Custom Mappings:",
                    description:
                      "Easily configure mappings for properties that don’t match by name.",
                  },
                  {
                    title: "Flexible and Extensible:",
                    description:
                      "Handles complex mappings, including nested objects and collections.",
                  },
                  {
                    title: "Performance:",
                    description:
                      "Adds a slight overhead but is generally efficient for most applications.",
                  },
                ]}
              />

              <div>
                <h2 className="text-3xl font-semibold mb-5">
                  Example: Mapping Between a User Model and a DTO
                </h2>

                <p>
                  Let’s walk through an example to see AutoMapper in action.
                </p>

                <h3>Scenario</h3>

                <p>
                  Imagine you have a <code>User</code> model that represents
                  data from your database:
                </p>

                <pre>
                  <SyntaxHighlighter
                    language="csharp"
                    style={dracula}
                    wrapLongLines={true}
                  >
                    {`public class User 
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime DateOfBirth { get; set; }
}`}
                  </SyntaxHighlighter>
                </pre>

                <p>
                  You want to send this data to a client through an API, but you
                  don’t want to expose all the properties. Instead, you want to
                  send a simplified version of the object using a{" "}
                  <span className="border px-2 rounded-md py-0.5 bg-zinc-200 dark:text-black">
                    UserDto
                  </span>
                </p>

                <pre>
                  <SyntaxHighlighter
                    language="csharp"
                    style={dracula}
                    wrapLongLines={true}
                  >
                    {`public class UserDto 
{
    public int Id { get; set; }
    public string FullName { get; set; }
}`}
                  </SyntaxHighlighter>
                </pre>
              </div>

              <div>
                <h2 className="text-3xl font-semibold mb-5">
                  Setting Up AutoMapper
                </h2>

                <p>First, install AutoMapper via NuGet:</p>

                <pre>
                  <SyntaxHighlighter
                    language="bash"
                    style={dracula}
                    wrapLongLines={true}
                  >
                    {`dotnet add package AutoMapper`}
                  </SyntaxHighlighter>
                </pre>

                <p>
                  Next, configure AutoMapper to map from{" "}
                  <CodeLabel label="User" /> to <CodeLabel label="UserDto" />
                </p>

                <pre>
                  <SyntaxHighlighter
                    language="csharp"
                    style={dracula}
                    wrapLongLines={true}
                  >
                    {`var config = new MapperConfiguration(cfg => 
{
    cfg.CreateMap<User, UserDto>()
       .ForMember(dest => dest.FullName, 
                  opt => opt.MapFrom(src => $"{src.FirstName} {src.LastName}"));
});

var mapper = config.CreateMapper();`}
                  </SyntaxHighlighter>
                </pre>

                <p>Explanation:</p>

                <ul>
                  <li>
                    <SyntaxHighlighter
                      language="csharp"
                      style={dracula}
                      wrapLongLines={true}
                    >
                      {`CreateMap<User, UserDto>()`}
                    </SyntaxHighlighter>{" "}
                    tells AutoMapper to map from the <CodeLabel label="User" />{" "}
                    class to the <CodeLabel label="UserDto" />
                    class.
                  </li>
                  <li>
                    <SyntaxHighlighter
                      language="csharp"
                      style={dracula}
                      wrapLongLines={true}
                    >
                      {`ForMember(dest => dest.FullName, opt =>
    opt.MapFrom(src => $" {src.FirstName} {src.LastName}"))`}
                    </SyntaxHighlighter>{" "}
                    specifies that the <CodeLabel label="FullName" /> property
                    in <CodeLabel label="UserDto" /> should be created by
                    combining the <CodeLabel label="FirstName" /> and{" "}
                    <CodeLabel label="LastName" /> properties from the{" "}
                    <CodeLabel label="User" /> class.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-semibold mb-5">
                  Using AutoMapper
                </h2>

                <p>
                  Now, you can use AutoMapper to map a <code>User</code> object
                  to a <code>UserDto</code>:
                </p>

                <SyntaxHighlighter
                  language="csharp"
                  style={dracula}
                  wrapLongLines={true}
                >
                  {`User user = new User 
{
    Id = 1, 
    FirstName = "John", 
    LastName = "Doe", 
    DateOfBirth = new DateTime(1990, 1, 1) 
};

UserDto userDto = mapper.Map<UserDto>(user);
Console.WriteLine(userDto.FullName); // Output: John Doe`}
                </SyntaxHighlighter>

                <p>
                  AutoMapper automatically transfers the data, applying the
                  custom logic you defined for the{" "}
                  <CodeLabel label="FullName" /> property.
                </p>
              </div>
              <div>
                <BlogHeading>Conclusion</BlogHeading>

                <BlogContent>
                  AutoMapper is a powerful tool that can make your life as a
                  developer much easier by reducing boilerplate code and
                  improving the maintainability and readability of your code.
                  Whether you’re working with database entities, DTOs, view
                  models, or any other types of objects, AutoMapper can help you
                  quickly and efficiently map data between them.
                </BlogContent>

                <StrongContent text="Give it a try in your next project, and see how it simplifies your code!" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
