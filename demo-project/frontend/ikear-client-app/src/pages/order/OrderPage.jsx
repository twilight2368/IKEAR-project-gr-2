import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardBody,
  Chip,
  Button,
} from "@material-tailwind/react";
import { Footer } from "../../components/footer/Footer";
import ItemInOrder from "../../components/items/ItemInOrder";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
export default function OrderPage() {
  const [order, setOrder] = useState();
  const user = useSelector((state) => state.user);
  const id = user?.user?._id;
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/service4/orders/orders/user/" + id
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
  return (
    <div className="p-6 px-12">
      <div className="w-full  text-3xl font-black mb-6">My orders</div>
      <div className=" min-h-screen">
        <Tabs value={1}>
          <TabsHeader>
            <Tab key={1} value={1}>
              <div className="flex items-center ">All</div>
            </Tab>
            <Tab key={2} value={2}>
              <div className="flex items-center">To Receive</div>
            </Tab>
            <Tab key={3} value={3}>
              <div className="flex items-center">Completed</div>
            </Tab>
            <Tab key={4} value={4}>
              <div className="flex items-center">Cancelled</div>
            </Tab>
          </TabsHeader>
          <TabsBody>
            <TabPanel key={1} value={1}>
              <div className=" flex flex-col gap-6">
                {order ? (
                  <>
                    {order.map((order_item, i) => {
                      return <OrderItem key={i} order={order_item} />;
                    })}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </TabPanel>
            <TabPanel key={2} value={2}>
              <div className=" flex flex-col gap-6">
                {order ? (
                  <>
                    {order.map((order_item, i) => {
                      if (
                        order_item?.status === "shipping" ||
                        order_item?.status === "prepared"
                      ) {
                        return <OrderItem key={i} order={order_item} />;
                      } else {
                        return <></>;
                      }
                    })}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </TabPanel>
            <TabPanel key={3} value={3}>
              <div className=" flex flex-col gap-6">
                {order ? (
                  <>
                    {order.map((order_item, i) => {
                      if (order_item.status === "delivered") {
                        return <OrderItem key={i} order={order_item} />;
                      } else {
                        return <></>;
                      }
                    })}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </TabPanel>
            <TabPanel key={4} value={4}>
              <div className=" flex flex-col gap-6">
                {order ? (
                  <>
                    {order.map((order_item, i) => {
                      if (order_item.status === "cancelled") {
                        return <OrderItem key={i} order={order_item} />;
                      } else {
                        return <></>;
                      }
                    })}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
}

const OrderItem = ({ order }) => {
  const handlingButton = async (status) => {
    try {
      const response = await axios.put(
        "http://localhost:5000/service4/orders/orders/" + order?._id,
        {
          status: status,
        }
      );
      console.log("====================================");
      console.log(response.data.data);
      console.log("====================================");
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  return (
    <>
      <Card>
        <CardBody>
          <div className="mb-2">
            <Chip value={order?.status} className="w-fit" />
          </div>
          {/* <div className=" border-b-2 border-black pb-2">
            <div className="w-full text-sm text-gray-600">
              <span>Store name</span>
            </div>
            <div className="w-full text-sm text-gray-600 ">
              <span>Store address</span>
            </div>
          </div> */}
          <div className="w-full max-h-96 overflow-y-auto custom-scroll-bar border-b-2 border-black flex flex-col gap-2 mb-3">
            {order?.items.map((item, i) => {
              return <ItemInOrder key={i} item={item} />;
            })}
          </div>
          <div className=" flex flex-row justify-end items-center gap-0">
            <div className="flex flex-row gap-12">
              <div>
                <li>
                  <span>Total products: </span>
                  <span>{order?.items.length}</span>
                </li>
                <li>
                  <span>Total items: </span>
                  <span>{order?.total_items}</span>
                </li>
              </div>
              <div className=" flex items-center">
                <p className=" truncate text-lg font-bold text-black before:content-['$']">
                  {order?.total_price}
                </p>
              </div>{" "}
              {order?.status === "shipping" || order?.status === "prepared" ? (
                <>
                  <Button
                    onClick={() => {
                      handlingButton("delivered");
                    }}
                  >
                    Confirm
                  </Button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
