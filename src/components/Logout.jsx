import React from "react";
import { useAuth } from "../context/AuthProvider";

const Logout = () => {
  const [, setAuthUser] = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("Users");
    setAuthUser(null);
    window.location.href = "/"; // Simple redirect
  };

  return (
    <button 
  onClick={handleLogout} 
  className="px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors shadow-sm"
>
  Logout
</button>
  );
};

export default Logout;