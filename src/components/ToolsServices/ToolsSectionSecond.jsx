import React from "react";
import photo4 from "../../assets/images/Services-ContentAssets-FF-Desktop-1140x640-ezgif.com-webp-to-png-converter.png";
import ShopButton from "../../shared/ShopButton";

const ToolsSectionSecond = () => {
  return (
    <div className="flex justify-between items-center c-content-tile__section ">
      <div>
        <h2 className="c-content-hero__title text-[2.875rem]">
          YOUR ULTIMATE SHADE FINDER
        </h2>
        <div className="c-content-tile__description ">
          <p style={{marginBottom:'20px'}} className="w-[90%] text-[1rem] ">
            While our AI-powered algorithm works its magic, answer three easy
            questions to help us recommend the right foundation type to match
            your vibe, and ta-da! Once matched, try-on your recommended shade(s)
            virtually before you buy and live your best life (now, a little less
            stressed)!
          </p>
        </div>
        <ShopButton text="FIND MY SHADE"  />
      </div>
      <div>
        <img src={photo4}></img>
      </div>
    </div>
  );
};

export default ToolsSectionSecond;
