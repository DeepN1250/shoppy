import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ isLoggedIn = false, handleLogin, handleSignup, handleLogout }) => {
  return (
    <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-40 border border-gray-200">
      <ul className="py-2">
        {/* Category Links */}
        <li>
          <Link to="/men" className="block px-4 py-2 hover:bg-gray-200">Men</Link>
        </li>
        <li>
          <Link to="/women" className="block px-4 py-2 hover:bg-gray-200">Women</Link>
        </li>
        <li>
          <Link to="/kids" className="block px-4 py-2 hover:bg-gray-200">Kids</Link>
        </li>
        <hr className="my-1" />

        {/* Authentication Buttons */}
        {!isLoggedIn ? (
          <>
            <li>
              <button
                onClick={handleLogin}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Login
              </button>
            </li>
            <li>
              <button
                onClick={handleSignup}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Signup
              </button>
            </li>
          </>
        ) : (
          <li>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Profile;
