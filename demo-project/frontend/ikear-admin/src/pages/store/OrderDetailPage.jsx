import React from "react";
import UserCard from "../../components/admin/UserCard";
import OrderItemCard from "../../components/store/OrderItemCard";
import { Button, Card, CardBody, Chip } from "@material-tailwind/react";
import { useParams } from "react-router-dom";

export default function OrderDetailPage() {
  const { id } = useParams();
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="px-12 italic text-gray-500 text-sm">Order id: {id}</div>
      <div className="w-full text-center p-6 text-4xl font-black">
        <h1 className=" mb-2">Order details</h1>
      </div>
      <div className="px-12">
        <UserCard />
      </div>
      <div className="my-12 px-12 flex flex-row gap-0">
        <div className="w-1/2">
          <Card>
            <CardBody className=" flex flex-col gap-2">
              <div>Date: 00-00-00 hh:mm:ss</div>
              <div>Total item:</div>
              <div>Total amount:</div>
              <div>Delivery type: </div>
              <div className=" flex justify-end items-center">
                <Chip  value="Status" className="w-fit" />
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="w-1/2 flex justify-end items-center gap-2">
          <Button>Confirm</Button>
          <Button color="red">Deny</Button>
        </div>
      </div>
      <div className="w-full text-center p-6 text-2xl font-black">
        <h2 className=" mb-2">Order items</h2>
      </div>{" "}
      <div className="w-full px-12 grid grid-cols-4 gap-6 pb-40">
        <OrderItemCard />
        <OrderItemCard />
        <OrderItemCard />
        <OrderItemCard />
      </div>
    </div>
  );
}
