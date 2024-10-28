import React from "react";

export default function RoomStoreItem({ label, background_image }) {
  return (
    <div className="relative h-48 p-0">
      <div className="relative w-full h-full">
        <img src={background_image} alt="" className="w-full h-full" />
      </div>
      <div className="absolute w-full h-full top-0  text-white bg-black/60 opacity-0 duration-150  hover:opacity-100">
        <div className="flex justify-center items-center w-full h-full">
          {label}
        </div>
      </div>
    </div>
  );
}
