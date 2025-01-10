import { Card, CardBody, IconButton } from "@material-tailwind/react";
import ImageTest from "../../assets/icons/product-svgrepo-com.svg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Rating } from "@material-tailwind/react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaHeartBroken } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddCartButton from "../button/AddCartButton";
import FavButton from "../button/FavButton";

export default function ItemCard({ isFav = false, item }) {
  return (
    <div>
      <Card className=" shadow-none">
        <CardBody>
          <div className="w-full mb-6">
            <img src={ImageTest} alt="" className="w-full aspect-square" />
          </div>
          <div className="w-full">
            <div className="text-xl font-bold text-black">
              <Link to={`/store/item-detail/${item?._id}`}>
                <p className="truncate hover:underline">{item?.name}</p>
              </Link>
            </div>
            <div className=" text-lg font-black text-gray-800 mb-2">
              <span className=" before:content-['$']">{item?.price}</span>
            </div>
            <div className="flex flex-row gap-3">
              <AddCartButton item={item} />
              <FavButton isFav={isFav} />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
