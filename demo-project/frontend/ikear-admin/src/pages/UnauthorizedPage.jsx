import React from "react";
import { useNavigate } from "react-router-dom";

const UnauthorizedPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">403</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Unauthorized Access
      </h2>
      <p className="mt-2 text-gray-600">
        You do not have permission to view this page.
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="mt-6 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default UnauthorizedPage;
