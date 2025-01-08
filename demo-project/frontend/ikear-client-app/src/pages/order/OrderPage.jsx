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
} from "@material-tailwind/react";
import { Footer } from "../../components/footer/Footer";
import ItemInOrder from "../../components/items/ItemInOrder";

export default function OrderPage() {
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
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
              </div>
            </TabPanel>
            <TabPanel key={2} value={2}>
              <div className=" flex flex-col gap-6">
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
              </div>
            </TabPanel>
            <TabPanel key={3} value={3}>
              <div className=" flex flex-col gap-6">
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
              </div>
            </TabPanel>
            <TabPanel key={4} value={4}>
              <div className=" flex flex-col gap-6">
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
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

const OrderItem = () => {
  return (
    <>
      <Card>
        <CardBody>
          <div className="mb-2">
            <Chip value="Status" className="w-fit" />
          </div>
          <div className=" border-b-2 border-black pb-2">
            <div className="w-full text-sm text-gray-600">
              <span>Store name</span>
            </div>
            <div className="w-full text-sm text-gray-600 ">
              <span>Store address</span>
            </div>
          </div>
          <div className="w-full max-h-96 overflow-y-auto custom-scroll-bar border-b-2 border-black flex flex-col gap-2 mb-3">
            <ItemInOrder />
            <ItemInOrder />
            <ItemInOrder />
            <ItemInOrder />
            <ItemInOrder />
            <ItemInOrder />
          </div>
          <div className=" flex flex-row justify-end items-center gap-0">
            <div className="flex flex-row gap-12">
              <div>
                <li>
                  <span>Total products: </span>
                  <span>0</span>
                </li>
                <li>
                  <span>Total items: </span>
                  <span>0</span>
                </li>
              </div>
              <div className=" flex items-center">
                <p className=" truncate text-lg font-bold text-black before:content-['$']">
                  10000000
                </p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
