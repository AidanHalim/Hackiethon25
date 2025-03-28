import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const GoalCreate = () => {
    const [goal, setGoal] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/highlights");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Insert goal for tomorrow</h1>
            <input
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="Type your goal here..."
                style={{
                    fontSize: "14px",
                    padding: "8px",
                    width: "250px",
                    marginTop: "10px",
                }}
            />
            <div style={{ marginTop: "20px" }}>
                <button style={{ marginRight: "10px" }}  onClick={handleClick}>Confirm</button>
            </div>
        </div>
    );
};

export default GoalCreate;
