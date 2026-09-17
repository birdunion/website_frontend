import type { StrapiBlog, StrapiResponse, Post } from "~/types";
import type { Route } from "./+types";
import { useState } from "react";

import PostCard from "~/components/PostCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Bird Union | Blog" },
    {
      name: "description",
      content: "The blog of the Bird Union",
    },
  ];
}

export async function loader({ request }: Route.LoaderArgs): Promise<{ posts: Post[] }> {
  const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
  const res = await fetch(`${STRAPI_URL}/blogs?populate=image&sort=date:desc`);

  if (!res.ok) throw new Error("Failed to fetch data");

  const json: StrapiResponse<StrapiBlog> = await res.json();

  const posts = json.data.map((item) => ({
    id: item.id,
    title: item.title,
    documentId: item.documentId,
    excerpt: item.excerpt,
    slug: item.slug,
    date: item.date,
    content: item.content,
    image: item.image?.url ?? "/images/no-image.jpg",
  }));

  return { posts };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData;

  return (
    <>
      <div className="max-w-3xl mx-auto px-6 py-6 bg-transparent">
        <h2 className="text-3xl text-black font-bold mb-8">🐦 Bird Union Blog</h2>

        <div className="space-y-8">{posts.map((post) => <PostCard key={post.id} post={post} />)}</div>
      </div>
    </>
  );
};

export default BlogPage;
