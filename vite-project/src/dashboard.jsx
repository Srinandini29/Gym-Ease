import React, { useState } from "react";
import { motion } from "framer-motion";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const stats = [
    { label: "Workouts 🏋️", value: 18, percentage: 75, color: "#8E44AD" },
    { label: "Active Minutes ⏱️", value: 146, percentage: 85, color: "#4299E1" },
    { label: "Calories Burned 🔥", value: 2450, percentage: 65, color: "#ED64A6" },
  ];

  const trendingPosts = [
    { user: "John Doe", profilePic: "post1.jpeg", text: "Great workout today!", image: "postH.jpg" },
    { user: "Jane Smith", profilePic: "post2.jpeg", text: "Healthy meal today!", image: "food3.webp" },
  ];

  const workoutFeed = [
    { user: "Alex Turner", profilePic: "post3.jpeg", text: "30-day fitness challenge!", image: "/src/gympos.jpg" },
    { user: "Chris Evans", profilePic: "post4.jpg", text: "Just completed a 10K run!", image: "post6.webp" },
  ];

  const challenges = [
    { title: "7-Day Cardio Blast", participants: 120 },
    { title: "Strength Training Challenge", participants: 95 },
    { title: "Yoga for Beginners", participants: 60 },
  ];

  // Adding state for likes and comments
  const [likes, setLikes] = useState({
    post1: 0,
    post2: 0,
    workout1: 0,
    workout2: 0,
  });

  const handleLike = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: prevLikes[postId] + 1,
    }));
  };

  const handleComment = (postId) => {
    alert(`Comment section for ${postId}`);
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen transition-colors duration-500`}>
      
      <div
        className={`${darkMode ? "text-white" : "text-black"} min-h-screen transition-colors duration-500`}
        style={{
          backgroundImage: `url("dashbgrnd.webp")`, // Replace with your actual image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-white fixed top-0 left-0 right-0 flex justify-between items-center shadow-lg">
          <h1 className="text-2xl font-bold">Fitness Dashboard</h1>
          <button onClick={() => setDarkMode(!darkMode)} className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700">
            {darkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
          </button>
        </div>

        <div className="mt-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-lg shadow-lg flex flex-col items-center bg-opacity-90" style={{ backgroundColor: stat.color }}>
              <h2 className="text-3xl font-bold text-white">{stat.value}</h2>
              <p className="text-white">{stat.label}</p>
              <Progress percent={stat.percentage} theme={{ active: { color: "#fff" } }} />
            </div>
          ))}
        </div>

        <div className="mt-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Trending Posts */}
          <div>
            <h2 className="text-2xl text-white font-bold mb-4 text-center">🔥 Trending Posts</h2>
            {trendingPosts.map((post, index) => (
              <motion.div key={index} className="bg-white dark:bg-black dark:text-white p-4 rounded-xl shadow-lg mb-4" whileHover={{ scale: 1.05 }}>
                <div className="flex items-center mb-4">
                  <img src={post.profilePic} alt={post.user} className="w-12 h-12 rounded-full mr-4" />
                  <h3 className="text-lg font-semibold">{post.user}</h3>
                </div>
                <p>{post.text}</p>
                <img src={post.image} alt="Post" className="w-full h-60 object-cover rounded-lg mt-4" />
                <div className="flex items-center mt-4 space-x-4">
                  <button onClick={() => handleLike(`post${index + 1}`)} className="text-xl">
                    👍 {likes[`post${index + 1}`]}
                  </button>
                  <button onClick={() => handleComment(`post${index + 1}`)} className="text-xl">
                    💬 Comment
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Workout Feed */}
          <div>
            <h2 className="text-2xl text-white font-bold mb-4 text-center">🏋️‍♂️ Workout Feed</h2>
            {workoutFeed.map((post, index) => (
              <div key={index} className="bg-white dark:bg-black dark:text-white p-6 rounded-xl shadow-lg mb-4">
                <div className="flex items-center mb-4">
                  <img src={post.profilePic} alt={post.user} className="w-12 h-12 rounded-full mr-4" />
                  <h3 className="text-lg font-semibold">{post.user}</h3>
                </div>
                <p>{post.text}</p>
                <img src={post.image} alt="Post" className="w-full h-60 object-cover rounded-lg mt-4" />
                <div className="flex items-center mt-4 space-x-4">
                  <button onClick={() => handleLike(`workout${index + 1}`)} className="text-xl">
                    👍 {likes[`workout${index + 1}`]}
                  </button>
                  <button onClick={() => handleComment(`workout${index + 1}`)} className="text-xl">
                    💬 Comment
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Community Challenges & Leaderboard */}
          <div>
  <h2 className="text-2xl text-white font-bold mb-4 text-center">🏆 Community Challenges</h2>
  {challenges.map((challenge, index) => (
    <div key={index} className="bg-white dark:bg-black dark:text-white p-6 rounded-xl shadow-lg mb-4">
      <h3 className="text-lg font-semibold">{challenge.title}</h3>
      <p className="text-gray-500 dark:text-white">Participants: {challenge.participants}</p>

      {/* Add Register Button */}
      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
          Register
        </button>

        {/* Add Points Button */}
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600">
          {challenge.participants * 10} Points
        </button>
      </div>
    </div>
  ))}

  <h2 className="text-2xl text-white font-bold mb-4 text-center">🥇 Leaderboard</h2>
  <div className="bg-white dark:bg-black dark:text-white p-6 rounded-xl shadow-lg">
    <p className="text-lg font-semibold">1. Alice - 500 pts</p>
    <p className="text-lg font-semibold">2. Bob - 450 pts</p>
    <p className="text-lg font-semibold">3. Charlie - 400 pts</p>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
