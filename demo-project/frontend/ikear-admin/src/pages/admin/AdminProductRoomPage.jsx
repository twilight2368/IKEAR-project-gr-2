import React from "react";
import RoomCard from "../../components/admin/RoomCard";
import ProductCard from "../../components/admin/ProductCard";
import { Button } from "@material-tailwind/react";

export default function AdminProductRoomPage() {
  return (
    <div className="w-full min-h-screen">
      <div className=" flex flex-row gap-3 justify-end items-center">
        <Button> Add Room </Button>
        <Button> Add Products </Button>
      </div>
      <div className="w-full px-3 flex flex-row">
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
        <div className="w-4/5 p-3">
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
      </div>
    </div>
  );
}
