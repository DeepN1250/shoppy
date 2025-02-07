import React from 'react';
import ProductList from './Products/ProductList';
import MockData from '../utils/MockData';

function Home({query}) {
  const filteredProducts = MockData.products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="hero bg-cover bg-center h-96 flex items-center justify-center " style={{ backgroundImage: "url('/sales-cart-bags.jpg')" }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Shoppy</h1>
          <p className="text-xl mb-4">Find the best products at unbeatable prices</p>
          {/* <button className="bg-amber-200 px-4 py-2 rounded-md hover:bg-amber-500">Shop Now</button> */}
        </div>
      </div>
      <div className=" mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-2">Featured Products</h2>

        <ProductList  products ={filteredProducts}/>
      </div>
      
    </>
  );
}

export default Home;