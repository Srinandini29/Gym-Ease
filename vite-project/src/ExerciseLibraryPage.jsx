import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ExerciseLibraryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Updated data for different workout categories
  const workoutCategories = [
    {
      name: 'Chest Workout',
      description: 'Chest exercises for building strength and mass.',
      youtubeLink: 'https://www.youtube.com/embed/80jm4JoXdKk',
    },
    {
      name: 'Back Workout',
      description: 'Back exercises to improve posture and strength.',
      youtubeLink: 'https://www.youtube.com/embed/xJueKo5aYz4',
    },
    {
      name: 'Bicep Workout',
      description: 'Target your arms for optimal bicep growth.',
      youtubeLink: 'https://www.youtube.com/embed/Yue-1LhcQsA',
    },
    {
      name: 'Tricep Workout',
      description: 'Target your arms for optimal tricep growth.',
      youtubeLink: 'https://www.youtube.com/embed/aIsrBznAJEc',
    },
    {
      name: 'Leg Workout',
      description: 'Strengthen and tone your legs with these exercises.',
      youtubeLink: 'https://www.youtube.com/embed/7BM6d9NUzTU',
    },
    {
      name: 'Shoulder Workout',
      description: 'Strengthen your shoulder with these exercises.',
      youtubeLink: 'https://www.youtube.com/embed/EmqtuxRIaYg',
    },
    {
      name: 'Weight Loss Cardio',
      description: 'Intense cardio workout to help with weight loss.',
      youtubeLink: 'https://www.youtube.com/embed/X9Ep7QTV98E',
    }
  ];

  const filteredWorkouts = workoutCategories.filter(workout =>
    workout.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-[url('/src/bgg.avif')] bg-cover bg-center ">
      {/* Header Section */}
      <section className="py-16  text-white dark:text-black ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Exercise Library
          </motion.h2>
          <motion.p
            className="mt-4 max-w-lg text-lg mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Explore a range of exercises designed to help you build strength, endurance, and flexibility. Find exercises that suit your goals.
          </motion.p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8  ">
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-md dark:bg-black dark:text-white"
            placeholder="Search workout categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      {/* Workout Categories Section (Three in Each Row occupying the entire space) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {filteredWorkouts.length > 0 ? (
              filteredWorkouts.map((workout, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-black dark:text-white shadow-md rounded-md overflow-hidden transition-transform duration-500 ease-in-out transform hover:rotate-3 hover:scale-105 hover:bg-yellow-900"
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{workout.name}</h3>
                    <p className="text-lg mb-4">{workout.description}</p>

                    {/* Embedding the YouTube video */}
                    <div className="relative pb-9/16">
                      <iframe
                        width="100%"
                        height="315"
                        src={workout.youtubeLink}
                        title={workout.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="mb-4 rounded-md"
                      />
                    </div>

                    <Link to={`/exercise/${workout.name}`} className="text-pink-500 hover:underline">
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center text-lg text-gray-500">
                No workout categories found.
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default ExerciseLibraryPage;
