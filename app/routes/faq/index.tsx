import type { StrapiFAQ, StrapiResponse, Faq } from "~/types";
import type { Route } from "./+types";

import FaqCard from "~/components/FaqCard";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "The Bird Union | FAQ" },
    {
      name: "description",
      content: "Frequently Asked Questions of the Bird Union",
    },
  ];
}

export async function loader({ request }: Route.LoaderArgs): Promise<{ faqs: Faq[] }> {
  const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'https://website-backend-c20g.onrender.com';
  const FAQ_URL = `${STRAPI_URL.replace(/\/$/, '')}/api/faqs`;
  const res = await fetch(FAQ_URL);

  if (!res.ok) throw new Error("Failed to fetch data");

  const json: StrapiResponse<StrapiFAQ> = await res.json();

  const faqs = json.data.map((item) => ({
    id: item.id,
    title: item.title,
    documentId: item.documentId,
    slug: item.slug,
    date: item.date,
    content: item.content,
  }));

  return { faqs };
}

const FaqPage = ({ loaderData }: Route.ComponentProps) => {
  const { faqs } = loaderData;

  return (
    <>
      <div className="max-w-3xl mx-auto px-6 py-6 bg-transparent">
        <h2 className="text-3xl text-gray-700 font-bold mb-8">🦚 Frequently Asked Questions</h2>
        {faqs.map((faq) => <FaqCard key={faq.id} faq={faq} />)}
      </div>

    </>
  );
};

export default FaqPage;
