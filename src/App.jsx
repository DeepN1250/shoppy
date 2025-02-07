import './App.css';
import {useState} from 'react';
import Home from './component/Home';
import Login from './component/Login';
import { BrowserRouter as Router, Routes, Route , } from 'react-router-dom';
import { CartProvider } from './component/Contexts';
import ProductDetails from './component/Products/ProductDetails';
import Navbar from './component/Navbar';
import Footer from './component/Footer';



function App() {

  const [query, setQuery] = useState(""); 

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
   <CartProvider>
      <Router>
        <div className='bg-amber-50'>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home query={query}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
      </CartProvider>
  );
}

export default App;