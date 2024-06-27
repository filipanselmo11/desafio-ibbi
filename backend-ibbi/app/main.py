from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import users, categories, products, purchases, sales


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:4200",
]

@app.get('/')
async def root():
    return "Olá mundo"

app.include_router(users.router)
app.include_router(categories.router)
app.include_router(products.router)
app.include_router(purchases.router)
app.include_router(sales.router)
app.include_router(users.test_router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],

)