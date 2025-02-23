import React from "react";
import logo from "../assets/images/indir.png";
import Search from "../shared/Search";

const Navbar = () => {
  return (
    <div>
      <nav
        className="bg-black w-[100%] h-[160px] flex flex-col gap-8 items-center
 justify-center"
      >
        <div>
          <img src={logo} className="w-[190px] h-[59px]"></img>
        </div>
        <div className="flex items-center justify-around gap-30">
          <ul className="text-white flex gap-9 text-[0.875rem] font-semibold">
            <li>Home</li>
            <li>Products</li>
            <li>Tools&Services</li>
            <li>Explore</li>
          </ul>
          <Search />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
