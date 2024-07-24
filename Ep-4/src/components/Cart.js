import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className=" p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 && (
          <h1> Cart is empty. Add Items to the cart!</h1>
        )}

        {cartItems.map((item) => {
          return (
            <div
              key={item.card.info.id}
              className="p-2 m-2  border-b-2 border-gray-200 text-left flex justify-between"
            >
              <div>
                <div className="py-2">
                  <span>{item.card.info.name}</span>
                  <span>
                    {" "}
                    - ₹
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  {item.card.info.description}
                </p>
              </div>

              <div className="relative">
                <img
                  className="h-[150px] w-[200px] rounded-md"
                  src={CDN_URL + item.card.info.imageId}
                  alt="item_image"
                />
                <button
                  className="p-2 bg-white shadow-lg  text-green-600 border-gray-200 absolute bottom-0 left-1/2"
                  onClick={() => {
                    handleRemoveItem(item);
                  }}
                >
                  Remove -
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
