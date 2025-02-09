import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css'; // Assuming you have a separate CSS file for styles

const Payment = () => {
  const [plan, setPlan] = useState('monthly'); // Default plan
  const [coupleDiscount, setCoupleDiscount] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    ifscCode: '',
    upiId: '',
    accountNumber: '',
    bankName: '',
  });

  // Plan prices and features
  const plans = {
    monthly: {
      price: 20,
      features: [
        'Access to all basic features',
        'Weekly workout plans',
        'Monthly progress tracking',
        'Email support',
      ],
    },
    '6-month': {
      price: 100,
      features: [
        'Everything in Monthly Plan',
        'Personalized workout plans',
        'Bi-weekly progress tracking',
        'Priority email support',
        'Access to exclusive content',
      ],
    },
    yearly: {
      price: 200,
      features: [
        'Everything in 6-Month Plan',
        'One-on-one coaching sessions',
        'Weekly progress reviews',
        '24/7 support',
        'Lifetime access to all content',
      ],
    },
  };
  const coupleDiscountAmount = 10; // Example discount for couples

  // Calculate total price
  const getTotalPrice = () => {
    let price = plans[plan].price;
    if (coupleDiscount) {
      price -= coupleDiscountAmount;
    }
    return price;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 animated-background"
      style={{
        backgroundImage: 'url(https://i.pinimg.com/originals/e0/d6/2e/e0d62e32eba3542552e83bdea5ff95e8.gif)', // Replace with your image URL
      }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 mt-11  "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Choose Your Plan
      </motion.h2>

      <div className="w-full max-w-5xl bg-white dark:bg-black shadow-md rounded-md p-6 mb-6 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
        {Object.keys(plans).map((key) => (
          <motion.div
            key={key}
            className={`p-4 border rounded-md flex-1 ${plan === key ? 'bg-blue-100 border-blue-500 dark:bg-black' : 'bg-white dark:bg-black border-gray-200'}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2">{key.charAt(0).toUpperCase() + key.slice(1)} Plan</h3>
            <p className="text-lg font-bold mb-2">Price: ${plans[key].price}</p>
            <ul className="list-disc pl-6 mb-4">
              {plans[key].features.map((feature, index) => (
                <li key={index} className="text-white-900">{feature}</li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded-md ${plan === key ? 'bg-blue-500 text-white ' : 'bg-red-700'} hover:${plan === key ? 'bg-pink-600' : 'bg-gray-300'}`}
              onClick={() => setPlan(key)}
            >
              Select {key.charAt(0).toUpperCase() + key.slice(1)} Plan
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="w-full max-w-md bg-white dark:bg-black shadow-md rounded-md p-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Payment Options</h2>
        <div className="mb-4">
          <label className="block text-white-700 mb-2">Select Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="card">Credit/Debit Card</option>
            <option value="netbanking">Net Banking</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        {paymentMethod === 'card' && (
          <div className="space-y-4 mb-4">
            <div>
              <label className="block text-white-700 mb-2">Card Number:</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your card number"
              />
            </div>
            <div>
              <label className="block text-white-700 mb-2">Expiry Date:</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-white-700 mb-2">IFSC Code:</label>
              <input
                type="text"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter IFSC code"
              />
            </div>
          </div>
        )}

        {paymentMethod === 'netbanking' && (
          <div className="space-y-4 mb-4">
            <div>
              <label className="block text-white-700 mb-2">Account Number:</label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your account number"
              />
            </div>
            <div>
              <label className="block text-white-700 mb-2">Bank Name:</label>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your bank name"
              />
            </div>
            <div>
              <label className="block text-white-700 mb-2">IFSC Code:</label>
              <input
                type="text"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter IFSC code"
              />
            </div>
          </div>
        )}

        {paymentMethod === 'upi' && (
          <div className="space-y-4 mb-4">
            <div>
              <label className="block text-white-700 mb-2">UPI ID:</label>
              <input
                type="text"
                name="upiId"
                value={formData.upiId}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter your UPI ID"
              />
            </div>
          </div>
        )}

        <div className="text-center mb-6">
          <p className="text-lg font-bold">Total Price: ${getTotalPrice()}</p>
        </div>

        <motion.button
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Proceed to Payment
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Payment;
