import React from 'react';

const ContactUs = () => {
  return (
    <section
      className="py-16 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://gifdb.com/images/high/exercise-yoga-stretch-girl-0bfys3by3qkhjtj3.gif')", // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white  dark:bg-black  bg-opacity-80 rounded-md p-8 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          Don't Wait a Day Longer
        </h2>
        <p className="text-lg mb-8 text-gray-700 dark:text-white">
          Take the first step towards a healthier you by filling out the form below. Our team will get in touch with you shortly to discuss how we can help you achieve your goals.
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-left mb-2 text-gray-700 dark:text-white">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-left mb-2 text-gray-700 dark:text-white">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-left mb-2 text-gray-700 dark:text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="mobileNumber" className="text-left mb-2 text-gray-700 dark:text-white">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              className="p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white dark:text-white py-3 px-6 rounded-md shadow"
          >
            Let's Do This
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

