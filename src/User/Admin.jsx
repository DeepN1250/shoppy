import React from "react";
import { useSelector } from "react-redux";

const Admin = () => {
  const user = useSelector((state) => state.auth.user); 
  console.log(user);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Welcome !
      </h1>
      {user ? (
        <p>You're successfully logged in as {user.role}.</p>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
};

export default Admin;
