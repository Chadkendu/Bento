import Image from "next/image";
import Tag from "../ui/Tag";
import Link from "next/link";
import { PostTypes } from "@/types/postTypes";

const BlogCard: React.FC<{ post: PostTypes }> = ({ post }) => {
  return (
    <article className="w-full rounded-lg overflow-hidden flex flex-col gap-10 align-middle items-start">
      <Link
        href={`/blog/${post.id}`}
        className="cursor-pointer w-full rounded-lg flex flex-col gap-5 align-middle items-start bg-white shadow-sm p-5"
      >
        <div className="w-full rounded-lg">
          {post.img && (
            <Image
              src={post.img}
              fill
              alt={`image for ${post.title}`}
              className="object-cover"
            />
          )}
        </div>
        <div className="w-full flex mt-10 flex-col gap-5 align-middle items-start">
          <div className="w-full flex justify-between align-middle gap-10 items-center">
            <h3 className="text-3xl font-extrabold uppercase">{post.title}</h3>
            <Tag text={post.category} />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
