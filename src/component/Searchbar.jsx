// import React from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setQuery } from "../Redux/SearchSlice";
// import MockData from "../utils/MockData";

// const SearchBar = () => {
//   const dispatch = useDispatch();
//   const query = useSelector((state) => state.search.query).trim().toLowerCase();
//   const allProducts = MockData.products;

//   // Filter products based on query
//   const results = query
//     ? allProducts.filter((item) => item.title.toLowerCase().includes(query))
//     : [];

//   return (
//     <div className="relative flex-1 mx-2">
//       {/* Search Input */}
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => dispatch(setQuery(e.target.value))}
//         placeholder="Search for products..."
//         className="px-2 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-60"
//       />

//       {/* Search Results Dropdown */}
//       {query && (
//         <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
//           {results.length > 0 ? (
//             results.map((item) => (
//               <Link
//                 key={item.id}
//                 to={`/product/${item.id}`}
//                 className="block px-4 py-2 hover:bg-gray-100 text-black"
//               >
//                 {item.title}
//               </Link>
//             ))
//           ) : (
//             <div className="px-4 py-2 text-gray-500">No products found</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
