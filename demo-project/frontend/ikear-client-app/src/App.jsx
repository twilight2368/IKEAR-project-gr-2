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
import Login from "./auth/Login";
import Register from "./auth/Register";
import ItemDetailsPage from "./pages/ItemDetails/ItemDetailsPage";
import StoreDetail from "./pages/store-detail/StoreDetail";
import FavListPage from "./pages/fav-list/FavListPage";
import CartPage from "./pages/cart/CartPage";
import PaymentPage from "./pages/payment/PaymentPage";
import OrderPage from "./pages/order/OrderPage";
import ProfilePage from "./pages/profile/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
            <Route path="item-detail/:id" element={<ItemDetailsPage />} />
            <Route path="search" element={<></>} />
          </Route>
          <Route path="/purchase" element={<PaymentPage />} />
          <Route path="/fav-list" element={<FavListPage />} />
          <Route path="/my-cart" element={<CartPage />} />
          <Route path="/my-info" element={<ProfilePage />} />
          <Route path="/store-detail/:id" element={<StoreDetail />} />
          <Route path="/my-orders" element={<OrderPage />} />
        </Route>
        <Route path="*" element={<>Not found</>} />
      </Routes>
    </>
  );
}

export default App;
