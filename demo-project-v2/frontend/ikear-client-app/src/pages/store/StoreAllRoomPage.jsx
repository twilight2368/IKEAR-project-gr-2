import BearHeadingImage from "../../assets/images/animals-nature-bears-ice-wallpaper-cb360c3d33c1cf69e5f44b89dddcbc50.jpg";
import CategoryRoomBG_Bedroom from "../../assets/images/rooms/PH199464.avif";
import CategoryRoomBG_Kitchen from "../../assets/images/rooms/PH196224.avif";
import CategoryRoomBG_Living_room from "../../assets/images/rooms/PH199061.avif";
import CategoryRoomBG_Dining_room from "../../assets/images/rooms/PH200257_SHI_001.avif";
import CategoryRoomBG_Children_room from "../../assets/images/rooms/PH199501.avif";
import CategoryRoomBG_Bath_room from "../../assets/images/rooms/PH199528.avif";
import CategoryRoomBG__Office_room from "../../assets/images/rooms/a-dog-stands-by-a-woman-at-a-fryksas-rattan-desk-in-a-living-988573325dbe599c7f1cbc4078fe189d.avif";
import CategoryRoomBG_Study_room from "../../assets/images/rooms/a-girl-sitting-on-a-green-desk-chair-doing-her-homework-on-a-8fc9000c5e2ae81536abb3e933122a36.avif";
import CategoryRoomBG_Gaming_room from "../../assets/images/rooms/ME-DDTAHFY24-Attract-KV-02_Bedroom_Grandfather_Gamer_CMYK.avif";
import CategoryRoomBG_Garden from "../../assets/images/rooms/an-outdoor-space-with-a-white-beige-bondholmen-table-and-sev-6addab668fa66c61f836c14a84f5a300.avif";
import CategoryRoomBG_Hallway from "../../assets/images/rooms/PH199354.avif";
import CategoryRoomBG_Laundry_room from "../../assets/images/rooms/a-yellow-tiled-laundry-room-with-a-white-nysjoen-cabinet-a-w-9e95bad7aad891b80136b497ba670a01.avif";
import CategoryRoomBG_garage from "../../assets/images/rooms/PH175726.avif";

import ItemCategoryRoom2 from "../../components/items/ItemCategoryRoom2";

export default function StoreAllRoomPage() {
  return (
    <div className="w-full ">
      <div className="w-full flex justify-center items-center mb-20 bg-black text-white">
        <div className="w-1/3">
          <div className=" p-3">
            <h1 className="text-5xl mb-6 font-black">Shop by room</h1>
            <p className=" text-sm ">
              Do you have a particuar room or rooms in your home that needs a
              refresh? Start your search here to find furniture and home
              accessories for every room in your home here.
            </p>
          </div>
        </div>
        <div className="w-2/3">
          <img src={BearHeadingImage} alt="" className="w-full h-auto" />
        </div>
      </div>
      <div className="w-full">
        <div className=" w-full text-center">
          <h2 className=" text-3xl font-bold">All rooms</h2>
        </div>
        <div className="w-full grid grid-cols-3 gap-6 p-6">
          <ItemCategoryRoom2
            image_display={CategoryRoomBG_Living_room}
            label={"Living room"}
          />

          <ItemCategoryRoom2
            image_display={CategoryRoomBG_Bedroom}
            label={"Bedroom"}
          />

          <ItemCategoryRoom2
            image_display={CategoryRoomBG_Bath_room}
            label={"Bathroom"}
          />

          <ItemCategoryRoom2
            image_display={CategoryRoomBG_Kitchen}
            label={"Kitchen"}
          />

          <ItemCategoryRoom2
            image_display={CategoryRoomBG_Dining_room}
            label={"Dining room"}
          />

          <ItemCategoryRoom2
            image_display={CategoryRoomBG_Children_room}
            label={"Children room"}
          />

          <ItemCategoryRoom2
            image_display={CategoryRoomBG_Study_room}
            label={"Study room"}
          />

          <ItemCategoryRoom2
            image_display={CategoryRoomBG__Office_room}
            label={"Office"}
          />

          <ItemCategoryRoom2
            image_display={CategoryRoomBG_Gaming_room}
            label={"Gaming room"}
          />

          <ItemCategoryRoom2
            image_display={CategoryRoomBG_Hallway}
            label={"Hallway"}
          />

          <ItemCategoryRoom2
            image_display={CategoryRoomBG_Laundry_room}
            label={"Laundry room"}
          />

          <ItemCategoryRoom2
            image_display={CategoryRoomBG_Garden}
            label={"Garden"}
          />

          <ItemCategoryRoom2
            image_display={CategoryRoomBG_garage}
            label={"Garage"}
          />
        </div>
      </div>
    </div>
  );
}
