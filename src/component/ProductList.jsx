import React from "react";
import { MockData } from "../utils/mockData"; // Ensure correct import
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pt-100">
      {MockData[0].products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
