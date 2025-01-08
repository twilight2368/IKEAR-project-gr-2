import { Card, CardBody } from "@material-tailwind/react";
import ImageTest from "../../assets/icons/product-svgrepo-com.svg";
import { Link } from "react-router-dom";

export default function ItemBuying() {
  return (
    <div className="w-full">
      <Card className="shadow-none rounded-none ">
        <CardBody className="h-full w-full flex flex-row gap-6">
          <div className="w-1/6">
            <div className="h-full w-full flex justify-center items-center">
              <img src={ImageTest} alt="" className="h-full aspect-square" />
            </div>
          </div>
          <div className=" w-5/6 h-full">
            <div className="w-full">
              <div className=" font-bold text-black">
                <Link to="/store/item-detail/id">
                  <p className="truncate hover:underline">Items name</p>
                </Link>
              </div>
              <div className=" font-black text-gray-800 ">
                <span className=" before:content-['$']">10000</span>
              </div>
            </div>
            <div className=" w-full font-black text-gray-800">
              <span className=" before:content-['x']">1</span>
            </div>
          </div>
        </CardBody>
      </Card>
      <hr />
    </div>
  );
}
