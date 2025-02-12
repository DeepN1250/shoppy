import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MockData from "../utils/MockData";
import ProductCard from "./Products/ProductCard";
import LoginPopup from "./LoginPopup"; // Popup for login prompt

function Home() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const query = useSelector((state) => state.search.query);
  const navigate = useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  // Show login popup if user is not authenticated
  const handleRestrictedAction = () => {
    if (!isAuthenticated) {
      setShowLoginPopup(true);
    }
  };

  
const productsFromRedux = useSelector((state) => state.products.products);

const filteredProducts = useMemo(() => {
  // Merge mock data and Redux products
  const allProducts = [...MockData.products, ...productsFromRedux];

  return (
    allProducts?.filter((product) =>
      product.title?.toLowerCase().includes(query.toLowerCase().trim())
    ) || []
  );
}, [query, productsFromRedux]); 


  return (
    <>
      <div
        className="hero bg-cover bg-center h-96 flex items-center justify-center"
        style={{ backgroundImage: "url('/sales-cart-bags.jpg')" }}
      >
        <div className="text-center bg-opacity-75 p-4 rounded-lg">
          <h1 className="text-4xl font-extrabold text-black mb-4">
            Welcome to Shoppy
          </h1>
          <p className="text-gray-800 mb-4">
            Find the best products at unbeatable prices
          </p>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-amber-100 max-w-screen-xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-2">Featured Products</h2>

        {/* Show all products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onRestrictedAction={handleRestrictedAction} // Pass to ProductCard
            />
          ))}
        </div>
      </div>

      {/* Login Popup */}
      {showLoginPopup && <LoginPopup onClose={() => setShowLoginPopup(false)} />}
    </>
  );
}

export default Home;
