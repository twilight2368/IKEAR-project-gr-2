import React from "react";
import { useNavigate } from "react-router-dom";
export default function RoomStoreItem({ label, background_image }) {
  const navigate = useNavigate();
  return (
    <div
      className="relative h-48 p-0 cursor-pointer"
      onClick={() => {
        navigate("/store/room/room-id");
      }}
    >
      <div className="relative w-full h-full">
        <img src={background_image} alt="" className="w-full h-full" />
      </div>
      <div className="absolute w-full h-full top-0  text-white bg-black/85 opacity-0 duration-150  hover:opacity-100">
        <div className="flex justify-center items-center w-full h-full">
          {label}
        </div>
      </div>
    </div>
  );
}
