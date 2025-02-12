import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, updateProduct } from '../Redux/ProductSlice';

const SellerPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [editProductId, setEditProductId] = useState(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const productPrice = parseFloat(price);
    
    // If editing, keep the old image if a new one isn't uploaded
    const imageUrl = image ? URL.createObjectURL(image) : products.find(p => p.id === editProductId)?.image || '';

    if (editProductId) {
      dispatch(updateProduct({ id: editProductId, title, description, price: productPrice, image: imageUrl }));
      setEditProductId(null);
    } else {
      const newProduct = { id: Date.now(), title, description, price: productPrice, image: imageUrl };
      dispatch(addProduct(newProduct));
    }

    setTitle('');
    setDescription('');
    setPrice('');
    setImage(null);
  };

  const handleEditProduct = (product) => {
    setEditProductId(product.id);
    setTitle(product.title);
    setDescription(product.description);
    setPrice(product.price.toString());
    setImage(null); // Keep existing image unless user changes it
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Seller Dashboard</h2>
      <form onSubmit={handleAddProduct} className="space-y-4 mb-6">
        <div>
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Image:</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {editProductId ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      <div className="grid grid-cols-3 gap-4">
        {Array.isArray(products) && products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <img
              src={product.image}
              alt={product.title}
              className="h-48 object-cover mb-4 w-full rounded"
            />
            <p className="text-lg font-semibold mb-4">{Number(product.price).toFixed(2)}</p>
            <div className="flex space-x-2">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => handleEditProduct(product)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleDeleteProduct(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerPage;
