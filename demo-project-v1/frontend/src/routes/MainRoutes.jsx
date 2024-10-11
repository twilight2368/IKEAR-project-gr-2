import { Route, Routes } from "react-router-dom";
import StoreLayout from "../layouts/StoreLayout";
import Store from "../pages/Store";

export default function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<StoreLayout />}>
          <Route index element={<Store />} />
        </Route>
      </Routes>
    </>
  );
}
