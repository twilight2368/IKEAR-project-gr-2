import { Button, Card, CardBody, IconButton } from "@material-tailwind/react";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
export default function InventoryCard() {
  return (
    <Card>
      <CardBody>
        <div className=" text-black font-bold"> Name item</div>
        <hr className="my-1" />
        <div>
          <div>Product</div>
          <div>Room</div>
          <div>Holiday: </div>
        </div>
        <hr className="my-1" />
        <div>
          <div>Price</div>
          <div>Color</div>
          <div>Size</div>
        </div>
        <hr className="my-1" />
        <div className=" text-black font-bold">
          Quantity: <span>00</span>
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
