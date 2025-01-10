import React from "react";
import StoreCard from "../../components/admin/StoreCard";
import { Button } from "@material-tailwind/react";
import { StoreAddModal } from "../../components/admin/StoreAddModal";

export default function AdminStorePage() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full text-center p-6 text-4xl font-black">
        <h1 className=" mb-2">Stores</h1>
        <StoreAddModal />
      </div>
      <div className="w-full px-12 grid grid-cols-3 gap-6 pb-40">
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </div>
    </div>
  );
}
