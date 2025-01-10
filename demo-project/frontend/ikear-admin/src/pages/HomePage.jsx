import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Welcome to IKEAR management</h1>
      <div className="flex space-x-4 mb-6">
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-200"
        >
          Register
        </Link>
      </div>
      <div className="flex flex-col space-y-4">
        <Link
          to="/store"
          className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition duration-200"
        >
          Store
        </Link>
        <Link
          to="/admin"
          className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition duration-200"
        >
          Admin
        </Link>
      </div>
    </div>
  );
}
