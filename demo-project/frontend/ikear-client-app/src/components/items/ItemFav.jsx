import { Card, CardBody, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
export default function ItemFav() {
  const [heartBroken, setHeartBroken] = useState(false);
  return (
    <div className="w-full">
      <Card>
        <CardBody className=" h-24 flex flex-row gap-2">
          <div className="w-5/6 h-full">
            <div className="w-full">
              <p className=" truncate text-2xl text-black font-black">
                Item name
              </p>
            </div>
            <div className="w-full text-sm text-gray-600">
              <p className=" truncate ">
                Description Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Consectetur, et modi officia voluptates, quam magni
                provident maxime iusto qui ipsum voluptatum ullam voluptatibus
                debitis, deleniti eligendi fugit nobis distinctio maiores.
              </p>
            </div>
          </div>
          <div className="w-1/6 h-full flex flex-row justify-center items-center gap-3">
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
            <IconButton
              color="gray"
              className="text-white bg-black text-xl rounded-full"
            >
              <MdOutlineAddShoppingCart />
            </IconButton>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
