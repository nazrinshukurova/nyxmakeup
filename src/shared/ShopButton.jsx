import React from "react";
import { Link } from "react-router-dom";

const ShopButton = (props) => {
  return (
    <Link
      to="/products"
      className="shop-button tracking-[2px]  cursor-pointer hover:bg-white hover:border-2 hover:border-[#e00085] hover:text-[#e00085]
  bg-[#e00085] w-[200px] h-[50px] flex items-center justify-center text-white font-normal duration-300 ease-in"
    >
      {props.text}
    </Link>
  );
};

export default ShopButton;
