import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Typography, Button } from '@mui/material';
import fullStreakImg from '../../assets/plant.png';

const Menu = () => {
  const navigate = useNavigate();
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
        <Typography className="text-white">
          {streak !== null ? `Current Streak: ${streak}` : "Loading..."}
        </Typography>
        
        <div style={{ position: 'relative', width: '100%', height: '190px' }}>
          <img src={fullStreakImg} alt="streak" style={{ width: '100%', height: '100%', display: 'block' }}
          />
          <Button onClick={() => navigate('/journal/star-rating')} variant="contained" style={{ fontSize: '12px', position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, width: "100%"}}>
            Log Journal
          </Button>
        </div>
    </>
  );
};

export default Menu;
