import React from "react";
import RoomCard from "../../components/admin/RoomCard";
import ProductCard from "../../components/admin/ProductCard";
import { Button, Input } from "@material-tailwind/react";
import HolidayCard from "../../components/admin/HolidayCard";

export default function AdminProductRoomPage() {
  return (
    <div className="w-full min-h-screen">
      <div className="px-6 mb-6 flex flex-row gap-6 justify-end items-center">
        <div>
          <h2 className=" text-xl font-black">Tools:</h2>
        </div>
        <form className="flex flex-row gap-3">
          <Input label="Add room" />
          <Button className="w-full">Add room</Button>
        </form>
        <form className="flex flex-row gap-3">
          <Input label="Add holiday" />
          <Button className="w-full">Add holiday</Button>
        </form>
        <form className="flex flex-row gap-3">
          <Input label="Add product" />
          <Button className="w-full">Add product</Button>
        </form>
      </div>
      <div className="w-full px-3  flex flex-row">
        <div className="w-1/5 p-3 border-r-[1px] border-black">
          <div className="text-lg font-black mb-3 text-black">Rooms</div>
          <div className=" grid grid-cols-1 gap-3 px-1 ">
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
          </div>
        </div>
        <div className="w-3/5 p-3">
          <div className="text-lg font-black text-black mb-3">Products</div>
          <div className=" grid grid-cols-4 gap-3 px-1 ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div className="w-1/5 p-3 border-l-[1px] border-black">
          <div className="text-lg font-black mb-3 text-black">Holiday</div>
          <div className=" grid grid-cols-1 gap-3 px-1 ">
            <HolidayCard />
            <HolidayCard />
            <HolidayCard />
            <HolidayCard />
            <HolidayCard />
          </div>
        </div>
      </div>
    </div>
  );
}
