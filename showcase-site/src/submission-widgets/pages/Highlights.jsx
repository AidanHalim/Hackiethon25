import React, { useState } from "react";
import { TextField } from "@mui/material";

const Highlights = () => {
    const [goal, setGoal] = useState("");

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Insert your daily highlights</h1>
            <TextField
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                label="Your Highlights!"
                style={{
                    fontSize: "14px",
                    // padding: "8px",
                    width: "250px",
                    marginTop: "10px",
                }}
                variant="standard"
            />
            <div style={{ marginTop: "20px" }}>
                <button style={{ marginRight: "10px" }}>Confirm</button>
            </div>
        </div>
    );
};

export default Highlights;
