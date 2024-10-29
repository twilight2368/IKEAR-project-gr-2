import React from "react";
import { Outlet } from "react-router-dom";
import ItemCategoryRoom from "../components/items/ItemCategoryRoom";
import CategoryRoomBG_Bedroom from "../assets/images/rooms/PH199464.avif";
import CategoryRoomBG_Kitchen from "../assets/images/rooms/PH196224.avif";
import CategoryRoomBG_Living_room from "../assets/images/rooms/PH199061.avif";
import CategoryRoomBG_Dining_room from "../assets/images/rooms/PH200257_SHI_001.avif";
import CategoryRoomBG_Children_room from "../assets/images/rooms/PH199501.avif";
import CategoryRoomBG_Bath_room from "../assets/images/rooms/PH199528.avif";
import CategoryRoomBG__Office_room from "../assets/images/rooms/a-dog-stands-by-a-woman-at-a-fryksas-rattan-desk-in-a-living-988573325dbe599c7f1cbc4078fe189d.avif";
import CategoryRoomBG_Study_room from "../assets/images/rooms/a-girl-sitting-on-a-green-desk-chair-doing-her-homework-on-a-8fc9000c5e2ae81536abb3e933122a36.avif";
import CategoryRoomBG_Gaming_room from "../assets/images/rooms/ME-DDTAHFY24-Attract-KV-02_Bedroom_Grandfather_Gamer_CMYK.avif";
import CategoryRoomBG_Garden from "../assets/images/rooms/an-outdoor-space-with-a-white-beige-bondholmen-table-and-sev-6addab668fa66c61f836c14a84f5a300.avif";
import CategoryRoomBG_Hallway from "../assets/images/rooms/PH199354.avif";
import CategoryRoomBG_Laundry_room from "../assets/images/rooms/a-yellow-tiled-laundry-room-with-a-white-nysjoen-cabinet-a-w-9e95bad7aad891b80136b497ba670a01.avif";
import CategoryRoomBG_garage from "../assets/images/rooms/PH175726.avif";
export default function StoreRoomLayout() {
  return (
    <div className="relative">
      <div className="w-full flex flex-row h-40">
        <div className="w-1/6 h-full bg-black flex justify-center items-center">
          <div className="text-white font-black text-2xl">IKEAR rooms</div>
        </div>
        <div className="w-full overflow-x-auto flex flex-row px-3 gap-3 custom-scroll-bar">
          <div className=" flex-shrink-0 w-1/5 ">
            <ItemCategoryRoom
              label={"Bedroom"}
              image_display={CategoryRoomBG_Bedroom}
            />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom
              label={"Living room"}
              image_display={CategoryRoomBG_Living_room}
            />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom
              label={"Kitchen"}
              image_display={CategoryRoomBG_Kitchen}
            />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom
              label={"Dining room"}
              image_display={CategoryRoomBG_Dining_room}
            />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom
              label={"Bathroom"}
              image_display={CategoryRoomBG_Bath_room}
            />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom
              label={"Children room"}
              image_display={CategoryRoomBG_Children_room}
            />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom
              label={"Study room"}
              image_display={CategoryRoomBG_Study_room}
            />
          </div>

          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom
              label={"Office"}
              image_display={CategoryRoomBG__Office_room}
            />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom
              label={"Gaming room"}
              image_display={CategoryRoomBG_Gaming_room}
            />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom
              label={"Garden"}
              image_display={CategoryRoomBG_Garden}
            />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom
              label={"Hallway"}
              image_display={CategoryRoomBG_Hallway}
            />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom
              label={"Laundry room"}
              image_display={CategoryRoomBG_Laundry_room}
            />
          </div>
          <div className=" flex-shrink-0 w-1/5">
            <ItemCategoryRoom
              label={"Garage"}
              image_display={CategoryRoomBG_garage}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
