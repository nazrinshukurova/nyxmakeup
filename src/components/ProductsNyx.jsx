import { useState } from "react";
import FetchNyxProducts from "./FetchNyxProducts";
import { Link } from "react-router-dom";

const ProductsNyx = () => {
  const [data, setData] = useState([]);

  return (
    <>
      <FetchNyxProducts onDataLoaded={setData} />
      {data.length < 0 ? (
        <div className="text-[18px]">No products found.😕</div>
      ) : (
        <div className="flex flex-wrap justify-between items-center gap-2.5 mt-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="product-card flex flex-col items-center justify-center"
            >
              <img
                className="max-h-[380px]"
                src={item.image_link}
                alt={item.name}
              />
              <h3 className="product-name text-[0.875rem] font-bold">
                {item.name}
              </h3>
              <p className="w-[200px] text-[0.75rem] ">
                {item.description.slice(0, 60)}...
              </p>

              {item.product_colors && item.product_colors.length > 0 && (
                <h4 className="text-[#e00085] text-[0.75rem] flex flex-col gap-0.5 w-[200px]">
                  Colors:{" "}
                  {item.product_colors
                    .map((el) => el.colour_name)
                    .slice(0, 7)
                    .join(", ")}
                </h4>
              )}
              <h3 className="text-[0.875rem] font-bold ">${item.price}</h3>
              <Link
                to={`/product/${item.id}`}
                className="flex bg-[#e00085] w-[100px] h-[30px] justify-center items-center text-[15px] text-[#fff]  hover:bg-white hover:border-1 hover:border-[#e00085] hover:text-[#e00085] duration-300 ease-in"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsNyx;
