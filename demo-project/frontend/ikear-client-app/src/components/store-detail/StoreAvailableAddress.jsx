import React from "react";
import { Link } from "react-router-dom";

export default function StoreAvailableAddress() {
  return (
    <div className="h-16 bg-white p-2">
      <div className="w-full">
        <Link to="/store-detail/store-id">
          <p className="text-lg font-black truncate hover:underline ">
            Store name
          </p>
        </Link>
      </div>
      <div className="w-full">
        <p className="text-sm text-gray-600 truncate">
          Store address: 123 street, city, country
        </p>
      </div>
    </div>
  );
}
