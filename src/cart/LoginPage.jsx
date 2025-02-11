import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {login} from  "../Redux/AuthSlice"
import { useNavigate } from "react-router-dom";
import MockData from "../utils/MockData";

const LoginPage = () => {

  const navigate = useNavigate();
  const dispatch =useDispatch()
  const [email, setEmail] = useState('');
  const [password,setPassword]=useState('');
  const [error, setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    

const user = MockData.users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    if(user.role === 'buyer'){
        const role=user.role
        dispatch(login({email,role}))
        navigate("/buyer");
    }
    else if(user.role === "seller"){
        const role=user.role
        dispatch(login({email,role}))
        navigate("/seller");
    }
    else if(user.role === "admin"){
        const role=user.role
        dispatch(login({email,role}))
        navigate("/admin");
    }
   
  } else {
    setError("Invalid email or password");
  }
};

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={email.value}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={password.value}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:ring focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
