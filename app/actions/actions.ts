"use server";

import prisma from "@/lib/prisma";


export async function createPost(formData: FormData) {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const authorId = formData.get("authorId") as string;
    const published = formData.get("published") as string;
    const slug = (formData.get("title") as string).toLowerCase().replace(/\s+/g, "-");
    await prisma.post.create({
        data: {
            title,
            slug,
            content,
            authorId: Number(authorId),
            published: Boolean(published),
        },
    });
}


export async function deletePost(postId: number) {
    await prisma.post.delete({ where: { id: postId } });
}

export async function createUser(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const hashedPassword = formData.get("hashedPassword") as string;
    const role = formData.get("role") as string;
    await prisma.user.create({ data: { name, email, hashedPassword, role } });
}