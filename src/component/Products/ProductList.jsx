import React from 'react';
import ProductCard from './ProductCard';
import { useDispatch ,useSelector } from 'react-redux';
import { addToCart } from '../../Redux/CartSlice';
import MockData from '../../utils/MockData';

const ProductList = () => {
  const dispatch = useDispatch();
  
  const products = MockData.products;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={() => dispatch(addToCart(product))} // ✅ Use Redux dispatch
        />
      ))}
    </div>
  );
};

export default ProductList;
