import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mx-40">
          {/* Website Name and Description */}
          <div>
            <h2 className="text-2xl font-bold">Craftopia</h2>
            <p className="mt-2 text-gray-400">Your one-stop shop for unique and<br></br> handcrafted art and craft items.</p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="mt-2 text-gray-400">
              <li>Email: support@craftopia.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Craft Lane, Art City</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start mt-4 space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaTwitter size={24} /> 
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 border-t border-blue-900 pt-4 text-center">
          <p className="text-gray-500">&copy; 2024 Craftopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer



