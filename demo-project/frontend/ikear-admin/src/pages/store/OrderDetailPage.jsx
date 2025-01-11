import React from "react";
import UserCard from "../../components/admin/UserCard";
import OrderItemCard from "../../components/store/OrderItemCard";
import { Button, Card, CardBody, Chip } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function OrderDetailPage() {
  const { id } = useParams();
  const [order, setOrder] = useState();
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/service4/orders/orders/" + id
        );
        console.log("====================================");
        console.log(response.data.data);
        console.log("====================================");
        setOrder(response.data.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [id]);

  const handlingButton = async (status) => {
    try {
      const response = await axios.put(
        "http://localhost:5000/service4/orders/orders/" + id,
        {
          status: status,
        }
      );
      console.log("====================================");
      console.log(response.data.data);
      console.log("====================================");
      setOrder(response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="px-12 italic text-gray-500 text-sm">Order id: {id}</div>
      {order ? (
        <>
          {" "}
          <div className="w-full text-center p-6 text-4xl font-black">
            <h1 className=" mb-2">Order details</h1>
          </div>
          <div className="px-12">
            <UserCard user={order.user} />
          </div>
          <div className="my-12 px-12 flex flex-row gap-0">
            <div className="w-1/2">
              <Card>
                <CardBody className=" flex flex-col gap-2">
                  <div>Date: {order?.createdAt}</div>{" "}
                  <div>Update: {order?.updatedAt}</div>
                  <div>Total item: {order?.total_items}</div>
                  <div>Total amount: {order?.total_price}</div>
                  <div className=" flex justify-end items-center gap-3">
                    <Chip value={order?.delivery_type} className="w-fit" />
                    <Chip value={order?.status} className="w-fit" />
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="w-1/2 flex justify-end items-center gap-2">
              <Button
                disabled={order?.status !== "pending"}
                onClick={() => {
                  if (order?.delivery_type === "pickup") {
                    handlingButton("prepared");
                  } else if (order?.delivery_type === "shipping") {
                    handlingButton("shipping");
                  } else {
                    toast.error("Opp!!!");
                  }
                }}
              >
                Confirm
              </Button>
              <Button
                disabled={order?.status !== "pending"}
                onClick={() => {
                  handlingButton("cancelled");
                }}
                color="red"
              >
                Deny
              </Button>
            </div>
          </div>
          <div className="w-full text-center p-6 text-2xl font-black">
            <h2 className=" mb-2">Order items</h2>
          </div>{" "}
          <div className="w-full px-12 grid grid-cols-4 gap-6 pb-40">
            {order.items.map((item, i) => {
              return (
                <OrderItemCard
                  key={i}
                  item={item.item}
                  quantity={item.quantity}
                />
              );
            })}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
