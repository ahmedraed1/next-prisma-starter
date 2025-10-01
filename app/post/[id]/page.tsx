import React from "react";
import prisma from "@/lib/prisma";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
      published: true,
    },
    include: {
      author: true,
    },
  });

  if (!post) {
    return (
      <div>
        <h1>Post {id}</h1>
        <p>Post not found</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Post {id}</h1>
      <p>Loading post...</p>
      <p>{post.title}</p>
      <p>by {post.author?.name}</p>
      <p>Published on {post.createdAt.toDateString()}</p>
      <p>{post.content}</p>
    </div>
  );
}
