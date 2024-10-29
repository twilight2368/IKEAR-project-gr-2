import { Card, CardBody, IconButton } from "@material-tailwind/react";
import ImageTest from "../../assets/images/polar-bear.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Rating } from "@material-tailwind/react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaStar, FaRegStar } from "react-icons/fa";
export default function ItemCard() {
  return (
    <div>
      <Card className=" shadow-none">
        <CardBody>
          <div className="h-6 mb-2 w-full">
            <div className=" flex flex-row gap-2 items-center text-black">
              <FaCircleCheck />
              <span className="text-xs">in current IKEAR store</span>
            </div>
          </div>
          <div className="w-full mb-6">
            <img src={ImageTest} alt="" className="w-full aspect-square" />
          </div>
          <div className="w-full">
            <div className="text-xl font-bold text-black">
              <p className="truncate">Items name</p>
            </div>
            <div className=" text-lg font-black text-gray-800 mb-2">
              <span className=" before:content-['$']">10000</span>
            </div>
            <div className="h-10 mb-2">
              <Rating
                value={4}
                ratedIcon={<FaStar color="black" />}
                unratedIcon={<FaRegStar color="black" />}
                className="h-full"
                readonly
              />
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
