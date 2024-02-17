import psutil
from pymongo import MongoClient

# Connect to MongoDB
uri = "mongodb+srv://pranshujain0221:abc%401234@telaverge.gfbpyg6.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri)
db = client['telaverge']
collection = db['process']


#function to check for duplicay
#If there is exists a process in the database with the same PID in the DB then the data regarding that process will be updated else a new entry will be made

def update_or_add(data):
    pid = data["pid"]
    existing_document = collection.find_one({"pid": pid})

    if existing_document is not None:
    # Update existing document
        update_dict = {"$set": {key: value for key, value in data.items() if key != "pid"}}
        collection.update_one({"pid": pid}, update_dict)
    else:
    # Add new document
        collection.insert_one(data)
        print(f"Added new document with PID {pid}")


# Collect process data
def collect_process_data():
    # Delete all documents in the collection
    collection.delete_many({})
    for process in psutil.process_iter(['pid', 'name', 'status', 'ppid', 'cpu_times', 'memory_info',
                                         'num_threads', 'connections']):
        try:
            cpu_percent = psutil.cpu_percent(interval=1)
            memory_usage = psutil.virtual_memory().percent
            disk_usage = psutil.disk_usage('/').percent
            process_info = {
                'pid': process.info['pid'],
                'name': process.info['name'],
                'status': process.info['status'],
                'ppid': process.info['ppid'],
                'cpu_percent': cpu_percent,
                'cpu_times_user': process.info['cpu_times'].user,
                'cpu_times_system': process.info['cpu_times'].system,
                'memory_percent' : memory_usage,
                'memory_info_rss': process.info['memory_info'].rss,
                'memory_info_vms': process.info['memory_info'].vms,
                'num_threads': process.info['num_threads'],
                'disk_usage' : disk_usage,
                'connections': process.info['connections']
            }

            update_or_add(process_info)

        except psutil.NoSuchProcess:
            pass

collect_process_data()