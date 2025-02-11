import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../Redux/WishlistSlice";
import { addToCart } from "../Redux/CartSlice";

const Wishlist = () => {
  const { wishlistItems, totalQuantity } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-amber-100 shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <>
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4">
            <p className="text-lg font-semibold">Total Items: {totalQuantity}</p>
          </div>

          <ul className="space-y-4">
            {wishlistItems.map((item) => (
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
                  <p className="text-gray-600">Price: ₹{item.price}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  {/* Add to Cart & Remove from Wishlist */}
                  <button
                    onClick={() => {
                      dispatch(addToCart(item)); // Add to cart
                      dispatch(removeFromWishlist(item.id)); // Remove from wishlist
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg transition"
                  >
                    Add to Cart
                  </button>

                  {/* Remove from Wishlist */}
                  <button
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
                  >
                    Remove
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

export default Wishlist;
