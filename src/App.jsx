import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import AppRoutes from "./routes/Routes";

function App() {
  const [query, setQuery] = useState(""); 
  const user = useSelector((state) => state.auth.user);

  return (
    <Router>
      <div className="flex flex-col bg-amber-50 min-h-screen">
        <Navbar user={user} onSearch={setQuery} />
        <AppRoutes query={query} /> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
