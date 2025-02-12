import React from "react";
import { useSelector } from "react-redux";
import Home from "../component/Home";

const Admin = () => {
  const users = useSelector((state) => state.users.users); // Make sure the state structure is correct

  console.log(users); // Debugging: Check if users data is being retrieved

  return (
    <div className="p-6 bg-amber-100 shadow-lg rounded-lg min-h-screen">
      {users && users.length > 0 ? ( // Ensure users is not null and has data
        <div>
          {users.map((user) => ( // Add return inside map function
            <div key={user.id} className="bg-white p-4 shadow-md rounded-md my-2">
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-700">{user.email}</p>
              <p className="text-gray-500">{user.role}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No users found. Please log in.</p>
      )}
    </div>
  );
};

export default Admin;
