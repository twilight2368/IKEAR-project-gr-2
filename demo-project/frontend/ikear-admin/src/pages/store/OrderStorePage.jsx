import React from "react";
import { Button } from "@material-tailwind/react";
import OrderCard from "../../components/store/OrderCard";

export default function OrderStorePage() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full text-center p-6 text-4xl font-black">
        <h1 className=" mb-2">Order</h1>
      </div>
      <div className="w-full px-12 grid grid-cols-1 gap-6 pb-40">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
}
