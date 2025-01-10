import React from "react";
import ItemCard from "../../components/admin/ItemCard";
import { Button } from "@material-tailwind/react";
import { AddItemModal } from "../../components/admin/AddItemModal";

export default function AdminItemPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full text-center p-6 text-4xl font-black">
        <h1 className=" mb-2">Items</h1>
        <AddItemModal />
      </div>
      <div className="w-full px-12 grid grid-cols-4 gap-6 pb-40">
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
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
}
