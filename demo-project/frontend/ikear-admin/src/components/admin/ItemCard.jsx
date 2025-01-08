import { Card, CardBody } from "@material-tailwind/react";
import React from "react";

export default function ItemCard() {
  return (
    <Card>
      <CardBody>
        <div className="w-full font-bold mb-1">Item Name</div>
        <hr />
        <div className="w-full text-black">
          Price: <span className="text-black">0</span>
        </div>
        <div className="w-full text-black">
          Color: <span className="text-black">...</span>
        </div>
        <div className="w-full text-black mb-2">
          Size: <span className="text-black">...</span>
        </div>
        <hr />
        <div className="w-full text-black mt-2">
          <span className="text-black">Product</span>
        </div>
        <div className="w-full text-black mb-2">
          <span className="text-black">Room</span>
        </div>
      </CardBody>
    </Card>
  );
}
