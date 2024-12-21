import { Card, CardBody, Checkbox, IconButton } from "@material-tailwind/react";
import ImageTest from "../../assets/images/polar-bear.png";
import { FaMinus, FaRegTrashAlt } from "react-icons/fa";
import { Rating } from "@material-tailwind/react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

export default function ItemInCart() {
  const [num, setNum] = useState(1);
  return (
    <div className="w-full">
      <Card className=" h-60 shadow-none rounded-none ">
        <CardBody className="h-full w-full flex flex-row gap-6 p-0">
          <div className=" w-1/6 h-full ">
            <div className="h-full w-full flex justify-center items-center">
              <img src={ImageTest} alt="" className="h-40 aspect-square" />
            </div>
          </div>
          <div className=" w-5/6 h-full flex flex-row">
            <div className=" w-11/12">
              <div className="text-xl font-bold text-black">
                <Link to="/store/item-detail/id">
                  <p className="truncate hover:underline">Items name</p>
                </Link>
                <p className=" font-thin text-sm text-gray-500">
                  Short description
                </p>
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
              <div className="h-6 mb-2 w-full">
                <div className=" flex flex-row gap-2 items-center text-black">
                  <FaCircleCheck />
                  <span className="text-xs">in current IKEAR store</span>
                </div>
              </div>
              <div className="w-full">
                <div className=" flex flex-row gap-1 items-center">
                  <div>
                    <IconButton
                      className=" bg-black"
                      color="gray"
                      onClick={() => {
                        setNum(num + 1);
                      }}
                    >
                      <FaPlus />
                    </IconButton>
                  </div>
                  <div>
                    <kbd className="kbd kbd-lg bg-white border-2 border-black text-black w-20">
                      {num}
                    </kbd>
                  </div>
                  <div>
                    <IconButton
                      className=" bg-black"
                      color="gray"
                      onClick={() => {
                        setNum(num > 1 ? num - 1 : 1);
                      }}
                    >
                      <FaMinus />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-1/12 flex flex-col justify-center items-center">
              <div>
                <Checkbox color="gray" size="lg" className=" checked:bg-black " />
              </div>
              <div>
                <IconButton className="text-black" variant="text" color="gray">
                  <FaRegTrashAlt />
                </IconButton>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <hr />
    </div>
  );
}
