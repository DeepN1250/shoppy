import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPopup = ({ onClose }) => {
  const navigate = useNavigate();

  

  const handleGoToLogin = () => {
    onClose(); // Close popup first
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-bold mb-4">Please Login</h2>
        <p className="text-gray-600 mb-4">You need to log in to use this feature.</p>


        {/* ✅ Button to go to actual Login Page */}
        <button
          onClick={handleGoToLogin}
          className="bg-green-500 text-white px-4 py-2 rounded w-full mb-2"
        >
          Go to Login Page
        </button>

        {/* ✅ Cancel Button */}
        <button
          onClick={onClose}
          className="bg-gray-400 text-white px-4 py-2 rounded w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;
