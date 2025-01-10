import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import ItemCategoryRoom from "../components/items/ItemCategoryRoom";
import axios from "axios";
export default function StoreRoomLayout() {
  const [roomList, setRoomList] = useState();
  useEffect(() => {
    axios.get("http://localhost:5000/service2/other/rooms").then((response) => {
      setRoomList(response.data.data);
      console.log("====================================");
      console.log(response.data.data);
      console.log("====================================");
    });
  }, []);
  return (
    <div className="relative">
      <div className="w-full flex flex-row h-40">
        <div className="w-1/6 h-full bg-black flex justify-center items-center">
          <div className="text-white font-black text-2xl">IKEAR rooms</div>
        </div>
        <div className="w-full overflow-x-auto flex flex-row px-3 gap-3 custom-scroll-bar">
          {roomList ? (
            <>
              {roomList.map((room, i) => {
                return (
                  <div key={i} className=" flex-shrink-0 w-1/5 ">
                    <ItemCategoryRoom label={room.name} room_id={room._id} />
                  </div>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
