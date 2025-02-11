import React from "react";
import { addToCart } from "../../Redux/CartSlice"; 
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../Redux/WishlistSlice";

function ProductCard({ product}) {
  const dispatch= useDispatch()

  function handleAddToCart(){
      dispatch(addToCart(product));
  }
  function handleAddToWishlist(){
    dispatch(addToWishlist(product));
  };

  return (
    <div className="border border-gray-200 rounded-xl shadow-lg p-5 transition-transform hover:shadow-xl">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-52 w-60 object-cover rounded-lg mb-4"
      />

      {/* Product Details */}
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{product.title}</h3>
      <p className="text-gray-600 text-sm mb-3 truncate">{product.description}</p>
      <p className="text-lg font-bold text-gray-900 mb-4">₹{product.price}</p>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-amber-500 text-white text-sm px-2 py-1 rounded-lg hover:bg-amber-700 transition-all mr-2"
        >
          Add to Cart
        </button>
        <button
          onClick={handleAddToWishlist}
          className="flex-1 bg-red-500 text-white text-sm px-2 py-1 rounded-lg hover:bg-red-700 transition-all"
        >
          Add to Wishlist ❤️
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
