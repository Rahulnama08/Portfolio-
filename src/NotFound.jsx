import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <h2 className="text-4xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="text-lg text-gray-400 mt-2">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link to="/" className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition duration-300">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
