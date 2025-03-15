import React from "react";
import image2 from "../assets/images/second.jpg";
import SlideShow from "./SlidesShow/SlideShow";

const SecondSection = () => {
  return (
    <div className="flex justify-between ">
      <img className="w-[50%]" src={image2}></img>
      <div className="bg-[#bd5eba] w-[50%] flex flex-col justify-center items-center">
        <p className="text-black text-[2.85rem] second-content-title">
          IN 4 NEW SHEER SHADES
        </p>
        <SlideShow/>
      </div>
    </div>
  );
};

export default SecondSection;
