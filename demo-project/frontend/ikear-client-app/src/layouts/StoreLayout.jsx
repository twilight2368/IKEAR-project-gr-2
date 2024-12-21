import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import StoreHeader from "../components/header/StoreHeader";

export default function StoreLayout() {
  return (
    <div className="relative w-full min-h-screen">
      <div className="sticky top-0 h-20 z-[5] bg-white text-black">
        <StoreHeader />
      </div>
      <div className="relative min-h-screen mb-32">
        <Outlet />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
