import React from "react";
import ItemInCart from "../../components/items/ItemInCart";
import { Footer } from "../../components/footer/Footer";
import { Button, Option, Select } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartPage() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const cart = useSelector((state) => state.cart);
  return (
    <div className="w-full">
      <div className=" p-6 pt-12 ">
        <div className=" w-full mb-3">
          <span className=" text-4xl font-black ">My cart</span>
        </div>
        <div className=" text-sm text-gray-600 ">
          When you add products to your shopping bag, they will appear here.
        </div>
      </div>
      <div className=" sticky top-0 z-[1] pb-6 h-32 bg-white border-b-2  border-black ">
        <div className="w-full h-full flex flex-row">
          <div className=" w-4/6 px-24 flex flex-col gap-3 justify-center">
            <li>
              <span>Total products: </span>
              <span>{cart?.totalProducts}</span>
            </li>
            <li>
              <span>Total items: </span>
              <span>{cart?.totalItems}</span>
            </li>

           
          </div>
          <div className=" w-1/6 h-full flex justify-center items-center">
            <div className=" w-full h-full flex flex-col justify-center items-start">
              <span className=" text-sm italic text-gray-600">Total price</span>
              <p className=" truncate text-black font-black text-2xl before:content-['$']">
                {cart?.totalAmount}
              </p>
            </div>
          </div>
          <div className=" w-1/6 h-full flex justify-center items-center">
            <Button
              color="gray"
              className=" bg-black text-white"
              onClick={() => {
                navigate("/purchase");
              }}
            >
              {" "}
              Purchase
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen p-12 flex justify-center">
        <div className="w-4/5 grid grid-cols-1 ">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500">Your cart is empty</div>
          ) : (
            cartItems.map((item) => <ItemInCart key={item.id} item={item} />)
          )}
        </div>
      </div>
      <div className=" w-full">
        <Footer />
      </div>
    </div>
  );
}
