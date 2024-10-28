import ImageTest from "../../assets/images/polar-bear.png";

export default function ItemCategoryRoom({ image_display, label }) {
  return (
    <div className="w-full h-full relative">
      <div className=" h-full w-full flex justify-center items-center">
        <img
          src={image_display}
          alt="image"
          className="h-full aspect-square rounded-full border-[1px] border-black"
        />
      </div>
      <div className="absolute top-0 right-1/2 translate-x-1/2 z-[1] rounded-full h-full aspect-square bg-black/60 duration-100 opacity-50 hover:opacity-100  text-white flex justify-center items-center">
        {label}
      </div>
    </div>
  );
}
