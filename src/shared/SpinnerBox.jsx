import React from "react";

const SpinnerBox = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-4 border-t-transparent border-pink-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default SpinnerBox;
