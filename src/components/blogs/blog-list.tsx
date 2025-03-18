import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Blog } from "@/types/types";
import Link from "next/link";

export function BlogList({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-6 p-3 justify-center">
      {blogs.map((blog, index) => (
        <Card
          key={index}
          className="w-96 rounded-lg overflow-hidden shadow-lg border"
        >
          {/* Blog Image */}
          <div className="relative h-48 w-full">
            <img
              src={blog.blogCoverImageLink}
              alt={blog.blogTitle}
              className="h-full w-full object-cover"
            />
          </div>

          <CardHeader className="p-4">
            {/* Blog Title */}
            <CardTitle className="text-lg font-semibold">
              {blog.blogTitle}
            </CardTitle>

            {/* Tags with Limit */}
            <div className="flex flex-wrap gap-2 mt-2">
              {blog.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs font-medium  rounded-md bg-zinc-200 text-black"
                >
                  #{tag.name}
                </span>
              ))}
              {blog.tags.length > 3 && <span className="text-xs ">...</span>}
            </div>
          </CardHeader>

          <CardContent className="p-4">
            {/* Blog Introduction */}
            <p className="text-sm line-clamp-3">{blog.blogIntro}</p>
          </CardContent>

          <CardFooter className="p-4 flex justify-between items-center border-t ">
            <Link href={`/blog/${blog.id}`}>
              <Button>Read More</Button>
            </Link>
            <p className="text-xs">{blog.blogReadTime}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
