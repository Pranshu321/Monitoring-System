from fastapi import FastAPI
import psutil
import csv
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
# from connection_with_model_prediction import collect_process_data

# Connect to MongoDB
uri = "mongodb+srv://pranshujain0221:abc%401234@telaverge.gfbpyg6.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri)
db = client['telaverge']
collection = db['process']

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/mongoprocess")
async def mongoprocess():
    if collection.count_documents({}) == 0:
        return "No data Present"

    items = []
    for x in collection.find({}, {"_id": 0, "connections": 0, "open_files": 0, "environ": 0}):
        items.append(x)

    return items


@app.get("/process")
async def process():
    items = []
    disk_usage = psutil.disk_usage('/').percent
    for process in psutil.process_iter(['pid', 'name', 'status', 'ppid', 'cpu_times', 'memory_info', 'num_threads', 'connections', 'open_files', 'environ']):
        process_info = {
            'pid': process.info['pid'],
            'name': process.info['name'],
            'status': process.info['status'],
            'ppid': process.info['ppid'],
            'cpu_times_user': process.info['cpu_times'].user,
            'cpu_times_system': process.info['cpu_times'].system,
            'memory_info_rss': process.info['memory_info'].rss,
            'memory_info_vms': process.info['memory_info'].vms,
            'num_threads': process.info['num_threads'],
            'disk_usage': disk_usage
            # 'connections': process.info['connections'],
            # 'open_files': process.info['open_files'],
            # 'environ': process.info['environ']
        }
        items.append(process_info)

    return items

@app.get("/kill")
async def kill(pid:int):
    process = psutil.Process(pid)
    process.terminate()
    collection.find_one_and_delete({"pid": pid})
    return f"{pid} process Killed"

