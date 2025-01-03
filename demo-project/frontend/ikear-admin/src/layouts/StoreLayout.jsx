import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function StoreLayout() {
  return (
    <div>
      <div className="w-full h-20 bg-black text-white flex flex-row">
        <div className="w-2/3 h-full flex flex-row items-center px-12 gap-12">
          <NavLink
            to="/store"
            end
            className={({ isActive }) => {
              return isActive ? "border-b-2 border-white" : "";
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/store/inventory"
            className={({ isActive }) => {
              return isActive ? "border-b-2 border-white" : "";
            }}
          >
            Inventory
          </NavLink>
          <NavLink
            to="/store/order"
            className={({ isActive }) => {
              return isActive ? "border-b-2 border-white" : "";
            }}
          >
            Orders
          </NavLink>
          <NavLink
            to="/store/delivery"
            className={({ isActive }) => {
              return isActive ? "border-b-2 border-white" : "";
            }}
          >
            Delivery
          </NavLink>
        </div>
        <div className="w-1/3">1</div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
