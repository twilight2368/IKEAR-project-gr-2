import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <div className="w-full h-20 bg-black text-white flex flex-row">
        <div className="w-2/3 h-full flex flex-row items-center px-12 gap-12">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) => {
              return isActive ? "border-b-2 border-white" : "";
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/admin/store"
            className={({ isActive }) => {
              return isActive ? "border-b-2 border-white" : "";
            }}
          >
            Stores
          </NavLink>
          <NavLink
            to="/admin/employee"
            className={({ isActive }) => {
              return isActive ? "border-b-2 border-white" : "";
            }}
          >
            Employees
          </NavLink>
          <NavLink
            to="/admin/user"
            className={({ isActive }) => {
              return isActive ? "border-b-2 border-white" : "";
            }}
          >
            Users
          </NavLink>
          <NavLink
            to="/admin/product-rooms"
            className={({ isActive }) => {
              return isActive ? "border-b-2 border-white" : "";
            }}
          >
            Products&Rooms
          </NavLink>
          <NavLink
            to="/admin/items"
            className={({ isActive }) => {
              return isActive ? "border-b-2 border-white" : "";
            }}
          >
            Items
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
