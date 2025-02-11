import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MockData from "../../utils/MockData";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = MockData.products.find((p) => p.id.toString() === id);
    setProduct(foundProduct || null);
  }, [id]);

  if (!product) {
    return <div className="text-center text-xl mt-10 text-red-600">Product not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-amber-100 shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-64 object-cover rounded-lg mb-4 md:mb-0"
        />
        <div className="md:ml-6">
          {/* Product Details */}
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-lg text-gray-700 mb-3">{product.description}</p>
          <p className="text-lg font-bold text-gray-900 mb-4">₹{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
