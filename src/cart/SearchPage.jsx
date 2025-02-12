import React , { useState, useEffect, useCallback }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, clearQuery } from "../Redux/SearchSlice"; 

const SearchPage = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.query);
  const [inputValue, setInputValue] = useState(searchQuery);


  useEffect(() => {
    const delay = setTimeout(() => {
      dispatch(setQuery(inputValue));
    }, 1000);

    return () => clearTimeout(delay);
  }, [inputValue, dispatch]);

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    dispatch(setQuery(value));
  }, [dispatch]);

  const handleClear = () => {
    dispatch(clearQuery());
  };


  return (
    <div className="fixed top-0 left-0 w-screen h-screen  p-6 bg-amber-100 shadow-lg rounded-lg min-h-screen m-0">
      <h1 className="text-2xl font-bold mb-4">Search Page</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Type to search..."
        className="border border-gray-300 rounded-lg p-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleClear}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Clear Search
      </button>
      {searchQuery && (
        <p className="mt-4 text-gray-700">You searched for: <strong>{searchQuery}</strong></p>
      )}
    </div>
  );
};

export default SearchPage;
