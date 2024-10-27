import "../style.css";
import { TiShoppingCart } from "react-icons/ti";
import { Button, IconButton } from "@material-tailwind/react";
import { BiCategory } from "react-icons/bi";
import ItemCard from "../../components/items/ItemCard";
import ImageTest from "../../assets/images/polar-bear.png";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import ItemCategoryRoom from "../../components/items/ItemCategoryRoom";
import { useRef } from "react";
import ItemCategoryProduct from "../../components/items/ItemCategoryProduct";
import { Footer } from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const category_ref = useRef();
  const navigate = useNavigate();
  return (
    <div className=" min-h-screen">
      <div className="w-full relative landing-page-hero min-h-screen mb-20">
        <div className=" absolute w-full h-full bg-black/25">
          <div className="absolute text-right text-6xl font-black text-white flex flex-col gap-6 justify-center items-center top-1/3 right-1/2 translate-x-1/2 translate-y-1/2">
            <span className=" select-none">Welcome to IKEAR</span>
            <Button
              color="white"
              className=" border-black border-4 flex flex-row gap-2 justify-center items-center"
              onClick={() => {
                navigate("/store");
              }}
            >
              <span className="text-xl text-black">
                <TiShoppingCart />
              </span>
              <span>Shopping now </span>
            </Button>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white mt-0 w-full mb-0 py-5 text-3xl text-center font-black">
          New stuffs
        </div>
        <div className="p-20 grid grid-cols-5 gap-5">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
      <div>
        <div className="bg-white mt-0 w-full mb-0 py-5 text-3xl text-center font-black">
          Popular stuffs
        </div>
        <div className="p-20 grid grid-cols-5 gap-5">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
      <div className="min-h-96 px-28">
        <div className="w-full flex flex-row gap-0 h-60 relative">
          <div className=" w-1/6 aspect-square">
            <div className="w-full h-full relative categories-landing-page">
              <div className="absolute h-full w-full bg-black/20">
                <div className="absolute top-1/2 right-1/2 translate-x-1/2 text-white ">
                  <span>Shop by room</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-4/5 relative">
            <div className=" w-10 h-10 left-2 top-1/2 -translate-y-2/3 absolute">
              <IconButton
                variant="outlined"
                color="gray"
                className=" text-black rounded-full duration-150 opacity-20 hover:opacity-100"
                onClick={() => {
                  category_ref.current.scrollBy(
                    -category_ref.current.clientWidth / 2,
                    0
                  );
                }}
              >
                <FaLongArrowAltLeft />
              </IconButton>
            </div>
            <div className=" w-10 h-10 right-2 top-1/2 -translate-y-2/3 absolute">
              <IconButton
                variant="outlined"
                color="gray"
                className=" text-black rounded-full duration-150 opacity-20 hover:opacity-100"
                onClick={() => {
                  category_ref.current.scrollBy(
                    category_ref.current.clientWidth / 2,
                    0
                  );
                }}
              >
                <FaLongArrowAltRight />
              </IconButton>
            </div>
            <div
              className="w-full h-full flex flex-nowrap overflow-x-scroll"
              style={{
                scrollBehavior: "smooth",
              }}
              ref={category_ref}
            >
              <div className=" h-full w-1/4 flex-shrink-0 ">
                <ItemCategoryRoom />
              </div>
              <div className=" h-full w-1/4 flex-shrink-0 ">
                <ItemCategoryRoom />
              </div>
              <div className=" h-full w-1/4 flex-shrink-0 ">
                <ItemCategoryRoom />
              </div>
              <div className=" h-full w-1/4 flex-shrink-0 ">
                <ItemCategoryRoom />
              </div>
              <div className=" h-full w-1/4 flex-shrink-0 ">
                <ItemCategoryRoom />
              </div>
              <div className=" h-full w-1/4 flex-shrink-0 ">
                <ItemCategoryRoom />
              </div>
              <div className=" h-full w-1/4 flex-shrink-0 ">
                <ItemCategoryRoom />
              </div>
              <div className=" h-full w-1/4 flex-shrink-0 ">
                <ItemCategoryRoom />
              </div>
              <div className="h-full w-1/4 flex-shrink-0">
                <div className="h-full w-full flex justify-center items-center">
                  <div className=" font-bold text-center">
                    <div className=" text-6xl flex justify-center items-center mb-3">
                      <BiCategory />
                    </div>
                    <span className=" hover:underline ">
                      See all categories
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" min-h-96 w-full px-28 mb-60">
        <div className="w-full text-center text-3xl font-black mb-12">
          Shop products
        </div>
        <div className="w-full grid grid-cols-5 gap-6 p-3 mb-10">
          <ItemCategoryProduct />
          <ItemCategoryProduct />
          <ItemCategoryProduct />
          <ItemCategoryProduct />
          <ItemCategoryProduct />

          <ItemCategoryProduct />
          <ItemCategoryProduct />
          <ItemCategoryProduct />
          <ItemCategoryProduct />
          <ItemCategoryProduct />

          <ItemCategoryProduct />
          <ItemCategoryProduct />
          <ItemCategoryProduct />
          <ItemCategoryProduct />
          <ItemCategoryProduct />
        </div>
        <div className="w-full text-center underline">See all products</div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
