import type { Faq } from "~/types";


const FaqCard = ({ faq }: { faq: Faq }) => {
  const { title, content, date } = faq;

  return (
    <>
      <article className="bg-gray-200 p-6 rounded-lg shadow mb-3">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-800 mb-2">{new Date(date).toDateString()}</p>
        <p className="text-sm text-gray-500 mb-3">{content}</p>
      </article>
    </>
  )
}

export default FaqCard;
