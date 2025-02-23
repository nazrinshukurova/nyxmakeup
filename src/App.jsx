import React from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
// import NoPage from "./pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
