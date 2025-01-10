import React, { useState } from "react";
import { FaHeartBroken, FaHeart, FaRegHeart } from "react-icons/fa";
import { IconButton } from "@material-tailwind/react";
import { toast } from "react-toastify";

export default function FavButton({ isFav = false }) {
  const [heartBroken, setHeartBroken] = useState(false);

  return (
    <IconButton
      variant="text"
      color={isFav ? "red" : "gray"}
      className={`text-xl rounded-full ${
        isFav ? "text-red-500" : "text-black"
      }`}
      onMouseOver={() => isFav && setHeartBroken(true)}
      onMouseLeave={() => isFav && setHeartBroken(false)}
      onClick={() => {
        toast.success("Fav button clicked", {
          position: "top-center",
        });
      }}
    >
      {isFav ? heartBroken ? <FaHeartBroken /> : <FaHeart /> : <FaRegHeart />}
    </IconButton>
  );
}
