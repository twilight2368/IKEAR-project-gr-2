import React from "react";
import { Link } from "react-router-dom";

export default function AdminHomePage() {
  return (
    <div className="w-full min-h-96">
      <div className="p-12 gap-12 grid grid-cols-3 grid-rows-2">
        <Link to="/admin">
          <div className="p-6 text-4xl font-bold h-48 text-white bg-black rounded  shadow-md shadow-gray-600 duration-300 hover:scale-95">
            Home
          </div>
        </Link>
        <Link to="/admin/store">
          <div className="p-6 text-4xl font-bold  h-48 text-white bg-black rounded  shadow-md shadow-gray-600 duration-300 hover:scale-95">
            Stores
          </div>
        </Link>
        <Link to="/admin/employee">
          <div className="p-6 text-4xl font-bold  h-48 text-white bg-black rounded  shadow-md shadow-gray-600 duration-300 hover:scale-95">
            Employees
          </div>
        </Link>
        <Link to="/admin/user">
          <div className="p-6 text-4xl font-bold  h-48 text-white bg-black rounded  shadow-md shadow-gray-600 duration-300 hover:scale-95">
            Users
          </div>
        </Link>
        <Link to="/admin/product-rooms">
          <div className="p-6 text-4xl font-bold  h-48 text-white bg-black rounded  shadow-md shadow-gray-600 duration-300 hover:scale-95">
            Products and Rooms
          </div>
        </Link>
        <Link to="/admin/items">
          <div className="p-6 text-4xl font-bold  h-48 text-white bg-black rounded  shadow-md shadow-gray-600 duration-300 hover:scale-95">
            Items
          </div>
        </Link>
      </div>
    </div>
  );
}
