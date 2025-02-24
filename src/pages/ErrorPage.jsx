import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" bg-[#222725] h-[100vh] flex items-center justify-center flex-col">
      <h1 className="text-center text-white text-[60px]">
        404 <br />
        Sorry,we were unable to find that page
      </h1>
      <div className="text-[15px] text-white">
        Start from
        <Link to="/" className=" text-white underline cursor-pointer">
          Home page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
