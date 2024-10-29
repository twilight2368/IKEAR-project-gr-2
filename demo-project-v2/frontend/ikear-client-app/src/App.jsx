import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage/LandingPage";
import StorePage from "./pages/store/StorePage";
import StoreLayout from "./layouts/StoreLayout";
import StoreProductPage from "./pages/store/StoreProductPage";
import StoreProductLayout from "./layouts/StoreProductLayout";
import StoreProductItemPage from "./pages/store/StoreProductItemPage";
import StoreAllRoomPage from "./pages/store/StoreAllRoomPage";
import StoreEachRoomPage from "./pages/store/StoreEachRoomPage";
import StoreHolidayPage from "./pages/store/StoreHolidayPage";
import StoreRoomLayout from "./layouts/StoreRoomLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/store/*" element={<StoreLayout />}>
            <Route index element={<StorePage />} />
            <Route path="product/*">
              <Route index element={<StoreProductPage />} />
              <Route path="*" element={<StoreProductLayout />}>
                <Route path=":id" element={<StoreProductItemPage />} />
              </Route>
            </Route>
            <Route path="room/*">
              <Route index element={<StoreAllRoomPage />} />
              <Route path="*" element={<StoreRoomLayout />}>
                <Route path=":id" element={<StoreEachRoomPage />} />
              </Route>
            </Route>
            <Route path="holiday" element={<StoreHolidayPage />} />
          </Route>
          <Route path="*" element={<> Not found</>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
