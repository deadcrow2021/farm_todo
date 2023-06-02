from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

from database import *

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers = ['*'],
)

@app.get('/data')
async def get_all():
    resp = await fetch_all_record()
    return resp


@app.get('/data/{title}', response_model=Todo)
async def get(title):
    resp = await fetch_one_record(title)
    if resp:
        return resp
    raise HTTPException(404, f'There is no such title: {title}')


@app.post('/data/create', response_model=Todo)
async def create(todo: Todo):
    resp = await create_record(todo.dict())
    if resp:
        return resp
    raise HTTPException(400, f'Somethin went wrong')


@app.put('/data/update/{title}', response_model=Todo)
async def update(title: str, desc: str):
    resp = await update_record(title, desc)
    if resp:
        return resp
    raise HTTPException(404, f'There is no such title: {title}')


@app.delete('/data/delete/{title}')
async def delete(title):
    resp = await remove_record(title)
    if resp:
        return "Item was deleted"
    raise HTTPException(404, f'There is no such title: {title}')

