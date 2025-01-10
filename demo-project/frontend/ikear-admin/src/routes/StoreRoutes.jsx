import React from "react";
import { Route, Routes } from "react-router-dom";
import StoreLayout from "../layouts/StoreLayout";
import StoreHomePage from "../pages/store/StoreHomePage";
import InventoryStorePage from "../pages/store/InventoryStorePage";
import OrderStorePage from "../pages/store/OrderStorePage";
import OrderDetailPage from "../pages/store/OrderDetailPage";
import UnauthorizedPage from "../pages/UnauthorizedPage";
import { useSelector } from "react-redux";

export default function StoreRoutes() {
  const admin = useSelector((state) => state.admin);
  return !admin.admin || !admin.login ? (
    <>
      <UnauthorizedPage />
    </>
  ) : (
    <Routes>
      <Route path="/*" element={<StoreLayout />}>
        <Route index element={<StoreHomePage />} />
        <Route path="inventory" element={<InventoryStorePage />} />
        <Route path="order" element={<OrderStorePage />} />
        <Route path="order/:id" element={<OrderDetailPage />} />
      </Route>
    </Routes>
  );
}
