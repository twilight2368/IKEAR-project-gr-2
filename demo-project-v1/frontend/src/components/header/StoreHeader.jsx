import Logo from "../../assets/img/icons/cool.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@material-tailwind/react";
export default function StoreHeader() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-row justify-between items-center backdrop-blur-sm bg-white/0 text-white">
        <div className=" h-full flex flex-row items-center gap-3">
          <img src={Logo} className=" h-full aspect-square" />
          <div className=" text-3xl font-black text-white mix-blend-difference">
            vO-Ov | Store
          </div>
        </div>
        <div className="h-full flex flex-row text-xl items-center gap-3 px-6">
          <div>
            <IconButton color="red" className="text-xl ">
              <FontAwesomeIcon icon={faHeart} />
            </IconButton>
          </div>
          <div>
            <IconButton color="blue" className="text-xl ">
              <FontAwesomeIcon icon={faCartShopping} />
            </IconButton>
          </div>
          <div>
            <IconButton color="teal" className="text-xl ">
              <FontAwesomeIcon icon={faBell} />
            </IconButton>
          </div>
          <div>
            <IconButton color="white" className="text-xl ">
              <FontAwesomeIcon icon={faUser} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
