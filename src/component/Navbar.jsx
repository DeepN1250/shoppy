import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import { CiMenuBurger } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { useDispatch ,useSelector} from "react-redux";
import { setQuery } from "../Redux/SearchSlice";
import { logout } from "../Redux/AuthSlice";


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const searchQuery = useSelector((state) => state.search.query);
  const cartCount = useSelector((state) => state.cart?.cartItems?.length ?? 0);
  const wishlistCount = useSelector((state) => state.wishlist?.wishlistItems?.length ?? 0);
  const user=useSelector((state)=>state.auth.user)



  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  
  const handleSearch = (e) => {
    dispatch(setQuery(e.target.value));
  };
  

  // Toggle dropdown menu
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Login & Logout actions
  const handleLogin = () => {
    setIsOpen(false);
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="bg-amber-200 sticky top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        
        {/* Logo */}
        {!user ?(
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src="/shoppy.png" alt="Logo" className="h-8" />Home
          </Link>
          <span className="text-xl font-semibold text-red-700">𝓼𝓱𝓸𝓹𝓹𝔂</span>
        </div>):user.role==='buyer' ?
        (<div className="flex items-center space-x-4">
          <Link to="/buyer">
            <img src="/shoppy.png" alt="Logo" className="h-8" />Home
          </Link>
          <span className="text-xl font-semibold text-red-700">𝓼𝓱𝓸𝓹𝓹𝔂</span>
        </div>):(
          <div className="flex items-center space-x-4">
          <Link to="/">
            <img src="/shoppy.png" alt="Logo" className="h-8" />Home
          </Link>
          <span className="text-xl font-semibold text-red-700">𝓼𝓱𝓸𝓹𝓹𝔂</span>
        </div>
        )

}
        {/* Search Bar */}
        <div className="flex flex-1 mx-4">
          <input
            type="text"
            onChange={handleSearch}
            value={searchQuery}
            placeholder="Search products..."
            className="w-48 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>

        {/* Icons & Profile Dropdown */}
        <div className="flex items-center space-x-4">
        <Link to="/wishlist" className="text-gray-700 hover:text-blue-500 flex items-center space-x-1 relative">
            <FaRegHeart />
            <span>Wishlist</span>
            {wishlistCount > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 absolute -top-2 -right-3">
                {wishlistCount}
              </span>
            )}
          </Link>

         <Link to="/cart" className="text-gray-700 hover:text-blue-500 flex items-center space-x-1 relative">
            <IoBagOutline />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 absolute -top-2 -right-3">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="text-gray-700 hover:text-blue-500">
              <CiMenuBurger />
            </button>
            {isOpen && (
              <Profile
              isLoggedIn={!!user}
              handleLogin={handleLogin}
              // handleSignup={handleSignup}
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
