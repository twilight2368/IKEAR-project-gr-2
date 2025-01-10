import { Button, Card, CardBody, IconButton } from "@material-tailwind/react";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
export default function InventoryCard({ item }) {
  return (
    <Card>
      <CardBody>
        <div className=" text-black font-bold">{item.item.name}</div>
        <hr className="my-1" />
        <div>
          <div>{item.item.product.name}</div>
          <div>{item.item.room.name}</div>
          <div>{item.item.holiday.name} </div>
        </div>
        <hr className="my-1" />
        <div>
          <div>Price: {item.item.price}</div>
          <div>Color: {item.item.color}</div>
          <div>Size: {item.item.size}</div>
        </div>
        <hr className="my-1" />
        <div className=" text-black font-bold">
          Quantity: <span>{item.quantity}</span>
        </div>
        <div className="mt-6 flex gap-2 justify-end items-center">
          <IconButton>
            <FaRegPenToSquare />
          </IconButton>
          <IconButton color="red" className="p-0 text-xl">
            <MdDeleteForever />
          </IconButton>
        </div>
      </CardBody>
    </Card>
  );
}
