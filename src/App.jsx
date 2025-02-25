import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Detailspage from "./pages/Detailspage";
import ErrorPage from "./pages/ErrorPage";
import ToolsServices from "./pages/ToolsServices";
import Explore from "./pages/Explore";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/tools" element={<ToolsServices />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/product/:id" element={<Detailspage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
