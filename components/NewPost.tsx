import React from "react";
import prisma from "@/lib/prisma";

export default function NewPost() {
  async function crateNewPost(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const slug = formData.get("slug") as string;
    await prisma.post.create({
      data: {
        title,
        slug,
        content,
        authorId: 1,
      },
    });
  }
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        New Post
      </h2>
      <form action={crateNewPost}>
        <input
          type="text"
          placeholder="Title"
          id="title"
          name="title"
          className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        <input
          type="text"
          placeholder="Slug"
          id="slug"
          name="slug"
          className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        <textarea
          id="content"
          name="content"
          placeholder="Content"
          className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
