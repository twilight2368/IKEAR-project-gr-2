import "../style.css";

import { TiShoppingCart } from "react-icons/ti";
import { Button, IconButton } from "@material-tailwind/react";
import ItemCard from "../../components/items/ItemCard";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import ItemCategoryRoom from "../../components/items/ItemCategoryRoom";
import { useEffect, useRef, useState } from "react";
import ItemCategoryProduct from "../../components/items/ItemCategoryProduct";
import { Footer } from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function LandingPage() {
  const category_ref = useRef();
  const navigate = useNavigate();
  const [dataSample1, setDataSample1] = useState();
  const [dataSample2, setDataSample2] = useState();
  const [roomList, setRoomList] = useState();
  const [productList, setProductList] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/service2/item/items-random", {
        params: {
          num: 10,
        },
      })
      .then((response) => {
        setDataSample1(response.data.data);
        console.log("====================================");
        console.log(response.data.data);
        console.log("====================================");
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5000/service2/item/items-random", {
        params: {
          num: 10,
        },
      })
      .then((response) => {
        setDataSample2(response.data.data);
        console.log("====================================");
        console.log(response.data.data);
        console.log("====================================");
      });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:5000/service2/other/rooms").then((response) => {
      setRoomList(response.data.data);
      console.log("====================================");
      console.log(response.data.data);
      console.log("====================================");
    });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5000/service2/other/products")
      .then((response) => {
        setProductList(response.data.data);
        console.log("====================================");
        console.log(response.data.data);
        console.log("====================================");
      });
  }, []);
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
          {dataSample1 ? (
            <>
              {dataSample1.map((data, i) => (
                <ItemCard key={i} item={data} />
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>
        <div className="bg-white mt-0 w-full mb-0 py-5 text-3xl text-center font-black">
          Popular stuffs
        </div>
        <div className="p-20 grid grid-cols-5 gap-5">
          {dataSample2 ? (
            <>
              {dataSample2.map((data, i) => (
                <ItemCard key={i} item={data} />
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="min-h-96 px-28">
        <div className="w-full flex flex-row gap-0 h-60 relative">
          <div className=" w-1/6 aspect-square">
            <div className="w-full h-full relative categories-landing-page">
              <div className="absolute h-full w-full bg-black">
                <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-white ">
                  <span>Shop by room</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-4/5 relative">
            <div className=" w-10 h-10 left-2 top-1/2 -translate-y-2/3 absolute z-10">
              <IconButton
                color="gray"
                className=" text-white bg-black rounded-full duration-150 opacity-20 hover:opacity-100"
                onClick={() => {
                  category_ref.current.scrollBy(
                    -category_ref.current.clientWidth,
                    0
                  );
                }}
              >
                <FaLongArrowAltLeft />
              </IconButton>
            </div>
            <div className=" w-10 h-10 right-2 top-1/2 -translate-y-2/3 absolute z-10">
              <IconButton
                color="gray"
                className=" text-white bg-black rounded-full duration-150 opacity-20 hover:opacity-100"
                onClick={() => {
                  category_ref.current.scrollBy(
                    category_ref.current.clientWidth,
                    0
                  );
                }}
              >
                <FaLongArrowAltRight />
              </IconButton>
            </div>
            <div
              className="hide-scroll-bar  w-full h-full flex flex-nowrap overflow-x-scroll"
              style={{
                scrollBehavior: "smooth",
              }}
              ref={category_ref}
            >
              {roomList ? (
                <>
                  {roomList.map((room, i) => {
                    return (
                      <div key={i} className=" h-full w-1/3 flex-shrink-0 p-2">
                        <ItemCategoryRoom
                          label={room.name}
                          room_id={room._id}
                        />
                      </div>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className=" min-h-96 w-full px-28 mb-60">
        <div className="w-full text-center text-3xl font-black mb-12">
          Shop products
        </div>
        <div className="w-full grid grid-cols-5 gap-6 p-3 mb-10">
          {productList ? (
            <>
              {productList.map((e, i) => {
                return (
                  <ItemCategoryProduct
                    key={i}
                    label={e.name}
                    product_id={e._id}
                  />
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
