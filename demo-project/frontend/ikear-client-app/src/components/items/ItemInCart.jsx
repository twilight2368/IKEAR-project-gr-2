import { Card, CardBody, Checkbox, IconButton } from "@material-tailwind/react";
import ImageTest from "../../assets/icons/product-svgrepo-com.svg";
import { FaMinus, FaRegTrashAlt, FaPlus } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../app/slicer/CartSlicer";

export default function ItemInCart({ item }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(addToCart(item));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(removeFromCart(item.id));
    }
  };

  const handleRemove = () => {
    // Remove all quantities of this item
    for (let i = 0; i < item.quantity; i++) {
      dispatch(removeFromCart(item.id));
    }
  };

  return (
    <div className="w-full">
      <Card className="h-40 shadow-none">
        <CardBody className="h-full w-full flex flex-row gap-6 p-0">
          <div className="w-1/6 h-full">
            <div className="h-full w-full flex justify-center items-center">
              <img src={ImageTest} alt="" className="h-32 aspect-square" />
            </div>
          </div>
          <div className="w-5/6 h-full flex flex-row">
            <div className="w-8/12">
              <div className="h-6 mb-2 w-full">
                {Math.round(Math.random()) ? (
                  <div className="flex flex-row gap-2 items-center text-light-green-400">
                    <FaCircleCheck />
                    <span className="text-xs">in current IKEAR store</span>
                  </div>
                ) : (
                  <div className="flex flex-row gap-2 items-center text-red-400">
                    <TbError404 />
                    <span className="text-xs">not in current IKEAR store</span>
                  </div>
                )}
              </div>
              <div className="text-xl font-bold text-black">
                <Link to={`/store/item-detail/${item.id}`}>
                  <p className="truncate hover:underline">{item.name}</p>
                </Link>
                <p className="truncate font-thin text-sm text-gray-500">
                  {item.product} - {item.room} - {item.holiday}
                </p>
              </div>
              <div className="text-lg font-black text-gray-800 mb-2">
                <span className="before:content-['$']">{item.price}</span>
              </div>
            </div>
            <div className="w-3/12">
              <div className="flex flex-row h-full gap-1 items-center">
                <IconButton
                  className="bg-black"
                  size="sm"
                  color="gray"
                  onClick={handleDecrement}
                >
                  <FaMinus />
                </IconButton>
                <kbd className="kbd kbd-md bg-white border-2 border-black text-black w-20">
                  {item.quantity}
                </kbd>
                <IconButton
                  className="bg-black"
                  color="gray"
                  size="sm"
                  onClick={handleIncrement}
                >
                  <FaPlus />
                </IconButton>
              </div>
            </div>
            <div className="w-1/12 flex flex-col justify-center items-center">
              {/* <Checkbox color="gray" size="lg" className="checked:bg-black" /> */}
              <IconButton
                className="text-black"
                variant="text"
                color="gray"
                onClick={handleRemove}
              >
                <FaRegTrashAlt />
              </IconButton>
            </div>
          </div>
        </CardBody>
      </Card>
      <hr />
    </div>
  );
}
