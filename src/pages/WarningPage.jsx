import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 text-center">
      
      {/* 404 Number */}
      <h1 className="text-7xl md:text-9xl font-bold text-red-600">
        404
      </h1>

      {/* Message */}
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-600 max-w-md">
        Oops! The page you are looking for does not exist or may have been moved.
        Please check the URL or return to the homepage.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-red-700 transition"
      >
         Home
      </Link>
    </div>
  );
};

export default NotFound;
