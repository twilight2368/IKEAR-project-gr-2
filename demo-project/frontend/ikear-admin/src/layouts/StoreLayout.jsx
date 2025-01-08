import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import LogoImage from "../assets/icons/polar-bear.svg";
import Profile from "../components/Profile";
export default function StoreLayout() {
  return (
    <div className="bg-gray-50 relative">
      <div className="  w-full h-20 bg-black  shadow-lg mb-6 shadow-gray-400 text-white flex flex-row justify-between">
        <div className="w-1/12 h-full  p-3 flex justify-center items-center bg-white">
          <img src={LogoImage} alt="LOGO" className="h-full aspect-square" />
        </div>
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
        <div className="w-3/12">
          <Profile />
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
