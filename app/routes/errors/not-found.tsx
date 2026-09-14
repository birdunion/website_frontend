import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center px-6 min-h-[70vh]">
        <h1 className="text-6xl font-extrabold text-red-300 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-100">Page Not Found</h2>
        <p className="text-gray-400 mb-6 max-w-md">🪽 The requested page has flown the coop. 🐔</p>

        <Link to="/" className="inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-800 transition">Go Home</Link>
      </div>
    </>
  )
}

export default NotFoundPage;
