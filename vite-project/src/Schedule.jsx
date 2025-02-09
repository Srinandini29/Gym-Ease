import React, { useState } from 'react';
import Select from 'react-select';
import './App'; // Import the CSS file containing the animation

// Define options for workouts
const workoutOptions = [
  { value: 'Biceps', label: 'Biceps' },
  { value: 'Triceps', label: 'Triceps' },
  { value: 'Legs', label: 'Legs' },
  { value: 'Shoulders', label: 'Shoulders' },
  { value: 'Back', label: 'Back' },
  { value: 'Chest', label: 'Chest' },
  { value: 'Cardio', label: 'Cardio' }
];

const daysOfWeek = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

const morningTimes = [
  '06:00 AM', '06:30 AM', '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM', 
  '09:00 AM', '09:30 AM', '10:00 AM'
];

const nightTimes = [
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', 
  '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM'
];

const Schedule = () => {
  const [day, setDay] = useState('');
  const [session, setSession] = useState('morning');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);
  const [isGymAvailable, setIsGymAvailable] = useState(null); // Track gym availability (null means not checked yet)
  const [isStartEndValid, setIsStartEndValid] = useState(true); // To validate start and end time

  const handleWorkoutChange = (selectedOptions) => {
    setSelectedWorkouts(selectedOptions || []);
  };

  // Check if end time is after start time
  const validateStartEndTimes = () => {
    if (startTime && endTime) {
      const startIndex = (session === 'morning' ? morningTimes : nightTimes).indexOf(startTime);
      const endIndex = (session === 'morning' ? morningTimes : nightTimes).indexOf(endTime);
      
      if (endIndex <= startIndex) {
        setIsStartEndValid(false);
        return false;
      }
    }
    setIsStartEndValid(true);
    return true;
  };

  // Simulate checking availability based on day, session, start, and end time
  const checkGymAvailability = () => {
    if (!validateStartEndTimes()) return;

    const unavailableTimes = {
      Monday: ['07:00 AM', '08:00 AM'],
      Tuesday: ['09:00 AM', '10:00 AM'],
      Wednesday: ['06:30 AM', '07:30 AM'],
      // You can add more rules here for other days and times
    };

    if (day && startTime && endTime) {
      // Get the unavailable times for the selected day
      const unavailableSlots = unavailableTimes[day] || [];

      // Check if any time in the selected range is unavailable
      const startIndex = (session === 'morning' ? morningTimes : nightTimes).indexOf(startTime);
      const endIndex = (session === 'morning' ? morningTimes : nightTimes).indexOf(endTime);

      const isUnavailable = unavailableSlots.some((time) => {
        const timeIndex = (session === 'morning' ? morningTimes : nightTimes).indexOf(time);
        return timeIndex >= startIndex && timeIndex < endIndex;
      });

      setIsGymAvailable(!isUnavailable);
    }
  };

  const handleSaveSchedule = () => {
    if (!day || !startTime || !endTime || selectedWorkouts.length === 0) {
      alert('Please fill out all fields.');
      return;
    }

    alert('Schedule saved successfully');
    // You can add actual save functionality here
  };

  return (
    <div className="p-6 min-h-screen flex items-center justify-center bg-gray-100 animated-background">
      <div className="w-full max-w-md bg-white dark:bg-black p-6 rounded-lg shadow-lg animate__animated animate__fadeIn">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Your Workout Schedule</h2>

        <div className="mb-4">
          <label className="block mb-2">Select Day:</label>
          <select 
            value={day} 
            onChange={(e) => setDay(e.target.value)} 
            className="p-2 border border-gray-300 rounded-md w-full transition-transform transform hover:scale-105"
          >
            <option value="">Select Day</option>
            {daysOfWeek.map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Select Session:</label>
          <select 
            value={session} 
            onChange={(e) => setSession(e.target.value)} 
            className="p-2 border border-gray-300 rounded-md w-full transition-transform transform hover:scale-105"
          >
            <option value="morning">Morning (6:00 AM - 10:00 AM)</option>
            <option value="night">Night (4:00 PM - 9:30 PM)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Select Start Time:</label>
          <select 
            value={startTime} 
            onChange={(e) => setStartTime(e.target.value)} 
            className="p-2 border border-gray-300 rounded-md w-full transition-transform transform hover:scale-105"
          >
            <option value="">Select Start Time</option>
            {(session === 'morning' ? morningTimes : nightTimes).map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Select End Time:</label>
          <select 
            value={endTime} 
            onChange={(e) => setEndTime(e.target.value)} 
            className="p-2 border border-gray-300 rounded-md w-full transition-transform transform hover:scale-105"
          >
            <option value="">Select End Time</option>
            {(session === 'morning' ? morningTimes : nightTimes).map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        {isStartEndValid ? null : (
          <div className="text-red-500 mb-4">
            End time must be after start time.
          </div>
        )}

        {/* Moved the "Select Workouts" dropdown above the buttons */}
        <div className="mb-6">
          <label className="block mb-2">Select Workouts:</label>
          <Select
            isMulti
            options={workoutOptions}
            value={selectedWorkouts}
            onChange={handleWorkoutChange}
            className="w-full transition-transform transform hover:scale-105"
            placeholder="Select workouts"
          />
        </div>

        <div className="mb-6">
          {isGymAvailable === null ? null : isGymAvailable ? (
            <span className="text-green-500">Gym is available at the selected time.</span>
          ) : (
            <span className="text-red-500">Gym is not available at the selected time. Please choose another option.</span>
          )}
        </div>

        {/* Buttons are now below the "Select Workouts" dropdown */}
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={checkGymAvailability}
            className="bg-blue-500 text-white p-2 rounded-md w-full transition-transform transform hover:scale-105"
          >
            Check Availability
          </button>

          <button
            onClick={handleSaveSchedule}
            className="bg-blue-500 text-white p-2 rounded-md w-full transition-transform transform hover:scale-105"
          >
            Save Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;