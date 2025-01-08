import React from "react";
import { Route, Routes } from "react-router-dom";
import StoreLayout from "../layouts/StoreLayout";
import StoreHomePage from "../pages/store/StoreHomePage";
import InventoryStorePage from "../pages/store/InventoryStorePage";
import OrderStorePage from "../pages/store/OrderStorePage";
import DeliveryStorePage from "../pages/store/DeliveryStorePage";
import OrderDetailPage from "../pages/store/OrderDetailPage";

export default function StoreRoutes() {
  return false ? (
    <></>
  ) : (
    <Routes>
      <Route path="/*" element={<StoreLayout />}>
        <Route index element={<StoreHomePage />} />
        <Route path="inventory" element={<InventoryStorePage />} />
        <Route path="order" element={<OrderStorePage />} />
        <Route path="order/:id" element={<OrderDetailPage />} />
        <Route path="delivery" element={<DeliveryStorePage />} />
      </Route>
    </Routes>
  );
}
