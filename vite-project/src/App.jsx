import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Login from './Login';
import Navbar from './navbar'; // Import Navbar component
import SignUp from './Signup';
import Payment from './payment';
import Contact from './contact';
import Schedule from './Schedule';
import Dashboard from './dashboard';
import ExerciseLibraryPage from './ExerciseLibraryPage';
import NutritionPlanPage from './NutritionPlanPage';
import './App.css'; // Add your general CSS

function App() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const htmlElement = document.querySelector('html'); 
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className={`h-screen bg-white dark:bg-black `}>
         {/* Removed flex and items-center for better layout */}
        <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch} /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ExerciseLibraryPage" element={<ExerciseLibraryPage />} />
          <Route path="/NutritionPlanPage" element={<NutritionPlanPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;