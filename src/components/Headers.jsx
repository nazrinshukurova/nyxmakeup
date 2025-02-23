import React from "react";
import Button from "../shared/Button";

const Headers = () => {
  return (
    <div className="overlay flex flex-col items-center gap-2 absolute z-[99999] bottom-[10%] left-[30%]">
      <h2 className="get-ready text-white text-[2.85rem]">GET READY FOR A FAT CHILL!</h2>
      <h3 className="text-[1rem] text-white">
        <strong>FAT SHINE.FAT LIP-COOLING EFFECT.</strong>
      </h3>
      <Button />
    </div>
  );
};

export default Headers;
