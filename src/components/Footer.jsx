import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-bold text-white">Varrec Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading the future of mobility with innovative solutions for safe, smart, and sustainable transportation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <i className="fab fa-twitter text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <i className="fab fa-instagram text-white"></i>
              </a>
            </div>
          </div>

          {/* Add other footer sections here following the same pattern */}
          
        </div>
      </div>

      <div className="border-t border-gray-700 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              Copyright © 2025 Varrec Group. All rights reserved. | Varrec is a registered trademark of Varrec Group.
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Contact By</span>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <span>©vomx</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;