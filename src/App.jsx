import './App.css';
import {useState} from 'react';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route , } from 'react-router-dom';
import ProductDetails from './component/Products/ProductDetails';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Cart from './cart/CartPage';
import Wishlist from './cart/WishlistPage';
import LoginPage from './cart/LoginPage';
import BuyerPage from '../src/User/Buyer';
import Seller from '../src/User/Seller'
import Admin from '../src/User/Admin'




function App() {
 

  const [query, setQuery] = useState(""); 
  const [user, setUser] = useState(null); 

  const handleLogin = (userData) => {
    setUser(userData); 
  };

  const handleLogout = () => {
    setUser(null); 
  };

  return (
  //  <CartProvider>
      <Router>
        <div className='bg-amber-50'>
        <Navbar user={user} handleLogout={handleLogout} onSearch={setQuery} />
          <Routes>
            <Route path="/" element={<Home query={query}/>} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/buyer" element={<BuyerPage />} />
            <Route path="/seller" element={<Seller />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
      // </CartProvider>
  );
}

export default App;