import React from "react";
import { Route, Routes } from "react-router-dom";
import StoreLayout from "../layouts/StoreLayout";
import StoreHomePage from "../pages/store/StoreHomePage";

export default function StoreRoutes() {
  return false ? (
    <></>
  ) : (
    <Routes>
      <Route path="/*" element={<StoreLayout />}>
        <Route index element={<StoreHomePage />} />
        <Route path="inventory" element={<>HomePage</>} />
        <Route path="order" element={<>HomePage</>} />
        <Route path="delivery" element={<>HomePage</>} />
      </Route>
    </Routes>
  );
}
