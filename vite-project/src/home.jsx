import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './App';
const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
  // Transition settings for animations
  const textTransition = {
    duration: 0.8,
    ease: 'easeOut',
  };


const HomePage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 3000); // Flip every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="relative min-h-screen  "  >
      {/* Content Wrapper */}
      <div className="relative z-10  ">
        {/* Hero Section */}
        <section className="hero-section ">
          

  <div className="hero-content">

    <motion.h2 
      className="text-4xl md:text-6xl font-extrabold leading-tight text-pink-700"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <span className="block">Overcome your</span>
      <span className="block mt-2">INSECURITIES</span>
    </motion.h2>
    <motion.p 
      className="mt-4 max-w-lg text-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      We help females overcome their negative body image perceptions by offering tailored fitness and nutrition plans.
      You can achieve the body of your dreams, whatever this may be - supported alongside the Body by Megan programme.
    </motion.p>
    <motion.div 
      className="mt-8 flex space-x-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <Link 
        to="/join" 
        className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-md shadow"
      >
        JOIN TODAY
      </Link>
      <Link 
        to="/learn-more" 
        className="bg-pink-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md shadow"
      >
        LEARN MORE
      </Link>
    </motion.div>
  </div>
</section>


<hr className="my-8 border-gray-300" />
        {/* Why Us / What We Offer */}
        <section className="py-16  mb-0 ">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="relative w-full max-w-xs mx-auto perspective ">
              <motion.div
                className="relative w-full h-96 transition-transform duration-1000 "
                style={{ transformStyle: 'preserve-3d', transform: `rotateY(${isFlipped ? 180 : 0}deg)` }}
              >
                {/* Front Side (Why Us) */}
                <motion.div
                  className="absolute inset-0 bg-white  p-8 shadow-md rounded-md flex items-center justify-center "
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)',
                    display: 'flex',
                    height: '450px',
                    width: '100%',
                    margin: '0 auto',
                  }}
                >
                  <div className="bg-white">
                    <h3 className="text-3xl bg-white text-black font-bold text-center mb-4">Why us?</h3>
                    <p className="text-lg bg-white text-black  text-center mb-6  ">
                      We understand what you need to achieve your health and fitness goals. We offer a sustainable program which incorporates food & fitness you love - all whilst getting the body you love too!
                    </p>
                  </div>
                </motion.div>

                {/* Back Side (What We Offer) */}
                <motion.div
                  className="absolute inset-0 bg-white p-8 shadow-md rounded-md flex items-center justify-center "
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    display: 'flex',
                    height: '450px',
                    width: '100%',
                    margin: '0 auto',
                  }}
                >
                  <div className="bg-white">
                    <h3 className="text-3xl bg-white text-black  font-bold text-center mb-4">What we offer?</h3>
                    <p className="text-lg bg-white text-black  text-center mb-6  ">
                      We understand what you need to achieve your health and fitness goals. We offer a sustainable program which incorporates food & fitness you love - all whilst getting the body you love too!
                    </p>
                  </div>
                  
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-11  relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
           

            {/* Testimonial 1 */}
            <div className="w-full relative z-10 animate-slide-in-left">
              <blockquote className="relative p-8 bg-pink-600 dark:bg-pink-900 shadow-md rounded-md">
                <div className="absolute top-0 left-0 -ml-8 text-9xl font-bold text-black dark:text-white opacity-100">
                  &ldquo;
                </div>
                <p className="text-lg text-center italic  dark:bg-pink-900">
                  A life-changing programme! Run by great Trainers who truly understand the challenge of achieving your body goals. It's a flexible plan which fits around my crazy work schedule. It has renewed my confidence so that I feel comfortable again in my own skin. Thank you Body by Megan for all your support! I couldn't have done it without you.
                </p>
                <div className="absolute bottom-0 right-0 -mr-8 text-9xl font-bold text-black dark:text-white opacity-100">
                  &rdquo;
                </div>
              </blockquote>
            </div>

            {/* Testimonial 2 */}
            <div className="w-full mt-16 relative z-10 animate-slide-in-right">
              <blockquote className="relative p-8 bg-yellow-600  dark:bg-yellow-900 shadow-md rounded-md ">
                <div className="absolute top-0 left-0 -ml-8 text-9xl font-bold text-black  dark:text-white opacity-100">
                  &ldquo;
                </div>
                <p className="text-lg text-center italic dark:bg-yellow-900">
                  I joined Body by Megan after struggling with my body image for years. Their personalized approach helped me to build healthier habits and gave me the tools I needed to transform my life. I am now more confident and feel amazing. Highly recommend their services to anyone looking for real results!
                </p>
                <div className="absolute bottom-0 right-0 -mr-8 text-9xl font-bold text-black dark:text-white opacity-100">
                  &rdquo;
                </div>
              </blockquote>
            </div>
          </div>
        </section>

        <hr className="my-8 border-gray-300" />

        {/* Features Section */}
        <section className="py-0 mb-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8  ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
              {/* Highlighted Feature 1 */}
              <div className="bg-white   shadow-md rounded-md overflow-hidden hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center text-center">
                <div className="p-6 dark:bg-white">
                  <h3 className="text-2xl font-bold mb-4 dark:bg-white dark:text-black ">🚀 Limited spaces</h3>
                  <p className="text-lg dark:bg-white dark:text-black ">
                    We are focused on putting the personal back into personal training - so we only take on a small handful of clients at any one time. This enables dedicated time & energy for you.
                  </p>
                </div>
              </div>
              {/* Highlighted Feature 2 */}
              <div className="bg-white dark:text-black  shadow-md rounded-md overflow-hidden hover:bg-black  hover:text-white transition-colors duration-300 flex items-center justify-center text-center h-[550px]">
                <div className="p-6 dark:bg-white dark:text-black  ">
                  <h3 className="text-2xl font-bold mb-4 dark:bg-white dark:text-black ">💬 24/7 support</h3>
                  <p className="text-lg dark:bg-white dark:text-black ">
                    Anytime, anywhere! We are here to support you on your journey... Every step of the way! We understand how important this is because - well, we have been there too!
                  </p>
                </div>
              </div>
              {/* Highlighted Feature 3 */}
              <div className="bg-white dark:text-black shadow-md rounded-md overflow-hidden hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center text-center">
                <div className="p-6 dark:bg-white dark:text-black ">
                  <h3 className="text-2xl font-bold mb-4 dark:bg-white dark:text-black ">🏆 Personal experience</h3>
                  <p className="text-lg dark:bg-white dark:text-black ">
                    We have truly walked the journey you have decided to embark on today. We now thrive in our day-to-day lives - living in our ideal bodies, and so can you too!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

         {/* Best Version */}

         
         <section 
      className="py-0 text-white text-left" 
      style={{ 
        backgroundImage: "url(https://www.thewell-hq.com/wp-content/uploads/2023/07/female-body-background.jpg)", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '100vh' 
      }}
    >
      <div className="flex items-center justify-start h-full bg-black  bg-opacity-50 pl-12">
        <div className="text-left px-6 md:px-12 ">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight ">
            <motion.span
              className="block"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ ...textTransition, delay: 0.2 }} // Add delay for the first word
            >
              Become the
            </motion.span>
            <motion.span
              className="block"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ ...textTransition, delay: 0.5 }} // Add delay for the second word
            >
              best version of
            </motion.span>
            <motion.span
              className="block"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ ...textTransition, delay: 0.8 }} // Add delay for the third word
            >
              yourself
            </motion.span>
          </h2>
        </div>
      </div>
    </section>

    <hr className="my-8 border-gray-300" />
  {/* connect us */}
<section 
  className="py-16  text-center"
>
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't Wait a Day Longer</h2>
    <p className="text-lg mb-8">
      Take the first step towards a healthier you by filling out the form below. Our team will get in touch with you shortly to discuss how we can help you achieve your goals.
    </p>
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="firstName" className="text-left mb-2">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            className="p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className="text-left mb-2">Last Name</label>
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
        <label htmlFor="email" className="text-left mb-2">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          className="p-3 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="mobileNumber" className="text-left mb-2">Mobile Number</label>
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
        className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-md shadow"
      >
        Let's Do This
      </button>
    </form>
  </div>
</section>


        {/* Footer */}
        <footer className=" py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black dark:white">
            <p>&copy; 2024 BODY BY MEGAN. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;