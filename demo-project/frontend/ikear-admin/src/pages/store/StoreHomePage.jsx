import React from "react";
import { Link } from "react-router-dom";

export default function StoreHomePage() {
  return (
    <div className="w-full min-h-96">
      <div className="p-12 gap-12 grid grid-cols-2 grid-rows-2">
        <Link to="/store">
          <div className="p-6 text-4xl font-bold h-48 text-white bg-black rounded  shadow-md shadow-gray-600 duration-300 hover:scale-95">
            Home
          </div>
        </Link>
        <Link to="/store/inventory">
          <div className="p-6 text-4xl font-bold  h-48 text-white bg-black rounded  shadow-md shadow-gray-600 duration-300 hover:scale-95">
            Inventory
          </div>
        </Link>
        <Link to="/store/order">
          <div className="p-6 text-4xl font-bold  h-48 text-white bg-black rounded  shadow-md shadow-gray-600 duration-300 hover:scale-95">
            Orders
          </div>
        </Link>
        <Link to="/store/delivery">
          <div className="p-6 text-4xl font-bold  h-48 text-white bg-black rounded  shadow-md shadow-gray-600 duration-300 hover:scale-95">
            Delivery
          </div>
        </Link>
      
      </div>
    </div>
  );
}
