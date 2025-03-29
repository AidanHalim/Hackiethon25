from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import csv
from datetime import datetime, timedelta
import pandas as pd

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

csv_file = "UserLog.csv"

@app.post("/journal/submit")
async def submit_response(data: dict):
    
    rating = data.get("rating")
    goalReview = data.get("goalReview")
    currGoal = data.get("currGoal")
    highlight = data.get("highlight")
    timestamp = datetime.now().strftime("%Y-%m-%d")

    with open(csv_file, mode="a", newline="") as file:
        writer = csv.writer(file)
        writer.writerow([timestamp, rating, goalReview, currGoal, highlight])

    return {"status": "saved"}

@app.get("/journal/previous-goal")
async def get_prev_goal():
    try:
        df = pd.read_csv("UserLog.csv", skiprows=1, names=["timestamp", "rating", "goalReview", "currGoal", "highlight"])

        df['timestamp'] = pd.to_datetime(df['timestamp'], format="%Y-%m-%d")

        # Get yesterday's date
        yesterday = datetime.now().date() - timedelta(days=1)

        prev = df[df['timestamp'] == pd.Timestamp(yesterday)]

        if not prev.empty:
            return {"currGoal": prev.iloc[-1]['currGoal']}
        else:
            return {"currGoal": None}

    except Exception as e:
        return {"error": str(e)}
    

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="localhost", port=8000, reload=True)