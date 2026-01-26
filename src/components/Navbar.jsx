import React from "react";

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <header className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <span className="text-lg font-medium tracking-wide">
          BOOKSTORE
        </span>

        {isLoggedIn && (
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-sm text-gray-600 hover:text-black transition"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
}
