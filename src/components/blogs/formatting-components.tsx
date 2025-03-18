export function BlogCoverImage({ blogCoverImageLink, blogTitle }) {
  return (
    <div className="relative mb-6 flex flex-col justify-center">
      <img
        src={blogCoverImageLink}
        alt={blogTitle}
        className="w-full h-96 object-fill"
      />
    </div>
  );
}

export function BlogTitle({ blogTitle }) {
  return <h1 className="text-5xl font-semibold leading-tight">{blogTitle}</h1>;
}

export function BlogReadTime({ blogReadTime }) {
  return <p className="text-sm mt-2">{blogReadTime}</p>;
}

export function BlogTags({ tags }) {
  return (
    <div className="flex gap-2 flex-wrap mt-2">
      {tags.map((tag, index) => (
        <span key={index} className="border px-2 rounded-md text-sm">
          {tag.name}
        </span>
      ))}
    </div>
  );
}

export function BlogSection({ heading, content, list }) {
  return (
    <div>
      {heading && <BlogHeading>{heading}</BlogHeading>}
      {content && <BlogContent>{content}</BlogContent>}
      {list && <BlogUnorderedList items={list} />}
    </div>
  );
}

export function BlogUnorderedList({ items }) {
  return (
    <ul className="mt-3 gap-3 flex flex-col">
      {items.map((item, index) => (
        <li key={index}>
          <strong className="before:content-['•'] before:mr-2">
            {item.title}
          </strong>{" "}
          {item.description}
        </li>
      ))}
    </ul>
  );
}

export function BlogContent({ children }) {
  return <p>{children}</p>;
}

export function BlogHeading({ children }) {
  return <h2 className="text-3xl font-semibold mb-5">{children}</h2>;
}

export function CodeLabel({ label }) {
  return (
    <span className="border px-2 rounded-md py-0.5 bg-zinc-200 dark:text-black">
      {label}
    </span>
  );
}

export function StrongContent({ text }) {
  return (
    <p className="mt-3">
      <strong>{text}</strong>
    </p>
  );
}
