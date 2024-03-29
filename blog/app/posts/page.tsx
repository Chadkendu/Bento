import prisma from "@/lib/prismadb";
import getCurrentUser from "../actions/getCurrentUser";
import BlogCard from "@/components/shared/BlogCard";
import DeletePosts from "@/components/shared/DeletePosts";

const Explorepage = async () => {
  const user = await getCurrentUser();
  const posts = await prisma.blog.findMany({
    where: {
      userEmail: user?.email ?? undefined,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
    },
  });
  return (
    <div className="w-full flex justify-center items-center lg:p-10 p-3">
      {!user ? (
        <h1 className="text-3xl font-extrabold">Sign in to view post!</h1>
      ) : (
        <div className="mt-[180px] w-full">
          <div className="w-full text-start mb-20 flex flex-col gap-10 align-middle items-start">
            <h1 className="lg:text-7xl text-3xl uppercase font-bold">
              Hello {user?.name} !
            </h1>
            <span className="text-lg">
              You have published {posts.length} posts
            </span>
          </div>
          <div className="grid w-full lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-center items-center gap-10">
            {posts.map((post) => (
              <div key={post.id} className="relative ">
                <BlogCard post={post as any} />
                <DeletePosts post={post as any} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Explorepage;
