import BearHeadingImage from "../../assets/images/fantasy-men-man-polar-bear-hd-wallpaper-48367d583090bc48f0ccd15ef812243a.jpg";

import MenuFilter from "../../components/filter-search/MenuFilter";
import ItemCard from "../../components/items/ItemCard";
import { Select, Option } from "@material-tailwind/react";
export default function StoreHolidayPage() {
  return (
    <div className="w-full relative">
      <div className="w-full flex justify-center items-center mb-20 bg-black text-white ">
        <div className="w-1/3">
          <div className=" p-3">
            <h1 className="text-5xl mb-6 font-black">
              Enjoy holiday at home with IKEAR
            </h1>
            <p className=" text-sm ">
              Deck the halls for the holiday. As soon as the decorations are up,
              that’s when the festive spirit kicks in. So, no use skimping on
              tinsel, baubles and stars. Let it be abundantly clear that the
              holiday is here – it usually makes meeting the whole family much
              merrier.
            </p>
          </div>
        </div>
        <div className="w-2/3">
          <img src={BearHeadingImage} alt="" className="w-full h-auto" />
        </div>
      </div>

      <div className="w-full relative">
        <div className="text-3xl font-bold mb-12 text-center">
          Special holiday items
        </div>
        <div className="w-full p-6 flex justify-between items-center mb-16 sticky top-20 z-[1] bg-white ">
          <div className="w-1/3">
            <div className="w-5/6">
              <Select label="Select days" color="gray">
                <Option>Holiday 1</Option>
                <Option>Holiday 2</Option>
                <Option>Holiday 3</Option>
              </Select>
            </div>
          </div>
          <div className="w-3/4">
            <MenuFilter />
          </div>
        </div>
        <div className="w-full min-h-screen px-12">
          <div className="grid grid-cols-5 gap-6">
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
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>
    </div>
  );
}
