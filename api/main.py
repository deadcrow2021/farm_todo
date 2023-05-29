from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ['https://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers = ['*'],
)

@app.get('/data')
def get_all():
    return 1


@app.get('/data/{id}')
async def get(id):
    return 1


@app.post('/data/create')
async def create():
    return 1


@app.put('/data/update/{id}')
async def update(id):
    return 1


@app.delete('/data/delete/{id}')
async def delete(id):
    return 1

