"use client";

import React from "react";
import { deletePost } from "@/app/actions/actions";
import { redirect } from "next/navigation";

export default function DeletingPost({ postId }: { postId: number }) {
  return (
    <button
      onClick={async () => {
        await deletePost(postId);
        redirect("/");
      }}
      className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
    >
      Delete
    </button>
  );
}
