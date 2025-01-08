import React from "react";
import ItemBuying from "../../components/items/ItemBuying";
import {
  Button,
  Card,
  CardBody,
  Option,
  Select,
} from "@material-tailwind/react";

export default function PaymentPage() {
  return (
    <div className="p-6">
      <div className="w-full px-12 text-2xl font-black mb-6">Payment</div>
      <div className="w-full px-12 flex flex-row gap-6">
        <div className="w-1/2">
          <div className="mb-6">
            <div className="w-full text-sm text-gray-600">
              <span>Chosen store name: </span>
              <span>Store name</span>
            </div>
            <div className="w-full text-sm text-gray-600 ">
              <span>Chosen store address: </span>
              <span>Store address</span>
            </div>
          </div>

          <hr />
          <div className=" max-h-[600px] overflow-y-auto custom-scroll-bar">
            <ItemBuying />
            <ItemBuying />
            <ItemBuying />
            <ItemBuying />
            <ItemBuying />
            <ItemBuying />
          </div>
        </div>
        <div className="w-1/2">
          <Card>
            <CardBody>
              <div className=" flex flex-row items-center gap-0">
                <div className="w-1/2">
                  <li>
                    <span>Total products: </span>
                    <span>0</span>
                  </li>
                  <li>
                    <span>Total items: </span>
                    <span>0</span>
                  </li>
                </div>
                <div className=" w-1/2">
                  <span className=" text-sm italic text-gray-600">
                    Total price
                  </span>
                  <p className=" truncate text-black font-black text-2xl before:content-['$']">
                    10000000
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <Select label="Delivery Options">
                  <Option value="delivery">Delivery</Option>
                  <Option value="store">Take at Store</Option>
                </Select>
              </div>
              <div className="mt-4">
                <Select label="Purchase Method">
                  <Option value="offline">Buy Offline</Option>
                  <Option value="store">Buy at Store</Option>
                </Select>
              </div>
              <div className=" mt-8 flex justify-center items-center">
                <Button color="gray" className="bg-black">
                  {" "}
                  Confirm{" "}
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
