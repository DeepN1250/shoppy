import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import MockData from '../utils/MockData';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = MockData.users.find(
      (u) => u.email === email && u.password === password
  );
  if (user) {
    alert(`Welcome, ${user.name}!`);
    navigate('/');
  } else {
    setError('Invalid email or password');
  }
};

  return (
    <div className="relative form-container max-w-md mx-auto p-4 border border-gray-300 rounded-md shadow-md mt-10">
      <button
        onClick={() => navigate('/')}
        className="absolute top-2 right-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300"
      >
        Back
      </button>
      <h2 className="text-xl font-semibold mb-2">Login</h2>
      <form onSubmit={handleLogin}> 
        <div className="mt-1">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="mr-2"
          />
          <label htmlFor="remember" className="text-gray-700">Remember Me</label>
        </div>
        <button
          type="submit"
          className="w-full bg-amber-400 text-white py-2 rounded-md hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;