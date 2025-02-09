import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar'; // Ensure the correct import path

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center animated-background"
      style={{
        backgroundImage: "url('https://qph.cf2.quoracdn.net/main-qimg-2bec023472e05b40e0d02ac92666c1e2')",
      }}
    >
      <div className="w-full max-w-md p-8 bg-white dark:bg-black shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-white mb-2" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-white  mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-700 dark:text-white ">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
