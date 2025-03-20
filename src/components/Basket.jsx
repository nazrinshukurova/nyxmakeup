import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, updateQuantity } from "../redux/cartSlice";

const Basket = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrease = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrease = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    } else {
      dispatch(removeFromCart(id));
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  return (
    <>
      <div className="basket-box bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold basket-title text-center text-[#E00085]">
          Shopping Basket
        </h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your basket is empty.</p>
        ) : (
          <>
            <ul className=" basket-sub-box rounded-lg p-4 bg-gray-50 shadow-md">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center p-4 border-b last:border-none"
                >
                  <div>
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-gray-500 text-sm">
                      ${Number(item.price).toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleDecrease(item.id, item.quantity)}
                      className="w-8 h-8 flex items-center justify-center bg-[#E00085] text-white rounded-full hover:bg-pink-700 transition cursor-pointer"
                    >
                      −
                    </button>
                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(item)}
                      className="w-8 h-8 flex items-center justify-center bg-[#E00085] text-white rounded-full hover:bg-pink-700 cursor-pointer transition "
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-xl font-bold text-center">
              Total Price:{" "}
              <span className="text-[#E00085]">${totalPrice.toFixed(2)}</span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Basket;
