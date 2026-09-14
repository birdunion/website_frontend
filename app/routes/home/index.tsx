import type { Route } from "../../+types/root";
import type { Post } from "~/types";
import type { StrapiResponse, StrapiBlog } from "~/types";

import FeaturedPosts from "~/components/FeaturedPosts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Bird Union - CWA Local 1180" },
    {
      name: "description",
      content: "Future Home of the Strike Shrike!",
    },
  ];
}

export async function loader({ request }: Route.LoaderArgs): Promise<{ posts: Post[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/blogs?populate=image&sort=date:desc`);

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

const Home = ({ loaderData }: Route.ComponentProps) => {
  const { posts }  = loaderData;

  return (
    <>
      <FeaturedPosts posts={posts} limit={4} />
    </>
  );
}

export default Home;
