import React, { useState, useEffect } from "react";
import RoomCard from "../../components/admin/RoomCard";
import ProductCard from "../../components/admin/ProductCard";
import HolidayCard from "../../components/admin/HolidayCard";
import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import { toast } from "react-toastify";

export default function AdminProductRoomPage() {
  const [holidays, setHolidays] = useState([]);
  const [products, setProducts] = useState([]);
  const [rooms, setRooms] = useState([]);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [holidayRes, productRes, roomRes] = await Promise.all([
          axios.get("http://localhost:5000/service2/other/holidays"),
          axios.get("http://localhost:5000/service2/other/products"),
          axios.get("http://localhost:5000/service2/other/rooms"),
        ]);

        setHolidays(holidayRes.data.data);
        setProducts(productRes.data.data);
        setRooms(roomRes.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Error fetching data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen">
      <div className="px-6 mb-6 flex flex-row gap-6 justify-end items-center">
        <div>
          <h2 className=" text-xl font-black">Tools:</h2>
        </div>
        <form className="flex flex-row gap-3">
          <Input label="Add room" />
          <Button className="w-full">Add room</Button>
        </form>
        <form className="flex flex-row gap-3">
          <Input label="Add holiday" />
          <Button className="w-full">Add holiday</Button>
        </form>
        <form className="flex flex-row gap-3">
          <Input label="Add product" />
          <Button className="w-full">Add product</Button>
        </form>
      </div>
      <div className="w-full px-3  flex flex-row">
        <div className="w-2/5 p-3 border-r-[1px] border-black">
          <div className="text-lg font-black mb-3 text-black">Rooms</div>
          <div className=" grid grid-cols-3 gap-3 px-1 ">
            {rooms?.map((room, index) => (
              <RoomCard key={index} room={room} />
            ))}
          </div>
        </div>
        <div className="w-2/5 p-3">
          <div className="text-lg font-black text-black mb-3">Products</div>
          <div className=" grid grid-cols-3 gap-3 px-1 ">
            {products?.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
        <div className="w-1/5 p-3 border-l-[1px] border-black">
          <div className="text-lg font-black mb-3 text-black">Holiday</div>
          <div className=" grid grid-cols-1 gap-3 px-1 ">
            {holidays?.map((holiday, index) => (
              <HolidayCard key={index} holiday={holiday} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
