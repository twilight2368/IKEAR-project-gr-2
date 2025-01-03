import React from "react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-lg mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
    </div>
  );
}
