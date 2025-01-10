import React from "react";
import { Link } from "react-router-dom";
import StoreInfoCard from "../../components/store/StoreInfoCard";

export default function StoreHomePage() {
  return (
    <div className="w-full min-h-96">
      <div className="p-12 gap-12 grid grid-cols-3 grid-rows-2">
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
        <div className=" row-span-2">
          <StoreInfoCard />
        </div>
        <Link to="/store/order" className=" col-span-2">
          <div className="p-6 text-4xl font-bold  h-48 text-white bg-black rounded  shadow-md shadow-gray-600 duration-300 hover:scale-95">
            Orders
          </div>
        </Link>
      </div>
    </div>
  );
}
