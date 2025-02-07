import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import { CiMenuBurger } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import SearchBar from "./Searchbar";

const Navbar = ({ onSearch }) => {  
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsOpen(false);
    navigate("/login");
  };

  const handleSignup = () => {
    alert("Signup Clicked!");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsOpen(false);
  };

  return (
    <nav className="bg-amber-200 sticky top-0 left-0 w-full shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src="/shoppy.png" alt="Logo" className="h-8" />
          </Link>
          <span className="text-xl font-semibold text-red-700">𝓼𝓱𝓸𝓹𝓹𝔂</span>
        </div>

        {/* Search Bar - Pass handleSearch as prop */}
        <div className="flex-1 mx-4">
          <SearchBar onSearch={onSearch} />  {/* Pass the function here */}
        </div>

        {/* User and Cart Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/wishlist" className="text-gray-700 hover:text-blue-500">
          <FaRegHeart /> wishlist
          </Link>
          <Link to="/cart" className="text-gray-700 hover:text-blue-500">
            <IoBagOutline /> Cart
          </Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-700 hover:text-blue-500 flex items-center space-x-1"
            >
              <CiMenuBurger />
            </button>
            {isOpen && (
              <Profile 
                isLoggedIn={isLoggedIn}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                handleLogout={handleLogout}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
