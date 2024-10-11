import { Outlet } from "react-router-dom";
import StoreHeader from "../components/header/StoreHeader";
import FooterDisplay from "../components/footer/FooterDisplay";
import "./styles.css";
export default function StoreLayout() {
  return (
    <>
      <div className="relative w-full min-h-screen background-img-layout">
        <div className=" w-full fixed z-50 top-0 h-14">
          <StoreHeader />
        </div>
        <div className=" w-full min-h-screen bg-black/60 pt-20  text-white">
          <Outlet />
        </div>
        <div className="w-full bg-black/60 text-white">
          <FooterDisplay />
        </div>
      </div>
    </>
  );
}
