import BearHeadingImage from "../../assets/images/animals-nature-bears-ice-wallpaper-cb360c3d33c1cf69e5f44b89dddcbc50.jpg";

import ItemCategoryRoom2 from "../../components/items/ItemCategoryRoom2";

export default function StoreAllRoomPage() {
  return (
    <div className="w-full ">
      <div className="w-full flex justify-center items-center mb-20 bg-black text-white">
        <div className="w-1/3">
          <div className=" p-3">
            <h1 className="text-5xl mb-6 font-black">Shop by room</h1>
            <p className=" text-sm ">
              Do you have a particuar room or rooms in your home that needs a
              refresh? Start your search here to find furniture and home
              accessories for every room in your home here.
            </p>
          </div>
        </div>
        <div className="w-2/3">
          <img src={BearHeadingImage} alt="" className="w-full h-auto" />
        </div>
      </div>
      <div className="w-full">
        <div className=" w-full text-center">
          <h2 className=" text-3xl font-bold">All rooms</h2>
        </div>
        <div className="w-full grid grid-cols-3 gap-6 p-6">
          <ItemCategoryRoom2 label={"Living room"} />

          <ItemCategoryRoom2 label={"Bedroom"} />

          <ItemCategoryRoom2 label={"Bathroom"} />

          <ItemCategoryRoom2 label={"Kitchen"} />

          <ItemCategoryRoom2 label={"Dining room"} />

          <ItemCategoryRoom2 label={"Children room"} />

          <ItemCategoryRoom2 label={"Study room"} />

          <ItemCategoryRoom2 label={"Office"} />

          <ItemCategoryRoom2 label={"Gaming room"} />

          <ItemCategoryRoom2 label={"Hallway"} />

          <ItemCategoryRoom2 label={"Laundry room"} />

          <ItemCategoryRoom2 label={"Garden"} />

          <ItemCategoryRoom2 label={"Garage"} />
        </div>
      </div>
    </div>
  );
}
