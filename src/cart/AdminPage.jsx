import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, updateUser } from '../Redux/UserSlice';

const AdminPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('buyer');
  const [editUserId, setEditUserId] = useState(null);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const products = useSelector((state) => state.products.products);

  const handleAddOrUpdateUser = (e) => {
    e.preventDefault();
    if (editUserId) {
      dispatch(updateUser({ id: editUserId, name, email, role }));
      setEditUserId(null);
    } else {
      dispatch(addUser({ id: Date.now(), name, email, role }));
    }
    setName('');
    setEmail('');
    setRole('buyer');
  };

  const handleEditUser = (user) => {
    setEditUserId(user.id);
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      
      {/* Product List */}
      <h3 className="text-xl font-bold mb-2">Products</h3>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {Array.isArray(products) && products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <img src={product.image} alt={product.title} className="h-32 object-cover w-full rounded mb-2" />
            <p className="text-lg font-semibold">${Number(product.price).toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* User Management */}
      <h3 className="text-xl font-bold mb-2">Manage Users</h3>
      <form onSubmit={handleAddOrUpdateUser} className="space-y-4 mb-6">
        <div>
          <label className="block text-gray-700">Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block text-gray-700">Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block text-gray-700">Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-2 border rounded">
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {editUserId ? 'Update User' : 'Add User'}
        </button>
      </form>

      <div className="grid grid-cols-2 gap-4">
        {Array.isArray(users) && users.map((user) => (
          <div key={user.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-bold mb-2">{user.name}</h2>
            <p className="text-gray-700 mb-2">{user.email}</p>
            <p className="text-gray-700 mb-2">Role: {user.role}</p>
            <div className="flex space-x-2">
              <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => handleEditUser(user)}>Edit</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
