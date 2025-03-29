import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Typography, Button } from '@mui/material';
import ThreeLivesImg from '../../assets/plant-3-lives.png';
import TwoLivesImg from '../../assets/plant-2-lives.png';
import OneLifeImg from '../../assets/plant-1-lives.png';
import NoLivesImg from '../../assets/plant-0-lives.png';

const Menu = () => {
  const navigate = useNavigate();
  const [streak, setStreak] = useState(null);
  const [lives, setLives] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  
  useEffect(() => {
    async function currentStreak() {
      try {
        const response = await axios.get('http://localhost:8000/journal/streak');
        if (response) {
          console.log("Current streak fetched successfully:", response);
          setStreak(response.data.streak);
          setLives(response.data.lives);
        } else {
          console.log("No current streak found.");
        }
      } catch (error) {
        console.error("Error fetching current streak:", error);
      }
    }
    currentStreak();
  }, []);

  useEffect(() => {
    async function checkCompleted() {
      try {
          const completedStatus = await axios.get('http://localhost:8000/journal/completed')
          console.log(completedStatus)
          setIsCompleted(completedStatus.data.completed)
      } catch (error) {
        console.log('failed to grab completed status', error)
      }
    }
    checkCompleted();
  }, [])

  return (
    <>
      <Typography className="text-white">
        {streak !== null ? `Current Streak: ${streak}` : "Loading..."}
      </Typography>
      
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img src={lives === 3 ? ThreeLivesImg : lives === 2 ? TwoLivesImg : lives === 1 ? OneLifeImg : NoLivesImg} alt="streak" style={{ width: '88%', height: '87%', display: 'block' }}/>
        
        <Button disabled={isCompleted} onClick={() => navigate('/journal/star-rating')} variant="contained" style={{ fontSize: '12px', position: 'absolute', top: '88%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, width: "100%"}}
          sx={{
            backgroundColor: '#1976d2',
            color: 'white',
            opacity: 1,
            '&.Mui-disabled': {
              backgroundColor: '#a0a3a1',
              color: 'white',
              opacity: 1,
            },
          }}>
          {isCompleted ? 'Log Completed For The Day!' : 'Log Journal'}
        </Button>
      </div>
    </>
  );
};

export default Menu;
