import React from "react";
import { useSelector } from "react-redux";
import Home from "../component/Home";

const BuyerPage = () => {
  const user = useSelector((state) => state.auth.user); 
  // console.log(user);

  return (
    <div>
      {user ? (
      
        <Home/>
      ) : (
        <p>Please log in to continue.</p>
      )}
      
    </div>
    
  );
};

export default BuyerPage;
