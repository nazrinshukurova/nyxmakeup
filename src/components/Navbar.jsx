import React from "react";
import logo from "../assets/images/indir.png";
import Search from "../shared/Search";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      <nav className="sticky bg-black w-[100%] h-[160px] flex flex-col gap-8 items-center justify-center">
        <div>
          <img src={logo} className="w-[190px] h-[59px]" alt="Logo" />
        </div>
        <div className="flex items-center justify-around gap-30">
          <ul className="text-white flex gap-9 text-[0.875rem] font-semibold">
            <li>
              <Link
                to="/"
                className={
                  location.pathname === "/" ? "text-lg text-orange-400" : ""
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={
                  location.pathname === "/products"
                    ? "text-lg text-green-400"
                    : ""
                }
              >
                Products
              </Link>
            </li>
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
