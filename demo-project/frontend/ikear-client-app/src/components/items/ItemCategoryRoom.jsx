import ImageTest from "../../assets/images/polar-bear.png";
import { useNavigate } from "react-router-dom";
export default function ItemCategoryRoom({ image_display, label }) {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-full relative  cursor-pointer"
      onClick={() => {
        navigate("/store/room/room-id");
      }}
    >
      <div className=" h-full w-full flex justify-center items-center">
        <img src={image_display} alt="image" className="h-full w-full " />
      </div>
      <div className="absolute top-0 right-1/2 translate-x-1/2 z-[1]  h-full w-full bg-black/60 duration-100 opacity-50 hover:opacity-100  text-white flex justify-center items-center">
        {label}
      </div>
    </div>
  );
}