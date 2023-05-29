from model import Todo
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')
database = client.TodoList
collection = database.todo


async def fetch_one_record(title):
    document = await collection.find_one({"title": title})
    return document


async def fetch_all_record():
    records = []
    cursor = collection.find({})
    async for doc in cursor:
        records.append(Todo(**doc))
    return records


async def create_record(record):
    doc = record
    result = await collection.insert_one(doc)
    return result


async def update_record(title, desc):
    await collection.update_one({"title": title}, {"$set":{
        "description": desc
    }})
    document = await collection.find_one({"title": title})
    return document

async def remove_record(title):
    await collection.delete_one({"title": title})
    return True
