// GoalReview.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const GoalReview = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/goal-create");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Did you complete your goal?</h1>
            <p style={{ fontSize: "14px", color: "#555" }}>
                [Goal from yesterday here]
            </p>
            <div style={{ marginTop: "20px" }}>
                <button onClick={handleClick} style={{ marginRight: "10px" }}>
                    Yes
                </button>
                <button onClick={handleClick}>No</button>
            </div>
        </div>
    );
};

export default GoalReview;
