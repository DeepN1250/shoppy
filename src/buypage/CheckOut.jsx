import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../Redux/CartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [address, setAddress] = useState("");

  const handleCheckout = () => {
    if (!address) {
      alert("Please enter your delivery address.");
      return;
    }

    // Simulate successful checkout
    alert("Order placed successfully!");
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="p-6 bg-amber-100 shadow-lg rounded-lg min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {/* Address Input */}
          <div className="mb-4">
            <label className="block text-lg font-semibold">Delivery Address:</label>
            <input
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          {/* Payment Method Selection */}
          <div className="mb-4">
            <label className="block text-lg font-semibold">Payment Method:</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              <option value="creditCard">Credit Card</option>
              <option value="debitCard">Debit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cod">Cash on Delivery</option>
            </select>
          </div>

          {/* Order Summary */}
          <div className="mb-4 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between border-b pb-2 mb-2">
                <p>{item.name} (x{item.quantity})</p>
                <p>₹{item.totalPrice}</p>
              </div>
            ))}
            <p className="text-xl font-bold">Total: ₹{totalPrice.toFixed(2)}</p>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
