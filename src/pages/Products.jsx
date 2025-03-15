import React from "react";
import image3 from "../assets/images/202401XX-DMI-NGL-CLP-Banner-SP24Reset-VRML-Desktop-2880x540.jpg";
import ProductsData from "../components/ProductsNyx";
import Navbar from "../components/Navbar";

const Products = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <img src={image3}></img>
        <p class="text-white absolute top-[10%] w-[300px] left-10 c-category-cover__description bg-[url('../assets/images/202401XX-DMI-NGL-CLP-Banner-SP24Reset-VRML-Desktop-2880x540.jpg)] ">
          Experimenting with eye makeup is one of the easiest (and most
          enjoyable) ways to express yourself through makeup. Whether you love
          bold eyeshadow looks or prefer to keep things classic with a subtle
          flick of <a href="/eye/eyeliner/">eyeliner</a>, we’ve got all of the
          eye makeup products you need to ensure all eyes are on you.
        </p>
      </div>
      <ProductsData />
    </div>
  );
};

export default Products;
