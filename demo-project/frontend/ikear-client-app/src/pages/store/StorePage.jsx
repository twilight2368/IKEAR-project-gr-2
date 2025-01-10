import { useEffect, useState } from "react";
import ItemCard from "../../components/items/ItemCard";
import RoomStoreItem from "../../components/items/RoomStoreItem";
import "../style.css";
import ImageTest from "../../assets/icons/room-svgrepo-com.svg";
import ItemCategoryProduct from "../../components/items/ItemCategoryProduct";
import axios from "axios";

export default function StorePage() {
  const [dataSample1, setDataSample1] = useState();
  const [roomList, setRoomList] = useState();
  const [productList, setProductList] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/service2/item/items-random", {
        params: {
          num: 10,
        },
      })
      .then((response) => {
        setDataSample1(response.data.data);
        console.log("====================================");
        console.log(response.data.data);
        console.log("====================================");
      });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:5000/service2/other/rooms").then((response) => {
      setRoomList(response.data.data);
      console.log("====================================");
      console.log(response.data.data);
      console.log("====================================");
    });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5000/service2/other/products")
      .then((response) => {
        setProductList(response.data.data);
        console.log("====================================");
        console.log(response.data.data);
        console.log("====================================");
      });
  }, []);
  return (
    <div className="w-full">
      <div className="w-full p-6 mb-6">
        <h2 className=" text-3xl font-black mb-6">New products</h2>
        <div className="grid grid-cols-5 gap-6 px-6">
          {dataSample1 ? (
            <>
              {dataSample1.map((data, i) => (
                <ItemCard key={i} item={data} />
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="w-full p-6">
        <h2 className=" text-3xl font-black mb-6">
          Find items best for your room
        </h2>
        <div className="w-1/2 my-10 text-gray-800 ">
          <p>
            Do you have a particuar room or rooms in your home that needs a
            refresh?
            <br />
            Start your search here to find furniture and home accessories for
            every room in your home here.
          </p>
        </div>
        <div className="w-full p-3 mb-20">
          <div className="w-full grid grid-cols-5 grid-rows-3 gap-1">
            <div className=" row-span-2 flex justify-center items-center bg-black text-white">
              <div className=" text-3xl font-black">Shop by room</div>
            </div>
            {roomList ? (
              <>
                {roomList.map((room, i) => {
                  return (
                    <RoomStoreItem
                      key={i}
                      label={room.name}
                      room_id={room._id}
                      background_image={ImageTest}
                    />
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className=" min-h-96 w-full mb-0">
          <div className="w-full text-3xl font-black mb-12">Shop products</div>
          <div className="w-full grid grid-cols-6 gap-6 p-3 mb-10">
            {productList ? (
              <>
                {productList.map((e, i) => {
                  return (
                    <ItemCategoryProduct
                      key={i}
                      label={e.name}
                      product_id={e._id}
                    />
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
