import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { FaShoppingBag } from "react-icons/fa";
import { FaBox } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { TbChristmasBall } from "react-icons/tb";
export default function StoreHeader() {
  return (
    <div className="w-full flex flex-row justify-start items-center gap-6 h-full p-6">
      <StoreHeaderItem
        label="Store"
        to="/store"
        end={true}
        icon={<FaShoppingBag />}
      />
      <StoreHeaderItem
        label="Shop products"
        to="/store/product"
        end={false}
        icon={<FaBox />}
      />
      <StoreHeaderItem
        label="Shop by room"
        to="/store/room"
        end={false}
        icon={<GoHomeFill />}
      />
      {/* <StoreHeaderItem
        label="Holiday shop"
        to="/store/holiday"
        end={false}
        icon={<TbChristmasBall />}
      /> */}
    </div>
  );
}

const StoreHeaderItem = ({ end, label, icon, to }) => {
  return (
    <>
      <NavLink
        to={to}
        end={end}
        className={({ isActive }) => {
          return classnames(
            "p-2 flex items-center justify-center gap-3 font-bold",
            isActive ? " border-b-[3px] border-black " : " text-gray-600"
          );
        }}
      >
        <span>{icon}</span>
        <span>{label}</span>
      </NavLink>
    </>
  );
};
