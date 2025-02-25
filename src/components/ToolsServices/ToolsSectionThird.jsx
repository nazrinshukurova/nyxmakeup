import React from "react";
import photo5 from "../../assets/images/Services-ContentAssets-VTO-Desktop-1140x640-ezgif.com-webp-to-png-converter.png";
import ShopButton from "../../shared/ShopButton";

const ToolsSectionThird = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="c-content-tile__section_third">
        <img src={photo5}></img>
      </div>
      <div className="flex flex-col gap-2.5 c-content-tile__section_third">
        <h2 className="content-title text-[2.875rem]">TRY BEFORE YOU BUY</h2>
        <div>
          Have you been eyeing a lipstick, eyeshadow palette or foundation? Our
          virtual try-on tool lets you test different beauty products! Upload a
          selfie or use live mode to instantly see how bomb you’ll look in
          different shades and finishes! AVAILABLE 24/7
        </div>
        <ShopButton text="TRY IT ON" />
      </div>
    </div>
  );
};

export default ToolsSectionThird;
