import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, decreaseQuantity, clearCart,increaseQuantity } from "../Redux/CartSlice";
import { addToWishlist } from "../Redux/WishlistSlice";

const Cart = () => {
  const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const moveToWishlist = (item) => {
    dispatch(addToWishlist(item));
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-amber-100 shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4">
            <p className="text-lg font-semibold">Total Items: {totalQuantity}</p>
            <p className="text-lg font-semibold">Total Price: ₹{totalPrice.toFixed(2)}</p>
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Clear Cart
            </button>
          </div>

          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md"
              >
                {/* Product Image */}
                <img
                  src={item.image} // Ensure each product has an `image` property
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />

                {/* Product Details */}
                <div className="flex-1 ml-4">
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-gray-600">Price: ₹{item.totalPrice}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg transition"
                  >
                    -
                  </button>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg transition"
                  >
                    +
                  </button>
                
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => moveToWishlist(item)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg transition"
                  >
                    Move to Wishlist
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Cart;
