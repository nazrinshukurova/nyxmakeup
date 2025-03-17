import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import FetchNyxProducts from "./FetchNyxProducts";
import { Link } from "react-router-dom";
import Basket from "./Basket";

const ProductsNyx = () => {
  const [data, setData] = useState([]);
  const [quantities, setQuantities] = useState({});
  const dispatch = useDispatch();
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <>

      <FetchNyxProducts onDataLoaded={setData} />
      {data.length === 0 ? (
        <div className="text-[18px]">No products found.😕</div>
      ) : (
        <div className="flex flex-wrap justify-between items-center gap-2.5 mt-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="product-card flex flex-col gap-2 items-center justify-center"
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
                    .slice(0, 3)
                    .join(",")}
                </h4>
              )}

              <h3 className="text-[0.875rem] font-bold ">${item.price}</h3>
              <div className="flex gap-3 items-center">
                <button
                  onClick={() => handleAddToCart(item)}
                  className=" add-to-card bg-[#e00085] cursor-pointer text-white w-[120px] h-[35px] rounded hover:bg-white hover:border-1 hover:border-[#e00085] hover:text-[#e00085] transition duration-300"
                >
                  Add to Cart
                </button>

                <Link
                  to={`/product/${item.id}`}
                  className="flex bg-[#e00085]  justify-center w-[120px] h-[35px] items-center text-[15px] text-[#fff]  hover:bg-white hover:border-1 hover:border-[#e00085] hover:text-[#e00085] duration-300 ease-in mt-2"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsNyx;
