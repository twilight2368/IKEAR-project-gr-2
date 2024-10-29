import React from "react";

import { Card, CardBody } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function ItemCategoryRoom2({ image_display, label }) {
  const navigate = useNavigate();
  return (
    <Card
      className="w-full rounded-sm cursor-pointer"
      onClick={() => {
        navigate("/store/room/room-id");
      }}
    >
      <CardBody>
        <div className="w-full mb-3">
          <img src={image_display} alt="" className=" rounded aspect-[16/10]" />
        </div>
        <div className="text-center font-black text-black">
          <span>{label}</span>
        </div>
      </CardBody>
    </Card>
  );
}
