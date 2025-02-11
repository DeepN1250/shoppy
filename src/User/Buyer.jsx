import React from "react";
import { useSelector } from "react-redux";
// import ProductList from "../component/Products/ProductList";
import Home from "../component/Home";

const BuyerPage = () => {
  const user = useSelector((state) => state.auth.user); 
  console.log(user);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Welcome !
      </h1>
      {user ? (
        <Home/>
      ) : (
        <p>Please log in to continue.</p>
      )}
      
    </div>
    
  );
};

export default BuyerPage;
