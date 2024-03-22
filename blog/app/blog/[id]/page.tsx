import Tag from "@/components/ui/Tag";
import Image from "next/image";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { PostTypes } from "@/types/postTypes";
import { formatDate } from "@/utils/formatDate";

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const page = async ({ params }: { params: PostTypes }) => {
  const { id } = params;
  const post = await getData(id);
  return (
    <div className="flex flex-col gap-10 w-full align-middle items-start lg:p-10 p-3 mx-auto">
      <div className="mt-[120px]">

      </div>
      <h2 className="lg:text-7xl text-4xl font-bold uppercase">
        {post.title}
      </h2>
      <div className="w-full h-[400px] relative mb-5">
        <Image
          fill
          alt="image for blog"
          src={post.img}
          className="object-cover"
        />
      </div>

      <Tag text={post.category} />

      <div className=" flex w-fullmd:gap-20 gap-5 relative mt-10 md:flex-row flex-col">

        <article>
          <p className="text-xl">{post.desc}</p>

          <div className="mt-5 flex gap-5 items-center">
            <Image
              src={post.user.image}
              width={100}
              height={100}
              alt={`Image of ${post.authorName}`}
              className="rounded-full w-12 h-12 object-cover"
            />
            <div className="flex gap-1 flex-col">
              <span>{post.user.name}</span>
              <span>{formatDate(post.createdAt)}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default page;
