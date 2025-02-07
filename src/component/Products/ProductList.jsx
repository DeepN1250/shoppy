import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { CartContext } from '../Contexts';
import MockData from '../../utils/MockData';

const ProductList = () => {
  const { addToCart, addToWishlist } = useContext(CartContext);
  const products = MockData.products;

  // Handle empty or undefined products array
  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addToCart} // Pass the cart handler
          onBuyNow={addToWishlist} // Pass the wishlist handler
        />
      ))}
    </div>
  );
};

export default ProductList;
