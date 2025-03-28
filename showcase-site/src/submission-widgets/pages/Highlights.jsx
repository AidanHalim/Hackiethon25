import React, { useState } from "react";

const Highlights = () => {
    const [goal, setGoal] = useState("");

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Insert your daily highlights</h1>
            <input
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="Type your highlights here..."
                style={{
                    fontSize: "14px",
                    padding: "8px",
                    width: "250px",
                    marginTop: "10px",
                }}
            />
            <div style={{ marginTop: "20px" }}>
                <button style={{ marginRight: "10px" }}>Confirm</button>
            </div>
        </div>
    );
};

export default Highlights;
