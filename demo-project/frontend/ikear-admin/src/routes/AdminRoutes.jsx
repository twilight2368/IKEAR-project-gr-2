import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import NotFoundPage from "../pages/NotFoundPage";
import AdminHomePage from "../pages/admin/AdminHomePage";

export default function AdminRoutes() {
  return false ? (
    <></>
  ) : (
    <Routes>
      <Route path="/*" element={<AdminLayout />}>
        <Route index element={<AdminHomePage />} />
        <Route path="store" element={<>HomePage</>} />
        <Route path="employee" element={<>HomePage</>} />
        <Route path="user" element={<>HomePage</>} />
        <Route path="product-rooms" element={<>HomePage</>} />
        <Route path="items" element={<>HomePage</>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
