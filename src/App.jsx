import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Landing from "./components/Landing";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    // Changed bg-gray-100 to a cleaner slate-50
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-slate-900">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <main className="flex-grow">
        {isLoggedIn ? <Landing /> : <Login setIsLoggedIn={setIsLoggedIn} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;