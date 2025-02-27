import { useEffect, useState } from "react";
import ImageProduct from "../../assets/icons/product-svgrepo-com.svg";
import { useParams } from "react-router-dom";
import { Carousel, IconButton, Rating } from "@material-tailwind/react";
import { FaStar, FaRegStar, FaRegHeart } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import ItemCard from "../../components/items/ItemCard";
import StoreAvailableAddress from "../../components/store-detail/StoreAvailableAddress";
import CommentByUserDisplay from "../../components/comment-users/CommentByUserDisplay";
import CommentsItemDialog from "../../components/dialog/CommentsItemDialog";
import axios from "axios";
import Loading from "../../components/loading/Loading";
import AddCartButton from "../../components/button/AddCartButton";
import FavButton from "../../components/button/FavButton";
export default function ItemDetailsPage() {
  const { id: item_id } = useParams();
  const [dataSample1, setDataSample1] = useState();
  const [dataItem, setDataItem] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/service2/item/items-random", {
        params: {
          num: 15,
        },
      })
      .then((response) => {
        setDataSample1(response.data.data);
        console.log("====================================");
        console.log(response.data.data);
        console.log("====================================");
      });
  }, [item_id]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/service2/item/items/" + item_id)
      .then((response) => {
        setDataItem(response.data.data);
        console.log("====================================");
        console.log(response.data.data);
        console.log("====================================");
      });
  }, [item_id]);
  return (
    <div className="w-full min-h-screen">
      {dataItem ? (
        <>
          <div className="w-full min-h-[500px] flex flex-row items-start gap-6 px-6">
            <div className="w-1/3 flex justify-center items-center">
              <div className="w-full h-full">
                <Carousel className="w-full rounded-xl">
                  <img
                    src={ImageProduct}
                    alt="image 1"
                    className=" w-full aspect-square object-contain"
                  />
                  <img
                    src={ImageProduct}
                    alt="image 2"
                    className="w-full aspect-square  object-contain"
                  />
                  <img
                    src={ImageProduct}
                    alt="image 3"
                    className="w-full aspect-square  object-contain"
                  />
                </Carousel>
              </div>
            </div>
            <div className="w-2/3 h-full flex flex-row">
              <div className="w-11/12">
                <div className="h-6 mb-0 w-full">
                  <div className=" flex flex-row gap-2 items-center text-black">
                    <FaCircleCheck />
                    <span className="text-xs">in current IKEAR store</span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-full mb-6">
                    <p className=" ibm-font text-3xl font-black">
                      {dataItem.name}
                    </p>
                    <p className=" text-gray-500">
                      {dataItem.short_description}
                    </p>
                  </div>
                  <div className="mb-6 w-full flex flex-row gap-6 items-end">
                    <span
                      className="w-fit p-2  h-16 border-black border-2 before:content-['$'] font-black ibm-font text-4xl "
                      style={{ boxShadow: "black 6px 6px" }}
                    >
                      {dataItem.price}
                    </span>
                    {/* <span className="before:content-['-'] after:content-['%'] font-black ibm-font text-xl">
                      100
                    </span> */}
                  </div>
                </div>
                <hr />

                <div className="mb-6">
                  <div className=" p-3">
                    <div className=" flex flex-row gap-2 items-center mb-2">
                      <h6 className=" text-lg font-black">Color:</h6>{" "}
                      <span className=" badge badge-outline">
                        {" "}
                        {dataItem.color}
                      </span>
                    </div>
                    <div className=" flex flex-row gap-2 items-center mb-2">
                      <h6 className=" text-lg font-black">Size:</h6>{" "}
                      <span className=" badge badge-outline">
                        {" "}
                        {dataItem.size}
                      </span>
                    </div>
                    <div className="mb-2">
                      <h6 className=" text-lg font-black">Description:</h6>{" "}
                      <span className=" text-sm text-gray-600 ">
                        <span className=" text-black font-bold">
                          {dataItem.description}
                        </span>
                        . Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Hic voluptate, harum magnam minima dolore sed,
                        voluptatem a amet, atque perferendis accusantium
                        ratione. Expedita, commodi. Consequatur atque
                        perspiciatis amet temporibus incidunt. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Hic voluptate,
                        harum magnam minima dolore sed, voluptatem a amet, atque
                        perferendis accusantium ratione. Expedita, commodi.
                        Consequatur atque perspiciatis amet temporibus incidunt.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Hic voluptate, harum magnam minima dolore sed,
                        voluptatem a amet, atque perferendis accusantium
                        ratione. Expedita, commodi. Consequatur atque
                        perspiciatis amet temporibus incidunt.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/12 h-full flex flex-col items-center gap-3">
                {dataItem ? <AddCartButton item={dataItem} /> : <></>}
                <FavButton />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" w-full flex justify-center mb-12">
            <Loading />
          </div>
        </>
      )}
      <div className="min-h-96 mb-20">
        <div className="w-full h-full flex flex-row gap-12 px-12">
          <div className="w-1/2">
            <div className=" mb-3 flex flex-row justify-between items-center">
              <div className="text-xl text-black font-black">Reviews</div>
              <div className="flex flex-row items-center gap-6">
                <Rating
                  value={4}
                  ratedIcon={<FaStar color="black" />}
                  unratedIcon={<FaRegStar color="black" />}
                  className="h-full"
                  readonly
                />
                <div>(100)</div>
              </div>
            </div>
            <div className="flex flex-col gap-6 overflow-y-auto h-[400px] pb-12 custom-scroll-bar">
              <CommentByUserDisplay />
              <CommentByUserDisplay />
              <CommentByUserDisplay />
              <CommentByUserDisplay />
              <CommentByUserDisplay />
              <CommentByUserDisplay />
            </div>
          </div>
          <div className="w-1/2">
            <div className="text-xl text-black font-black mb-3 border-b-2">
              Available stores
            </div>
            <div className="flex flex-col gap-6 overflow-y-auto h-[400px] pb-12 custom-scroll-bar">
              <StoreAvailableAddress />
              <StoreAvailableAddress />
              <StoreAvailableAddress />
              <StoreAvailableAddress />
              <StoreAvailableAddress />
              <StoreAvailableAddress />
              <StoreAvailableAddress />
            </div>
          </div>
        </div>
      </div>
      <div className=" px-6 mb-20">
        <div className=" w-full mb-12 ">
          <span className=" text-4xl font-black ibm-font ">Similar items</span>
        </div>
        <div className="w-full">
          <div className="w-full grid grid-cols-5 gap-6 px-6">
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
      </div>
    </div>
  );
}
