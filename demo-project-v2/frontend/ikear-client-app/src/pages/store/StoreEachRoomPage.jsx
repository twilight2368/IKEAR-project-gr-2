import { useParams } from "react-router-dom";
import MenuFilter from "../../components/filter-search/MenuFilter";
import ItemCard from "../../components/items/ItemCard";

export default function StoreEachRoomPage() {
  const { id: room_name } = useParams();
  return (
    <>
      <div className="w-full pt-6 relative">
        <div className="w-full bg-white p-6 flex justify-between items-center mb-16 sticky top-20 z-[1]">
          <div className="w-1/3">
            <h2 className=" font-black flex flex-row items-center justify-center">
              <span className="w-1/3 text-sm">IKEAR room: </span>
              <p className="w-2/3 truncate font-normal text-sm pr-6">
                {room_name}
              </p>
            </h2>
          </div>
          <div className="w-3/4">
            <MenuFilter />
          </div>
        </div>

        <div className="w-full min-h-screen px-12">
          <div className="grid grid-cols-5 gap-6">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>
    </>
  );
}
