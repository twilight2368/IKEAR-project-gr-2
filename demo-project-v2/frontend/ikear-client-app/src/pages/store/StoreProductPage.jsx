import React from "react";
import ItemCard from "../../components/items/ItemCard";
import { Carousel, IconButton } from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ItemCategoryProduct from "../../components/items/ItemCategoryProduct";
import ImageHeader from "../../assets/images/animals-bears-polar-bears-cubs-wallpaper-d37786cedb3ce3002e9e583c1c6409de.jpg";

export default function StoreProductPage() {
  return (
    <div className="w-full min-h-screen">
      <div className=" mb-10 flex flex-row gap-0 justify-center items-center text-white bg-black">
        <div className="w-1/3 h-full p-3">
          <div className="w-full mb-6">
            <h1 className=" text-5xl font-black ">
              Always something new and inspiring
            </h1>
          </div>
          <div>
            <p className=" mb-6 text-sm">
              Looking to refresh your home? Adding new home accessories.
              Whatever homewares you choose, let your personality lead the way.
            </p>
            <div className=" text-white hover:text-gray-300 hover:underline">
              <a href="#all-product-kinds">See all products ...</a>
            </div>
          </div>
        </div>
        <div className="w-2/3 ">
          <img src={ImageHeader} alt="" className="w-full h-auto" />
        </div>
      </div>

      <div className="p-10 mb-20">
        <h2 className=" text-4xl font-black mb-6">IKEAR Collections</h2>
        <div className="w-full grid grid-cols-5 gap-6">
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
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
      <div className="p-10 mb-20">
        <h2 className=" text-4xl font-black mb-6">IKEAR Specials</h2>
        <div className="w-full">
          <Carousel
            className=" w-full"
            prevArrow={({ handlePrev }) => (
              <IconButton
                size="lg"
                color="gray"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4 bg-black text-xl rounded-full"
              >
                <FaArrowLeft />
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                size="lg"
                color="gray"
                onClick={handleNext}
                className="!absolute top-2/4 right-4 -translate-y-2/4 bg-black text-xl rounded-full"
              >
                <FaArrowRight />
              </IconButton>
            )}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <div className="w-full grid grid-cols-5 gap-6 p-3">
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
            <div className="w-full grid grid-cols-5 gap-6 p-3">
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
            <div className="w-full grid grid-cols-5 gap-6 p-3">
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
          </Carousel>
        </div>
      </div>
      <div className=" min-h-96 w-full px-10 mb-10">
        <div
          className="w-full text-3xl font-black mb-12"
          id="all-product-kinds"
        >
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
        <div className="w-full flex flex-row justify-center items-center gap-6">
          <IconButton color="gray" className="bg-black">
            <FaArrowLeft />
          </IconButton>
          <IconButton color="gray" className="bg-black">
            <FaArrowRight />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
