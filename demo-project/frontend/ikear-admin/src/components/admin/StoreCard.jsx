import React from "react";
import { Card, CardBody } from "@material-tailwind/react";

export default function StoreCard() {
  return (
    <>
      <Card>
        <CardBody className="min-h-40">
          <div className="w-full text-xl font-bold ">Store Name</div>
          <div className="w-full text-black">
            <p className=" line-clamp-2">
              Address: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Id maiores, necessitatibus numquam corporis doloremque quod
              ducimus ratione deleniti reiciendis nam, distinctio illum! Tempore
              ut quis necessitatibus ad optio dicta doloribus?
            </p>
          </div>
          <div className="w-full text-black">
            City: <span className="text-black">City Name</span>
          </div>
          <div className="w-full text-black mb-2">
            Country: <span className="text-black">Country Name</span>
          </div>
          <div className="w-full text-black mb-3">
            Phone: <span className="text-black">000-000-0000</span>
          </div>
          <hr />
          <div className="w-full text-black mt-3">
            Weekday: <span className="text-black">00:00-00:00</span>
          </div>
          <div className="w-full text-black mb-3">
            Weekend: <span className="text-black">00:00-00:00</span>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
