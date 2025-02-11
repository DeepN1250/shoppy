import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, clearQuery } from "../Redux/SearchSlice"; 

const SearchPage = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.query);

  // const handleChange = (e) => {
  //   dispatch(setQuery(e.target.value));
  // };

  // const handleClear = () => {
  //   dispatch(clearQuery());
  // };

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    console.log("Search Input:", value); // ✅ Debugging log
    dispatch(setQuery(value));
  }, [dispatch]);

  const handleClear = () => {
    dispatch(clearQuery());
    console.log("Search Cleared"); // ✅ Debugging log
  };

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
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
