import React from "react";
import logo from "../assets/images/indir.png";
import Search from "../shared/Search";
import { Link, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParams] = useSearchParams();

  const isActive = (param) => {
    return searchParams.get("page") === param;
  };

  return (
    <div>
      <nav className="sticky  bg-black w-[100%] h-[160px] flex flex-col gap-8 items-center justify-center">
        <div>
          <img src={logo} className="w-[190px] h-[59px]" alt="Logo" />
        </div>
        <div className="flex items-center justify-around gap-30">
          <ul className="text-white flex gap-9 text-[0.875rem] font-semibold">
            <li>
              <Link
                to="/?page=home"
                className={isActive("home") ? "text-md text-pink-400" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products?page=products"
                className={isActive("products") ? "text-md text-pink-400" : ""}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/tools?page=tools"
                className={isActive("tools") ? "text-md text-pink-400" : ""}
              >
                Tools&Services
              </Link>
            </li>
            <li>
              <Link
                to="/explore?page=explore"
                className={isActive("explore") ? "text-md text-pink-400" : ""}
              >
                Explore
              </Link>
            </li>
          </ul>
          <Search />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
