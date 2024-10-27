import { Card, CardBody, IconButton } from "@material-tailwind/react";
import ImageTest from "../../assets/images/polar-bear.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function ItemCard() {
  return (
    <div>
      <Card>
        <CardBody>
          <div className="w-full mb-5">
            <img src={ImageTest} alt="" className="w-full aspect-square" />
          </div>
          <div className="w-full">
            <div className="text-xl font-bold text-black">
              <p className="truncate">Items name</p>
            </div>
            <div className=" text-xl font-black text-gray-800 mb-2">
              <span className=" before:content-['$']">10000</span>
            </div>
            <div className="flex flex-row gap-3">
              <IconButton
                color="gray"
                className="text-white bg-black text-xl rounded-full"
              >
                <MdOutlineAddShoppingCart />
              </IconButton>
              <IconButton
                variant="text"
                color="white"
                className="text-black text-xl rounded-full"
              >
                <FaRegHeart />
              </IconButton>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
