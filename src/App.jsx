import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ErrorPage from "./pages/ErrorPage";
import ToolsServices from "./pages/ToolsServices";
import Explore from "./pages/Explore";
import { store } from "./app/store";
import ProductDetails from "./pages/Detailspage";




const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/tools" element={<ToolsServices />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
