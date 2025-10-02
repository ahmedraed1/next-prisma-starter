import NewPost from "@/components/NewPost";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const users = await prisma.user.findMany();
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: true },
  });
  console.log(posts);

  const postsLength = await prisma.post.count();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Superblog
      </h1>
      <Link href="/newUser">
        <span className="text-lg font-[family-name:var(--font-geist-sans)] text-green-500">
          Add New User
        </span>
      </Link>
      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name}
          </li>
        ))}
      </ol>
      <p className="text-lg font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Total posts: {postsLength}
      </p>
      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <Link href={`/post/${post.id}`}>{post.title}</Link> by{" "}
            {post.author?.name}
          </li>
        ))}
      </ol>

      <NewPost />
    </div>
  );
}
