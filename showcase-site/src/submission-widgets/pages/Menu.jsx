import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { Typography } from '@mui/material';

const Menu = () => {
  const [streak, setStreak] = useState(null);
  
  useEffect(() => {
    async function currentStreak() {
      try {
        const response = await axios.get('http://localhost:8000/journal/streak');
        if (response) {
          console.log("Current streak fetched successfully:", response);
          console.log(response.data.streak);
          setStreak(response.data.streak);
        } else {
          console.log("No current streak found.");
          setStreak(null);
        }
      } catch (error) {
        console.error("Error fetching current streak:", error);
      }
    }
    currentStreak();
  }, []);

  return (
    <>
        <Typography className="text-white">{streak !== null ? `Current Streak: ${streak}` : "Loading..."}</Typography>
        
        
        <Link to="journal/star-rating" className="text-white">Go to Test</Link>
    </>
  );
};

export default Menu;
