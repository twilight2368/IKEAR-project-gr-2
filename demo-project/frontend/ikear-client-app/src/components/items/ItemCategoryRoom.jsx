import { useNavigate } from "react-router-dom";
import RoomLogo from "../../assets/icons/room-svgrepo-com.svg";
export default function ItemCategoryRoom({ label }) {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-full relative  cursor-pointer"
      onClick={() => {
        navigate("/store/room/room-id");
      }}
    >
      <div className=" h-full w-full flex justify-center items-center">
        <img src={RoomLogo} alt="image" className="h-full " />
      </div>
      <div className="absolute top-0 right-1/2 translate-x-1/2 z-[1]  h-full w-full bg-black/85 duration-100 opacity-50 hover:opacity-100  text-white flex justify-center items-center">
        {label}
      </div>
    </div>
  );
}
