from fastapi import FastAPI
import psutil
import csv
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient

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


def update_or_add(data):
    pid = data["pid"]
    existing_document = collection.find_one({"pid": pid})

    if existing_document is not None:
        # Update existing document
        update_dict = {"$set": {key: value for key,
                                value in data.items() if key != "pid"}}
        collection.update_one({"pid": pid}, update_dict)
    else:
        # Add new document
        collection.insert_one(data)
        print(f"Added new document with PID {pid}")


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/mongoprocess")
async def mongoprocess():
    if collection.count_documents({}) == 0:
        return "No data Present"
    
    items = []
    for x in collection.find({} , {"_id": 0 , "connections": 0, "open_files": 0, "environ": 0}):
        items.append(x)
    
    print(len(items))
    return items

@app.get("/process")
async def process():
    items = []
    for process in psutil.process_iter(['pid', 'name', 'status', 'ppid', 'cpu_times', 'memory_info', 'num_threads', 'connections', 'open_files', 'environ']):
        process_info = {
            'pid': process.info['pid'],
            'name': process.info['name'],
            'status': process.info['status'],
            'parentId': process.info['ppid'],
            'cpu_time_user': process.info['cpu_times'].user,
            'cpu_time_system': process.info['cpu_times'].system,
            'memory_reserved': process.info['memory_info'].rss,
            'memory_virtual': process.info['memory_info'].vms,
            'threads': process.info['num_threads'],
            # 'connections': process.info['connections'],
            # 'open_files': process.info['open_files'],
            # 'environ': process.info['environ']
        }
        items.append(process_info)

    return items
