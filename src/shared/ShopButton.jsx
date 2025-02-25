import React from "react";
import { Link } from "react-router-dom";


const ShopButton = () => {
  return (
    <Link to='/products'
      className="shop-button tracking-[2px]  cursor-pointer
      bg-[#e00085] w-[200px] h-[50px] flex items-center justify-center text-white font-normal"
    >
      SHOP NOW
    </Link>
  );
};

export default ShopButton;
