import { FaStar, FaRegStar, FaUser, FaReply } from "react-icons/fa";
import { Rating } from "@material-tailwind/react";
export default function CommentByUserDisplay() {
  return (
    <div className=" bg-white p-2 border-b-[1px] border-black border-dashed">
      <div className="w-full mb-2">
        <p className="font-black truncate ">
          <span>Username</span>
        </p>
      </div>
      <div className=" text-xs">
        <Rating
          value={4}
          ratedIcon={<FaStar color="black" className=" h-3 w-3" />}
          unratedIcon={<FaRegStar color="black" className=" h-3 w-3" />}
          className="h-full"
          readonly
        />
      </div>
      <div className="w-full">
        <p className=" text-black h-16 text-sm line-clamp-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          aliquam maiores dolore fuga nihil velit magni illo incidunt laborum
          earum doloremque, dolor quos nisi corrupti cum! Soluta quod cupiditate
          voluptatibus! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Corporis vel in fugiat dolore, tempore explicabo, magni ipsam
          maiores laboriosam iure atque, nam possimus quaerat. Dolore illo
          expedita sapiente nobis asperiores!
        </p>
      </div>
      <div className="w-full h-12 flex flex-row">
        <div className="w-1/12 h-full flex justify-center items-center ">
          <FaReply className=" rotate-180" />
        </div>
        <div className=" w-11/12 h-full line-clamp-3 text-xs text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          aliquam maiores dolore fuga nihil velit magni illo incidunt laborum
          earum doloremque, dolor quos nisi corrupti cum! Soluta quod cupiditate
          voluptatibus! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Corporis vel in fugiat dolore, tempore explicabo, magni ipsam
          maiores laboriosam iure atque, nam possimus quaerat. Dolore illo
          expedita sapiente nobis asperiores!
        </div>
      </div>
    </div>
  );
}
