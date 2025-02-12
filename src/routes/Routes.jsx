import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../component/Home";
import ProductDetails from "../component/Products/ProductDetails";
import Cart from "../cart/CartPage";
import Wishlist from "../cart/WishlistPage";
import LoginPage from "../cart/LoginPage";
import BuyerPage from "../User/Buyer";
import Seller from "../User/Seller";
import Admin from "../User/Admin";
import SellerPage from "../cart/SellerPage";
import BuyCart from "../buypage/BuyCart"; 
import Checkout from "../buypage/CheckOut";

const AppRoutes = ({ query }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={<Home query={query} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/buyer" element={<BuyerPage />} />
      <Route path="/add" element={<SellerPage />} />
      
     
      <Route path="/buycart" element={<BuyCart />} /> 
      <Route path="/checkout" element={<Checkout />} />

      <Route 
        path="/seller" 
        element={isAuthenticated ? <Seller /> : <Navigate to="/login" />} 
      />
      <Route 
        path="/admin" 
        element={isAuthenticated ? <Admin /> : <Navigate to="/login" />} 
      />
    </Routes>
  );
};

export default AppRoutes;
