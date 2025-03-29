import React, { useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";

const Highlights = ({ useJournal }) => {

    const { rating, goalReview, currGoal, highlight, setHighlight, reset } = useJournal();
    const [text, setText] = useState("");

    async function submitJournal() {
        try {
            axios.post("http://localhost:8000/journal/submit", {
                rating: rating,
                goalReview: goalReview,
                currGoal: currGoal,
                highlight: highlight,
            }).then((response) => {
                console.log("Journal submitted successfully!", response.data);
                reset();
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
                <button onClick={submitJournal} style={{ marginRight: "10px" }}>Confirm</button>
            </div>
        </div>
    );
};

export default Highlights;
