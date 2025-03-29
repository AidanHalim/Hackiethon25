from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import csv
from datetime import datetime

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create the CSV file if it doesn't exist and write headers
csv_file = "UserLog.csv"
with open(csv_file, mode="a", newline="") as file:
    writer = csv.writer(file)
    file.seek(0)

@app.post("/StoreRating")
async def submit_response(data: dict):
    rating = data.get("rating")
    timestamp = datetime.now().isoformat()

    with open(csv_file, mode="a", newline="") as file:
        writer = csv.writer(file)
        writer.writerow([timestamp, rating])

    return {"status": "saved"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="localhost", port=8000, reload=True)