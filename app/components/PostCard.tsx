import type { Post } from "~/types";
import { Link } from "react-router";

const PostCard = ({ post }: {post: Post}) => {
  const { date, image, title, excerpt, slug } = post;

  return (
    <>
      <article className="bg-gray-200 p-6 rounded-lg shadow mb-3">
        <h3 className="text-3xl font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-800 mb-2">{new Date(date).toDateString()}</p>
        {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-4" />}
        <p className="text-gray-500 mb-4">{excerpt}</p>
        <Link to={`/blog/${slug}`} className="text-red-400 text-sm hover:underline transition">Read More →</Link>
      </article>
    </>
  );
}

export default PostCard;
