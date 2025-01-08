import { Card, CardBody, Chip } from "@material-tailwind/react";
import React from "react";
import UserCard from "../admin/UserCard";
import { Link } from "react-router-dom";

export default function OrderCard() {
  return (
    <Card>
      <CardBody>
        <div>Order_ID: 0000000000000000000000000000000000000000000000000</div>{" "}
        <hr className="py-2" />
        <div>
          <p className="w-full truncate text-black ">Users Name</p>
          <div className="w-full text-black">
            Email: <span className="text-black">Email</span>
          </div>
          <div className="w-full text-black mb-3">
            Phone: <span className="text-black">000-000-0000</span>
          </div>
        </div>
        <div>Date: 00-00-00 hh:mm:ss</div>
        <div>Total item:</div>
        <div>Total amount:</div>
        <div>Delivery type: </div>
        <div className=" flex justify-end gap-3">
          <Chip value="Status" />
          <Link className="text-blue-400 underline" to="/store/order/1">
            See details
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}
