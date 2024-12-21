import { Input } from "@material-tailwind/react";

import StorePickerDrawer from "../drawer/StorePickerDrawer";
import HeaderMenu from "../menu/HeaderMenu";
import LogoApp from "../logo/LogoApp";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-row justify-between items-center h-full gap-12">
      <div
        className="h-full w-1/12 p-1 flex justify-center items-center"
        onClick={() => {
          navigate("/");
        }}
      >
        <LogoApp />
      </div>
      <div className=" w-1/3 flex justify-center items-center ">
        <Input
          label="What are you looking for?"
          color="black"
          className="w-full border-black text-black"
        />
      </div>
      <div className=" w-1/3 flex justify-end items-center ">
        <StorePickerDrawer />
      </div>
      <div className=" w-1/6">
        <HeaderMenu />
      </div>
    </div>
  );
}
