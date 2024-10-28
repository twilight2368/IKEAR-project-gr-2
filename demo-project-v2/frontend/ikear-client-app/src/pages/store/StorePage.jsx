import ItemCard from "../../components/items/ItemCard";
import RoomStoreItem from "../../components/items/RoomStoreItem";
import "../style.css";
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
import ItemCategoryProduct from "../../components/items/ItemCategoryProduct";
export default function StorePage() {
  return (
    <div className="w-full">
      <div className="w-full p-6 mb-6">
        <h2 className=" text-3xl font-black mb-6">Our new products</h2>
        <div className="grid grid-cols-5 gap-6 px-6">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>

      <div className="w-full p-6">
        <h2 className=" text-3xl font-black mb-6">
          Find items best for your room
        </h2>
        <div className="w-1/2 my-10 text-gray-800 ">
          <p>
            Do you have a particuar room or rooms in your home that needs a
            refresh?
            <br />
            Start your search here to find furniture and home accessories for
            every room in your home here.
          </p>
        </div>
        <div className="w-full p-3 mb-20">
          <div className="w-full grid grid-cols-5 grid-rows-3 gap-1">
            <div className=" row-span-2 flex justify-center items-center bg-black text-white">
              <div className=" text-3xl font-black">Shop by room</div>
            </div>
            <RoomStoreItem
              label={"Bedroom"}
              background_image={CategoryRoomBG_Bedroom}
            />
            <RoomStoreItem
              label={"Kitchen"}
              background_image={CategoryRoomBG_Kitchen}
            />
            <RoomStoreItem
              label={"Living room"}
              background_image={CategoryRoomBG_Living_room}
            />
            <RoomStoreItem
              label={"Dining room"}
              background_image={CategoryRoomBG_Dining_room}
            />

            <RoomStoreItem
              label={"Children's room"}
              background_image={CategoryRoomBG_Children_room}
            />

            <RoomStoreItem
              label={"Bathroom"}
              background_image={CategoryRoomBG_Bath_room}
            />
            <RoomStoreItem
              label={"Office"}
              background_image={CategoryRoomBG__Office_room}
            />

            <RoomStoreItem
              label={"Study room"}
              background_image={CategoryRoomBG_Study_room}
            />
            <RoomStoreItem
              label={"Gaming room"}
              background_image={CategoryRoomBG_Gaming_room}
            />

            <RoomStoreItem
              label={"Garden"}
              background_image={CategoryRoomBG_Garden}
            />
            <RoomStoreItem
              label={"Hallway"}
              background_image={CategoryRoomBG_Hallway}
            />
            <RoomStoreItem
              label={"Laundry"}
              background_image={CategoryRoomBG_Laundry_room}
            />
            <RoomStoreItem
              label={"Garage"}
              background_image={CategoryRoomBG_garage}
            />
          </div>
        </div>

        <div className=" min-h-96 w-full mb-0">
          <div className="w-full text-3xl font-black mb-12">Shop products</div>
          <div className="w-full grid grid-cols-6 gap-6 p-3 mb-10">
            <ItemCategoryProduct />
            <ItemCategoryProduct />
            <ItemCategoryProduct />
            <ItemCategoryProduct />
            <ItemCategoryProduct />
            <ItemCategoryProduct />
            <ItemCategoryProduct />
            <ItemCategoryProduct />
            <ItemCategoryProduct />
            <ItemCategoryProduct />
            <ItemCategoryProduct />
            <ItemCategoryProduct />
            <ItemCategoryProduct />
            <ItemCategoryProduct />
            <ItemCategoryProduct />
            <ItemCategoryProduct />
            <ItemCategoryProduct />
            <ItemCategoryProduct />
          </div>
          <div className="w-full text-center underline">See all products</div>
        </div>
      </div>
    </div>
  );
}
