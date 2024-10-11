import { Route, Routes } from "react-router-dom";
import "./App.css";
import Notfound from "./pages/Notfound";
import MainRoutes from "./routes/MainRoutes";
import WelcomePage from "./pages/WelcomePage";
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/store/*" element={<MainRoutes />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
