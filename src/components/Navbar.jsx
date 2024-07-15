// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-white text-lg font-bold">Shopping</span>
        <Link to="/" className="text-white text-lg font-bold">Home</Link>
        <Link to="/cart" className="text-white text-lg font-bold">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
