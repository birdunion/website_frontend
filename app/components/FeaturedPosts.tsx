import type { Post } from "~/types";

import PostCard from "./PostCard";

type FeaturedPostProps = {
  posts: Post[];
  limit?: number;
};

const FeaturedPosts = ({ posts, limit = 4 }: FeaturedPostProps) => {
  if (posts.length === 0) return null;

  const latestPosts = [...posts]
    .sort((a: Post, b: Post) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, limit);

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Featured Posts</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {latestPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export default FeaturedPosts;
