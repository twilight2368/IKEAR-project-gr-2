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
import { useNavigate } from "react-router-dom";
import { FaAddressCard } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../app/slicer/UserSlicer";
export default function HeaderMenu() {
  const navigate = useNavigate();
  const login = useSelector((state) => state.user.login);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  return (
    <div className="w-full flex flex-row justify-end gap-2 items-center p-2">
      {login && user ? (
        <>
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
                <>
                  <div className="w-full flex flex-col gap-2">
                    <MenuItem
                      className="flex flex-row gap-2 items-center"
                      onClick={() => {
                        navigate("/my-info");
                      }}
                    >
                      <span>
                        <FaAddressCard />
                      </span>
                      <span> Your information</span>
                    </MenuItem>
                    <MenuItem
                      className=" flex flex-row gap-2 items-start"
                      onClick={() => {
                        navigate("/my-orders");
                      }}
                    >
                      <span>
                        <FaHistory />
                      </span>
                      <span> My order</span>
                    </MenuItem>

                    <Button
                      color="red"
                      variant="outlined"
                      size="sm"
                      className="w-full"
                      onClick={() => {
                        dispatch(removeUser());
                        navigate("/");
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                </>

                <></>
              </MenuList>
            </Menu>
          </div>
        </>
      ) : (
        <>
          <Button
            variant="outlined"
            color="gray"
            className="text-black border-black w-full p-2 rounded-full "
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
          <Button
            color="gray"
            className="bg-black w-full p-2  rounded-full "
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </Button>
        </>
      )}
    </div>
  );
}
