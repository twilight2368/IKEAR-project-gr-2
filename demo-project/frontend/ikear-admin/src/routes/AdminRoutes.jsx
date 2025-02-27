import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import NotFoundPage from "../pages/NotFoundPage";
import AdminHomePage from "../pages/admin/AdminHomePage";
import AdminStorePage from "../pages/admin/AdminStorePage";
import AdminEmployeePage from "../pages/admin/AdminEmployeePage";
import AdminUserPage from "../pages/admin/AdminUserPage";
import AdminItemPage from "../pages/admin/AdminItemPage";
import AdminProductRoomPage from "../pages/admin/AdminProductRoomPage";
import { useSelector } from "react-redux";
import UnauthorizedPage from "../pages/UnauthorizedPage";
export default function AdminRoutes() {
  const admin = useSelector((state) => state.admin);
  return !admin.admin || !admin.login || admin.admin?.role !== "admin" ? (
    <>
      <UnauthorizedPage />
    </>
  ) : (
    <Routes>
      <Route path="/*" element={<AdminLayout />}>
        <Route index element={<AdminHomePage />} />
        <Route path="store" element={<AdminStorePage />} />
        <Route path="employee" element={<AdminEmployeePage />} />
        <Route path="user" element={<AdminUserPage />} />
        <Route path="product-rooms" element={<AdminProductRoomPage />} />
        <Route path="items" element={<AdminItemPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
