import { Button } from "@material-tailwind/react";
import React from "react";

export default function StoreItemAdressDisplay() {
  return (
    <>
      <div className="min-h-16 shadow-md rounded bg-white p-2 flex flex-row gap-0">
        <div className="w-2/3">
          <div className="w-full">
            <p className="text-lg font-black truncate ">Store name</p>
          </div>
          <div className="w-full">
            <p className="text-sm text-gray-600 truncate">
              123 street, city, country
            </p>
          </div>
        </div>
        <div className="w-1/3">
          <Button size="sm" color="gray" className=" bg-black text-xs">
            Set my current store
          </Button>
        </div>
      </div>
    </>
  );
}
