import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SignUp = () => {
  return (
    <div
    className="min-h-screen flex items-center justify-center animated-background"
    style={{
      backgroundImage: "url('https://qph.cf2.quoracdn.net/main-qimg-2bec023472e05b40e0d02ac92666c1e2')",
    }}
  >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        style={{
          backgroundImage: "url('https://qph.cf2.quoracdn.net/main-qimg-2bec023472e05b40e0d02ac92666c1e2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-white  dark:bg-black shadow-md rounded-md z-10"
      >
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700  dark:text-white  mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-white s mb-2" htmlFor="mobileNumber">
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
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-700 dark:text-white ">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;

