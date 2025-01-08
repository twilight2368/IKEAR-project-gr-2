import React from "react";
import { Badge, Button, Card, CardBody, Chip } from "@material-tailwind/react";
import OrderCard from "../../components/store/OrderCard";
import { Link } from "react-router-dom";

export default function DeliveryStorePage() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full text-center p-6 text-4xl font-black">
        <h1 className=" mb-2">Delivery</h1>
      </div>
      <div className="w-full px-12 grid grid-cols-3 gap-6 pb-40">
        <DeliveryCard />
        <DeliveryCard />
        <DeliveryCard />
        <DeliveryCard />
        <DeliveryCard />
        <DeliveryCard />
        <DeliveryCard />
        <DeliveryCard />
        <DeliveryCard />
        <DeliveryCard />
        <DeliveryCard />
        <DeliveryCard />
      </div>
    </div>
  );
}

const DeliveryCard = () => {
  return (
    <>
      <Card>
        <CardBody>
          <div className=" mb-2">
            <p className=" truncate">
              Order_ID:{" "}
              <Link
                className=" hover:text-blue-400 hover:underline"
                to="/store/order/1"
              >
                {" "}
                0000000000000000000000000000000000000000000000000
              </Link>
            </p>
          </div>{" "}
          <div className=" flex flex-row gap-1">
            <span> Status:</span>{" "}
            <Chip value="Hello world" className=" w-fit" />
          </div>
        </CardBody>
      </Card>
    </>
  );
};
