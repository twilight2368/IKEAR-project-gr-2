import { IoCloseOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import "./style.css";
import { IconButton, Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import StoreItemAdressDisplay from "../store-detail/StoreItemAdressDisplay";
export default function StoreDrawerContent({ onClose }) {
  const date = new Date();
  return (
    <div className="h-screen relative">
      <div className=" absolute top-2 right-2">
        <IconButton
          onClick={onClose}
          variant="text"
          color="red"
          className=" rounded-full text-xl"
        >
          <IoCloseOutline />
        </IconButton>
      </div>
      <div className=" h-56 p-6">
        <div className="mb-6">
          <span className=" text-3xl font-black ">Select store</span>
        </div>
        <div className="w-full text-sm text-gray-600">
          <span>Current store name: </span>
          <span>Store name</span>
        </div>
        <div className="w-full text-sm text-gray-600 ">
          <span>Current store address: </span>
          <span>Store address</span>
        </div>
        <div>
          <span
            className=" text-black hover:underline text-xs"
            onClick={onClose}
          >
            <Link to="/store-detail/store-id">See current store page</Link>
          </span>
        </div>
        <div className="w-full mt-3 flex flex-row gap-3">
          <div className="w-11/12">
            <Input color="black" label="Store name or address" />
          </div>
          <div className="w-1/12 h-full">
            <IconButton color="gray" className="bg-black text-white">
              <FaSearch />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="store-drawer-content overflow-y-auto custom-scroll-bar p-6 bg-gray-200 ">
        <div className="w-full flex flex-col gap-4">
          <StoreItemAdressDisplay />
          <StoreItemAdressDisplay />

          <StoreItemAdressDisplay />
          <StoreItemAdressDisplay />
          <StoreItemAdressDisplay />

          <StoreItemAdressDisplay />
          <StoreItemAdressDisplay />
          <StoreItemAdressDisplay />
        </div>
        <div>
          <hr className="my-8 border-blue-gray-50" />
          <Typography color="blue-gray" className="text-center font-normal">
            &copy; {date.getFullYear()} IKEAR
          </Typography>
        </div>
      </div>
    </div>
  );
}
