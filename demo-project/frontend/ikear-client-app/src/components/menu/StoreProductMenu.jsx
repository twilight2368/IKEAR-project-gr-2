import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  Button,
  Card,
  MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import "../style.css";
import { Link } from "react-router-dom";
export default function StoreProductMenu() {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Menu open={openMenu} handler={setOpenMenu}>
      <MenuHandler>
        <Button
          color="gray"
          variant="text"
          className="flex text-black items-center gap-3 text-base font-normal capitalize tracking-normal"
        >
          All products
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="hidden w-screen h-96 grid-cols-7 gap-3 overflow-visible z-[1]  lg:grid">
        <Card
          shadow={false}
          className="col-span-2 h-full bg-black w-full rounded-md card-menu-product-store"
        ></Card>
        <div className="custom-scroll-bar col-span-5 w-full h-full overflow-y-auto p-2">
          <div className=" grid grid-cols-4 gap-3">
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />

            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />

            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />

            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />

            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />

            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
            <StoreProductItem label={"Item"} />
          </div>
        </div>
      </MenuList>
    </Menu>
  );
}

function StoreProductItem({ label, img_icon }) {
  return (
    <div className="w-full h-12 flex items-center shadow shadow-gray-400 rounded-md ">
      <Link to={label.toLowerCase()} className="w-full h-full">
        <div className="w-full h-full rounded-md text-black font-black flex items-center px-3 text-base ibm-font duration-100 hover:text-white hover:bg-black">
          {label}
        </div>
      </Link>
    </div>
  );
}
