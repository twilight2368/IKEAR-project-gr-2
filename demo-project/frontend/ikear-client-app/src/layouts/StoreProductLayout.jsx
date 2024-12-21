import React from "react";
import { Link, Outlet } from "react-router-dom";
import StoreProductMenu from "../components/menu/StoreProductMenu";
import { Button } from "@material-tailwind/react";

export default function StoreProductLayout() {
  return (
    <div>
      <div className="w-full h-20  flex justify-start items-center">
        <div className="w-1/6 px-6">
          <h2 className=" font-black text-2xl ">IKEAR products</h2>
        </div>
        <div className="w-1/6">
          <StoreProductMenu />
        </div>
      </div>
      <div className="w-full relative">
        <Outlet />
      </div>
    </div>
  );
}
