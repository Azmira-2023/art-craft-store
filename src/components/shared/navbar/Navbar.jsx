import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   
      <nav className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
      
          <div className="flex items-center py-6">
            <img
              src="/path/to/logo.png"
              alt="Logo"
              className="h-10 w-10 mr-2"
            />
            <span className="text-white text-2xl font-bold">Art & Craft Store</span>
          </div>
  
         
          <div className="flex items-center space-x-6 justify-between gap-6 text-xl">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/all-items" className="text-white hover:text-gray-300">
              All Art & Craft Items
            </Link>
            <Link to="/add-item" className="text-white hover:text-gray-300">
              Add Craft Item
            </Link>
            <Link to="/my-list" className="text-white hover:text-gray-300">
              My Art & Craft List
            </Link>
            <button>
            <Link to="/login" className="text-white hover:text-gray-300">
                  Login
                </Link>

            </button>
            <button>
            <Link to="/register" className="text-white hover:text-gray-300">
                  Register
                </Link>
              </button>   
             
          </div>
        </div>
      </nav>
  )
}

export default Navbar