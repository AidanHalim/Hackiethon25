// GoalReview.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const GoalReview = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/journal/goal-create');
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Did you complete your goal?</h1>
            <p style={{ fontSize: "14px", color: "#555" }}>
                [Goal from yesterday here]
            </p>
            <div style={{ marginTop: "20px" }}>
                
                <Stack direction="row" spacing={3} justifyContent="center"> {/* Adds gap between buttons */}
                    <MotionButton variant="contained" color="success" onClick={handleClick} whileTap={{ scale: 0.95 }} size="large" sx={{ px: 4, py: 0.75, fontSize: '0.75rem', borderRadius: 2}}
                        whileHover={{ scale: [1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1], textShadow: "0px 0px 8px rgb(255, 255, 255)", boxShadow: "0px 0px 8px rgb(255, 255, 255)" }}>
                        Yes
                    </MotionButton>

                    <MotionButton variant="contained" color="error" onClick={handleClick} whileTap={{ scale: 0.95 }} size="large" sx={{ px: 4, py: 0.75, fontSize: '0.75rem', borderRadius: 2}}
                        whileHover={{ scale: 1.1, x: [0, -5, 5, -5, 5, 0], textShadow: "0px 0px 8px rgb(255, 255, 255)", boxShadow: "0px 0px 8px rgb(255, 255, 255)" }}>
                        No
                    </MotionButton>
                </Stack>
            </div>
        </div>
    );
};

export default GoalReview;
