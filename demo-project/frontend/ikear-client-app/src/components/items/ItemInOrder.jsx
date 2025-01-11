import { Card, CardBody } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import ImageTest from "../../assets/icons/product-svgrepo-com.svg";

export default function ItemInOrder({ item }) {
  return (
    <div className="w-full">
      <Card className="shadow-none rounded-none ">
        <CardBody className="h-full w-full flex flex-row gap-6">
          <div className=" w-full h-full flex flex-row">
            <div className="w-2/12">
              <div className="h-full w-full flex justify-center items-center">
                <img src={ImageTest} alt="" className="h-20 aspect-square" />
              </div>
            </div>
            <div className="w-10/12">
              <div className=" font-bold text-black">
                <Link to="/store/item-detail/id">
                  <p className="truncate hover:underline">{item?.item?.name}</p>
                </Link>
              </div>
              <div className=" w-full font-black text-gray-800">
                <span className=" before:content-['x']">{item.quantity}</span>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <hr />
    </div>
  );
}
