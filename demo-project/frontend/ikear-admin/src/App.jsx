import { Button } from "@material-tailwind/react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/auth/*" element={<>Auth</>} />
          <Route path="/admin/*" element={<>Admin</>} />
          <Route path="/store/*" element={<>Store</>} />
          <Route path="/*" element={<>Not Found</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
