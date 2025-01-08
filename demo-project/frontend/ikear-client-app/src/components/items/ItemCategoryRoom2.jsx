import React from "react";
import RoomLogo from "../../assets/icons/room-svgrepo-com.svg";
import { Card, CardBody } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function ItemCategoryRoom2({ label }) {
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
          <img src={RoomLogo} alt="" className=" rounded aspect-[16/10]" />
        </div>
        <div className="text-center font-black text-black">
          <span>{label}</span>
        </div>
      </CardBody>
    </Card>
  );
}
