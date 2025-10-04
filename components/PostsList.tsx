"use client";

import { useState } from "react";
import { Post } from "../app/generated/prisma/client";

export default function PostsList({ initialPosts }: { initialPosts: Post[] }) {
  const [posts, setPosts] = useState(initialPosts);
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <span>{post?.createdAt?.toLocaleDateString()}</span>
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-700">{post.content}</p>
          <p>by {post?.author?.name}</p>
        </div>
      ))}
    </div>
  );
}
