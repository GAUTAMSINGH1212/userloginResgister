import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   




<header class="bg-blue-900 text-white py-4">
    <div class="container mx-auto flex justify-between items-center px-4">
      <h1 class="text-3xl font-extrabold">Try One Shop</h1>
      <nav>
        <ul class="flex space-x-6 text-lg">
          <li>
            <a href="#" class="hover:text-yellow-400">Home</a>
          </li>
          <li>
            <a href="/product" class="hover:text-yellow-400">Products</a>
          </li>
          <li>
            <a href="#" class="hover:text-yellow-400">About</a>
          </li>
          <li>
            <a href="#" class="hover:text-yellow-400">Contact</a>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
          </li>
          <li>
            <Link to="/register" className="text-white hover:text-gray-200">Register</Link>
          </li>
        </ul>

      </nav>
    </div>
  </header>




  );
};

export default Navbar;
