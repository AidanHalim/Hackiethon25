import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Typography, Box, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate, useOutletContext } from 'react-router-dom';
// import axios from 'axios';

const labels = {
    0.5: 'Horrible',
    1: 'Horrible+',
    1.5: 'Bad',
    2: 'Bad+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const pageVariant = {
    initial: { y: '10vh', opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

const StarRatingPage = ({ useJournal }) => {

    const { rating, setRating } = useJournal();


    const navigate = useNavigate();

    const storeValue = async (storedValue) => {
        // try {
        
        //     axios.post('http://localhost:8000/StoreRating', {
        //         rating: storedValue
        //     })

        //     navigate('/journal/goal-review');
        //     }
        //     catch (error) {
        //         console.error('Error storing value:', error);
        // }

        setRating(storedValue);
        navigate('/journal/goal-review');
    }

  const [hover, setHover] = React.useState(-1);

  return (
    <motion.div variants={pageVariant} initial="initial" animate="animate" transition={{ type: 'spring', delay: 0.5 }}>
        <Typography sx={{ mb: 1.5 }}>How Was Your Day?</Typography>
        <Box sx={{ width: "250px", display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Rating
                value={rating}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => { storeValue(newValue) }}
                onChangeActive={(event, newHover) => { setHover(newHover) }}
                emptyIcon={
                    <StarIcon
                        style={{
                            opacity: 0.55,
                            color: 'black',
                        }}
                        fontSize="inherit"
                    />
                }
            />

            {rating !== null && (
                <Box sx={{ ml: 2 }}>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>
                        {labels[hover !== -1 ? hover : rating]}
                    </Typography>
                </Box>
            )}
        </Box>
    </motion.div>
  );
};

export default StarRatingPage;
