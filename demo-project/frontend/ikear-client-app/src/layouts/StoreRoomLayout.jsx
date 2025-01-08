import React from "react";
import { Outlet } from "react-router-dom";
import ItemCategoryRoom from "../components/items/ItemCategoryRoom";
export default function StoreRoomLayout() {
  return (
    <div className="relative">
      <div className="w-full flex flex-row h-40">
        <div className="w-1/6 h-full bg-black flex justify-center items-center">
          <div className="text-white font-black text-2xl">IKEAR rooms</div>
        </div>
        <div className="w-full overflow-x-auto flex flex-row px-3 gap-3 custom-scroll-bar">
          <div className=" flex-shrink-0 w-1/5 ">
            <ItemCategoryRoom label={"Bedroom"} />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom label={"Living room"} />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom label={"Kitchen"} />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom label={"Dining room"} />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom label={"Bathroom"} />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom label={"Children room"} />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom label={"Study room"} />
          </div>

          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom label={"Office"} />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom label={"Gaming room"} />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom label={"Garden"} />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom label={"Hallway"} />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom label={"Laundry room"} />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom label={"Garage"} />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
