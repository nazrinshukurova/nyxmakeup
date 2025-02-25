import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Detailspage from "./pages/Detailspage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/product/:id" element={<Detailspage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
