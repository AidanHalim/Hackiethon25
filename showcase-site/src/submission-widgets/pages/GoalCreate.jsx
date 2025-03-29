import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { TextField } from "@mui/material";

const GoalCreate = ({ useJournal }) => {

    const { setGoal } = useJournal();

    const [text, setText] = useState("");
    const navigate = useNavigate();

    const handleClick = (value) => {
        setGoal(value);
        navigate('/journal/highlights');
    };

    return (
        <div style={{ textAlign: "center", }}>
            <h1>Insert text for tomorrow</h1>
            <TextField
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
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
                <button style={{ marginRight: "10px" }}  onClick={() => handleClick(text)}>Confirm</button>
            </div>
        </div>
    );
};

export default GoalCreate;
