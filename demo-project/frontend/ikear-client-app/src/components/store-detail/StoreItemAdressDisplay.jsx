import { IconButton } from "@material-tailwind/react";
import { MdOutlineLocationOn } from "react-icons/md";
export default function StoreItemAdressDisplay() {
  return (
    <>
      <div className="min-h-16 shadow-md rounded bg-white p-2 flex flex-row gap-0">
        <div className="w-5/6">
          <div className="w-full">
            <p className="text-lg font-black truncate ">Store name</p>
          </div>
          <div className="w-full">
            <p className="text-sm text-gray-600 truncate">
              123 street, city, country
            </p>
          </div>
        </div>
        <div className="w-1/6 flex justify-center items-center">
          <IconButton color="gray" className="bg-black text-lg">
            <MdOutlineLocationOn />
          </IconButton>
        </div>
      </div>
    </>
  );
}
