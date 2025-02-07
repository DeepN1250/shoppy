import React, { useState} from "react";
import { Link } from "react-router-dom";
 
import MockData from "../utils/MockData";

const SearchBar = () => {
  const [query, setQuery] = useState(""); 
  const [results, setResults] = useState([]); 

  const allProducts = MockData.products; 

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Clear results if input is empty
    if (value.trim() === "") {
      setResults([]); 
    } else {
      // Filter products based on title
      const filteredResults = allProducts.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) 
      );
      setResults(filteredResults);
    }
  };

  return (
    <div className="relative flex-1 mx-4">
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={handleSearch} 
        placeholder="Search for products..."
        className=" px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Show search results if any */}
      {results.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 ">
          {results.map((item) => (
            <div key={item.id} className="px-4 py-2 hover:bg-gray-100">
              <Link to={`/product/${item.id}`} className="block text-black">
                {item.title}  {/* Display product title */}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
