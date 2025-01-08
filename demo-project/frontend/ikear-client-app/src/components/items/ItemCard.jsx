import { Card, CardBody, IconButton } from "@material-tailwind/react";
import ImageTest from "../../assets/icons/product-svgrepo-com.svg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Rating } from "@material-tailwind/react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaStar, FaRegStar, FaHeartBroken } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ItemCard({ isFav = false }) {
  const [heartBroken, setHeartBroken] = useState(false);
  return (
    <div>
      <Card className=" shadow-none">
        <CardBody>
          <div className="w-full mb-6">
            <img src={ImageTest} alt="" className="w-full aspect-square" />
          </div>
          <div className="w-full">
            <div className="text-xl font-bold text-black">
              <Link to="/store/item-detail/id">
                <p className="truncate hover:underline">Items name</p>
              </Link>
            </div>
            <div className=" text-lg font-black text-gray-800 mb-2">
              <span className=" before:content-['$']">10000</span>
            </div>
            <div className="flex flex-row gap-3">
              <IconButton
                color="gray"
                className="text-white bg-black text-xl rounded-full"
              >
                <MdOutlineAddShoppingCart />
              </IconButton>
              {isFav ? (
                <>
                  {" "}
                  <IconButton
                    variant="text"
                    color="red"
                    className=" rounded-full text-xl "
                    onMouseOver={() => {
                      setHeartBroken(true);
                    }}
                    onMouseLeave={() => {
                      setHeartBroken(false);
                    }}
                  >
                    {heartBroken ? <FaHeartBroken /> : <FaHeart />}
                  </IconButton>
                </>
              ) : (
                <>
                  <IconButton
                    variant="text"
                    color="white"
                    className="text-black text-xl rounded-full"
                  >
                    <FaRegHeart />
                  </IconButton>
                </>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
