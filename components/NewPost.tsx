import React from "react";
import { createPost } from "@/app/actions/actions";
import prisma from "@/lib/prisma";

export default async function NewPost() {
  const users = await prisma.user.findMany();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        New Post
      </h2>
      <form action={createPost}>
        {users.length === 0 && (
          <p className="text-red-500">No users available</p>
        )}
        {users.length > 0 && (
          <select name="authorId" id="authorId">
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        )}
        <input
          type="text"
          placeholder="Title"
          id="title"
          name="title"
          className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        <textarea
          id="content"
          name="content"
          placeholder="Content"
          className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        <label htmlFor="published">Published :</label>
        <input type="checkbox" name="published" id="published" />
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
