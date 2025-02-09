import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ theme, handleThemeSwitch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`bg-white text-black dark:bg-black dark:text-white fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center ml-0 sm:ml-0"> 
            <Link to="/" className="flex items-center"> 
              <img
                src="logo6.png" // Replace with the actual path to your logo
                alt="Logo"
                className="h-14 object-contain" // Adjust the size as needed
              />
              <h1 className="text-black text-3xl font-bold dark:text-white ml-0"> 
                JADEN AND JAETHRO
              </h1> 
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-2xl hover:text-yellow-300 ml-10" onClick={handleMenuClose}>
              Home
            </Link>
            <Link to="/schedule" className="text-2xl hover:text-yellow-300" onClick={handleMenuClose}>
              Schedule
            </Link>
            <Link to="/ExerciseLibraryPage" className="text-2xl hover:text-yellow-300" onClick={handleMenuClose}>
              Exercise Library
            </Link>
            <Link to="/NutritionPlanPage" className="text-xl hover:text-yellow-300" onClick={handleMenuClose}>
              Nutrition Plan
            </Link>
            <Link to="/payment" className="text-2xl hover:text-yellow-300" onClick={handleMenuClose}>
              Membership
            </Link>
            <Link to="/dashboard" className="text-2xl hover:text-yellow-300" onClick={handleMenuClose}>
             Dashboard
            </Link>
            <Link to="/contact" className="text-2xl hover:text-yellow-300" onClick={handleMenuClose}>
              Contact Us
            </Link>
            <Link to="/login" className="text-2xl hover:text-yellow-300" onClick={handleMenuClose}>
              Login
            </Link>
            <button
              onClick={handleThemeSwitch}
              className="bg-red-900 p-1 rounded-2xl dark:bg-blue-700 dark:text-white"
            >
              {theme === 'dark' ? '☀️' : '🌙'} 
            </button> 
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-xl hover:text-yellow-300 focus:outline-none dark:text-white"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
            <button
              onClick={handleThemeSwitch}
              className="p-1 rounded-2xl ml-2" // Added ml-2 for margin-left
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white text-black dark:bg-gray-800 dark:text-white flex flex-col space-y-2 mt-2 px-4 py-4 rounded-lg shadow-lg">
            <Link to="/" className="text-xl hover:text-yellow-300 dark:hover:text-yellow-400" onClick={handleMenuClose}>
              Home
            </Link>
            <Link to="/schedule" className="text-xl hover:text-yellow-300 dark:hover:text-yellow-400" onClick={handleMenuClose}>
              Schedule
            </Link>
            <Link to="/ExerciseLibraryPage" className="text-xl hover:text-yellow-300 dark:hover:text-yellow-400" onClick={handleMenuClose}>
              Exercise Library
            </Link>
            <Link to="/NutritionPlanPage" className="text-xl hover:text-yellow-300 dark:hover:text-yellow-400" onClick={handleMenuClose}>
              Nutrition Plan
            </Link>
            <Link to="/payment" className="text-xl hover:text-yellow-300 dark:hover:text-yellow-400" onClick={handleMenuClose}>
              Membership
            </Link>
            <Link to="/contact" className="text-xl hover:text-yellow-300 dark:hover:text-yellow-400" onClick={handleMenuClose}>
              Contact Us
            </Link>
            <Link to="/login" className="text-xl hover:text-yellow-300 dark:hover:text-yellow-400" onClick={handleMenuClose}>
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
