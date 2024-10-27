import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage/LandingPage";
import StorePage from "./pages/store/StorePage";
import StoreLayout from "./layouts/StoreLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/store/*" element={<StoreLayout />}>
            <Route index element={<StorePage />} />
          </Route>
          <Route path="*" element={<> Not found</>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
