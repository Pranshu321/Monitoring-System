from fastapi import FastAPI
import psutil
import csv
from fastapi.middleware.cors import CORSMiddleware

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


@app.get("/process")
async def process():
    items=[]
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
