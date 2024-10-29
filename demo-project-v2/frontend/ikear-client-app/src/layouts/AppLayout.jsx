import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

export default function AppLayout() {
  return (
    <div>
      <div className="w-full h-16 sticky top-0 bg-white z-10">
        <Header />
      </div>
      <div className="overflow-y-auto main-content-height custom-scroll-bar">
        <Outlet />
      </div>
    </div>
  );
}
