import React from "react";
import explore1 from "../../assets/images/02-Welcome-Desktop-2880x394-ezgif.com-webp-to-png-converter.png";
import explore2 from "../../assets/images/01-Intro-Desktop-Alt-2880x720-ezgif.com-webp-to-png-converter.png";

const ExploreFirstSection = () => {
  return (
    <div>
      <div>
        <img src={explore2} className="w-[100%] h-[300px]"></img>
        <div className=" flex flex-col justify-center items-center gap-4 bg-[#d60078] h-[80vh]">
          <img src={explore1}></img>
          <h1 className="text-white text-center text-[2.25rem]">
            <b>OUR MISSION</b>
          </h1>
          <h4 className="text-white text-[1.125rem]">
            <strong>
              AT NYX PROFESSIONAL MAKEUP, WE ALWAYS WANT TO BE THE{" "}
              <span className="text-[#f8db66]">BRIGHTEST</span> PART OF YOUR
              DAY!
            </strong>
          </h4>
          <p className="text-white">
            On the Bright Side, we pledge to be on the right (or should we say
            BRIGHT) side of positive <br />
            change in our world and the people within it; Always committing to
            the best quality products.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center h-[100px]  bg-[#c4db55]">
        <h1 className=" font-bold  text-[2.25rem]">
          NYX PROFESSIONAL MAKEUP BELIEVES
        </h1>
      </div>
    </div>
  );
};

export default ExploreFirstSection;
