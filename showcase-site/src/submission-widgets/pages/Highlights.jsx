import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Highlights = ({ useJournal }) => {
    const navigate = useNavigate();

    const { rating, goalReview, goal, highlight, setHighlight, reset } = useJournal();
    const [text, setText] = useState("");


    async function submitJournal(value) {
        try {
            axios.post("http://localhost:8000/journal/submit", {
                rating: rating,
                goalReview: goalReview,
                currGoal: goal,
                highlight: value,
            }).then((response) => {
                console.log("Journal submitted successfully!", response.data);
                reset();
                // navigate("success");
            });
            
        } catch (error) {
            console.error("There was an error submitting the journal!", error);
        }
    }

    async function handleKeyPress(event) {
        if (event.key === "Enter") {
            await submitJournal();
        }
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Insert your daily highlights</h1>
            <TextField
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
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
                <button onClick={() => submitJournal(text)} style={{ marginRight: "10px" }}>Confirm</button>
            </div>
        </div>
    );
};

export default Highlights;
