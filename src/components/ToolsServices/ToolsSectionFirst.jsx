import React from "react";
import bgTools from "../../assets/images/Services-Hero-Desktop-2880x960.jpg";

const ToolsSectionFirst = () => {
  return (
    <div
      className="h-[400px] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bgTools})` }}
    >
      <div className="tool-text-group flex flex-col h-[400px] justify-center ">
        <h1 className="tool-header font-light text-[2.25rem]">
          <b>
            MAKEUP TIPS & <br /> SERVICES
          </b>
        </h1>
        <p className="tool-text text-[1rem] w-[27%]">
          Discover expert makeup tips and services, from virtual try-on
          technology to a personalized foundation finder.
        </p>
      </div>
    </div>
  );
};

export default ToolsSectionFirst;
