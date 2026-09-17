import type { Route } from "./+types/details";

import { Link } from "react-router";
import ReactMarkdown from "react-markdown";
import type { StrapiBlog, StrapiResponse, Post } from "~/types";

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;

  const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'https://website-backend-c20g.onrender.com';
  const BLOG_URL = `${STRAPI_URL.replace(/\/$/, '')}/api/blogs?filters[slug][$eq]=${slug}&populate=image`;
  const res = await fetch(BLOG_URL);

  if (!res.ok) throw new Error("Failed to fetch blog post");

  const json: StrapiResponse<StrapiBlog> = await res.json();

  const item = json.data[0];

  const post = {
    id: item.id,
    slug: item.slug,
    excerpt: item.excerpt,
    title: item.title,
    date: item.date,
    content: item.content,
    image: item.image?.url ?? "images/no-image.jpg"
  };

  return { post }
}

type BlogPostDetailProps = {
  loaderData: {
    post: Post;
  };
};

const BlogPostDetailsPage = ({ loaderData }: BlogPostDetailProps) => {
  const { title, date, content, image } = loaderData.post;

  return (
    <>
      <div className="max-w-3xl mx-auto px-6 py-12 bg-gray-900">
        <h1 className="text-3xl font-bold text-red-400 mb-2">{title}</h1>
        <p className="text-sm text-gray-500 mb-6">{new Date(date).toDateString()}</p>
        {image && <img src={image} alt={title} />}

        <div className="prose prose-invert max-w-none mb-12">
          <ReactMarkdown>{ content }</ReactMarkdown>
        </div>

        <Link to="/blog" className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition"> ← Back to Posts</Link>
      </div>
    </>
  );
};

export default BlogPostDetailsPage;
