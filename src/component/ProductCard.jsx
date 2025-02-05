import React from 'react';

function ProductCard({ product, onAddToCart, onBuyNow }) {
  return (
    <div className="border p-4 rounded-md shadow-md p-10 mt-5 ">
      <img src={product.image} alt={product.title} className="h-52 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-lg font-bold mb-2">₹{product.price}</p>
      <div className="flex space-x-20">
        <button
          onClick={() => onAddToCart(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add to Cart
        </button>
        <button
          onClick={() => onBuyNow(product)}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;