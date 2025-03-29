import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { TextField } from "@mui/material";

const GoalCreate = () => {
    const [goal, setGoal] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(goal)
        navigate('/journal/highlights');
    };

    return (
        <div style={{ textAlign: "center", }}>
            <h1>Insert goal for tomorrow</h1>
            <TextField
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                label="Your Goal!"
                style={{
                    fontSize: "14px",
                    // padding: "8px",
                    width: "250px",
                    marginTop: "10px",
                }}
                variant="standard"
            />
            <div style={{ marginTop: "20px" }}>
                <button style={{ marginRight: "10px" }}  onClick={handleClick}>Confirm</button>
            </div>
        </div>
    );
};

export default GoalCreate;
