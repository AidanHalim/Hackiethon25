import React, { useState } from "react";

const Test = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Random React Counter</h1>
            <p>Current Count: {count}</p>
            <button onClick={increment} style={{ marginRight: "10px" }}>
                Increment
            </button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Test;