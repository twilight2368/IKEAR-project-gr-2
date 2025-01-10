import { Card, CardBody } from "@material-tailwind/react";
import React from "react";

export default function ItemCard({ item }) {
  return (
    <Card>
      <CardBody>
        <div className="w-full font-bold mb-1">{item.name}</div>
        <hr />
        <div className="w-full text-black">
          Price: <span className="text-black">{item.price}</span>
        </div>
        <div className="w-full text-black">
          Color: <span className="text-black">{item.color}</span>
        </div>
        <div className="w-full text-black mb-2">
          Size: <span className="text-black">{item.size}</span>
        </div>
        <hr />
        <div className="w-full text-black mt-2">
          <span className="text-black">{item.product.name}</span>
        </div>
        <div className="w-full text-black">
          <span className="text-black">{item.room.name}</span>
        </div>
        <div className="w-full text-black mb-2">
          <span className="text-black">{item.holiday.name}</span>
        </div>
      </CardBody>
    </Card>
  );
}
