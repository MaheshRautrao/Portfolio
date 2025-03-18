import { BlogList } from "@/components/blogs/blog-list";
import { blogs } from "@/data/blogs";

export default function BlogsPage() {
  return (
    <div>
      <BlogList blogs={blogs} />
    </div>
  );
}
