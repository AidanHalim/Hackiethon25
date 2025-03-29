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
        data = pd.read_csv("UserLog.csv", skiprows=1, names=["timestamp", "rating", "goalReview", "currGoal", "highlight"])

        data['timestamp'] = pd.to_datetime(data['timestamp'], format="%Y-%m-%d")

        # Get yesterday's date
        yesterday = datetime.now().date() - timedelta(days=1)

        prev = data[data['timestamp'] == pd.Timestamp(yesterday)]

        if not prev.empty:
            return {"currGoal": prev.iloc[-1]['currGoal']}
        else:
            return {"currGoal": None}

    except Exception as e:
        return {"error": str(e)}

@app.get("/journal/streak")
def calculate_streak():
    currentDay = datetime.now().date()
    
    data = pd.read_csv(csv_file, skiprows=1, names=["timestamp", "rating", "goalReview", "currGoal", "highlight"])
    
    data['timestamp'] = pd.to_datetime(data['timestamp'], format="%Y-%m-%d").dt.date
    dates = data["timestamp"].tolist()[::-1]
    
    streak = 0
    lives = 3

    for date in dates:
        if date == currentDay:
            streak += 1
            currentDay -= timedelta(days=1)
        elif streak == 0 and lives != 0 and date != currentDay:
            while lives != 0:
                if currentDay != date:
                    lives -= 1
                currentDay -= timedelta(days=1)
                break
            break
        else:
            break

    return {"streak" : streak, "lives" : lives}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="localhost", port=8000, reload=True)