import React from "react";
import { useSelector } from "react-redux";
import Home from "../component/Home";
const Seller = () => {
  const user = useSelector((state) => state.auth.user); 


  return (
    <div className="p-6 bg-amber-100 shadow-lg rounded-lg min-h-screen">
      {user ? (
        // <p>You're successfully logged in as {user.role}.</p>
        <Home/>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
};

export default Seller;
