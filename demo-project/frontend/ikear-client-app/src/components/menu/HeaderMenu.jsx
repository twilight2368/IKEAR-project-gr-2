import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { FaRegHeart, FaUser, FaHistory } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-row justify-end gap-2 items-center p-2">
      <div>
        <IconButton
          color="gray"
          variant="text"
          className="p-0 text-black text-xl rounded-full "
          onClick={() => {
            navigate("/fav-list");
          }}
        >
          <FaRegHeart />
        </IconButton>
      </div>
      <div>
        <IconButton
          color="gray"
          variant="text"
          className="p-0 text-black text-xl rounded-full "
          onClick={() => {
            navigate("/my-cart");
          }}
        >
          <MdOutlineShoppingCart />
        </IconButton>
      </div>
      <div>
        <Menu>
          <MenuHandler>
            <Button
              color="gray"
              className="flex flex-row gap-2 justify-center items-center bg-black rounded-full"
            >
              <span>
                <FaUser />
              </span>
              <p className=" truncate">Hi!</p>
            </Button>
          </MenuHandler>
          <MenuList>
            <Button
              variant="outlined"
              color="gray"
              className="text-black border-black w-full p-2 mt-2 rounded-full "
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
            <Button
              color="gray"
              className="bg-black w-full p-2 mt-2 rounded-full "
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </Button>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}
