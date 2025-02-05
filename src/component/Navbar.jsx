import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-amber-100 fixed top-0 left-0 w-full">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src="/shoppy.png" alt="Logo" className="h-8" />
          </Link>
          <span className="text-xl font-semibold text-red-700">𝓼𝓱𝓸𝓹𝓹𝔂</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search item"
            className="w-full px-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <Link to="/men" className="text-gray-700 hover:text-blue-500">Men</Link>
          <Link to="/women" className="text-gray-700 hover:text-blue-500">Women</Link>
          <Link to="/kids" className="text-gray-700 hover:text-blue-500">Kids</Link>
          <Link to="/profile" className="text-gray-700 hover:text-blue-500 mr-3">Profile</Link>
        </div>

        {/* User and Cart Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/wishlist" className="text-gray-700 hover:text-blue-500">
            <i className="fas fa-heart">wishlist</i>
          </Link>
          <Link to="/cart" className="text-gray-700 hover:text-blue-500">
            <i className="fas fa-shopping-cart">cart</i>
          </Link>
          <Link to="/profile" className="text-gray-700 hover:text-blue-500">
            <i className="fas fa-user"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;