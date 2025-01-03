import React from "react";
import StoreCard from "../../components/admin/StoreCard";
import { Button } from "@material-tailwind/react";

export default function AdminStorePage() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full text-center p-6 text-4xl font-black">
        <h1 className=" mb-2">Stores</h1>
        <Button> Add store</Button>
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
