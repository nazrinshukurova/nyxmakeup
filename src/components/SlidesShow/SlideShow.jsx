import React, { useState, useEffect } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Spinner from "../../shared/SpinnerBox";
import SpinnerBox from "../../shared/SpinnerBox";

const SlideShow = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx"
        );
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="text-center text-lg font-semibold">
        <SpinnerBox />
      </div>
    );
  if (error)
    return (
      <div className="text-center text-red-500 font-semibold">
        Error: {error}
      </div>
    );
  if (!data.length)
    return <div className="text-center text-gray-500">No products found.</div>;

  const filteredBronzer = data
    .filter((item) => item.product_type === "bronzer")
    .slice(0, 5);

  return (
    <Slider>
      {filteredBronzer.map((item, index) => (
        <div key={index} className="flex flex-col items-center p-4">
          <img
            className="w-[200px] h-auto rounded-lg"
            src={item.image_link}
            alt={item.name}
          />
          <h2 className="mt-2 text-lg font-semibold text-center">
            {item.name}
          </h2>
          <p className="text-gray-700 font-semibold text-center text-[#000]">
            ${item.price}
          </p>
          <p className="text-gray-700 font-normal w-[400px] text-center text-[#000]">
            {item.description}
          </p>
        </div>
      ))}
    </Slider>
  );
};

export default SlideShow;
