import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import ProductList from './Products/ProductList';
import MockData from '../utils/MockData';
import ProductCard from './Products/ProductCard';
function Home() {
  const query = useSelector((state) => state.search.query); // Get query from Redux store

  

  const filteredProducts = useMemo(() => {
    const filtered = MockData.products?.find((product) =>
      product.title?.toLowerCase().includes(query.toLowerCase().trim())
    ) || [];
  }, [query]);

  return (
    <>
      <div
        className="hero bg-cover bg-center h-96 flex items-center justify-center"
        style={{ backgroundImage: "url('/sales-cart-bags.jpg')" }} 
      >
        <div className="text-center bg-opacity-75 p-4 rounded-lg">
          <h1 className="text-4xl font-extrabold text-black mb-4">Welcome to Shoppy</h1>
          <p className="text-gray-800 mb-4">Find the best products at unbeatable prices</p>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-2">Featured Products</h2>
        {query ? (
        <ProductCard
          product={filteredProducts}
           />
         ): (!query) ? ( 
          <ProductList/> 
         ):(
          <p>product not found </p> 
         )}
         
      </div>
    </>
  );
}

export default Home;
