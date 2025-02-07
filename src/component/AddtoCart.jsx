import React, { useState } from 'react';

const AddToCart = () => {
  const [cart, setCart] = useState([
    { id: '', title: '', price: '' },
    { id: '', title: '', price: '' }
  ]);

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map(item => (
        <div key={item.id} className="border p-3 mb-2">
          <h3 className="text-lg">{item.title}</h3>
          <p>Price: ₹{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default AddToCart;
