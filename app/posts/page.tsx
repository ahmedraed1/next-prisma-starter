import { getPosts } from "@/app/actions/actions";
import PostsList from "@/components/PostsList";

export default async function Page() {
  const posts = await getPosts();
  return <PostsList initialPosts={posts} />;
}
