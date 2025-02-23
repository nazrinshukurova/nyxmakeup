import React from "react";
import searchSvg from "../assets/Svg/Search.svg";

const Search = () => {
  return (
    <div className="border border-white  w-[12.375rem] h-[35px]  bg-[var(--search-bg)] flex items-center">
      <input
        type="text"
        placeholder="Search"
        aria-label="Search"
        className="searchBox w-full bg-transparent outline-none text-black placeholder-gray-400"
      />
      <div style={{ paddingRight: "10px" }}>
        <img src={searchSvg} className="w-[1.25rem] h-[20px]" />
      </div>
    </div>
  );
};

export default Search;
