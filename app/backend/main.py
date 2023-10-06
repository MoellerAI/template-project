import logging
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from routes.default_route import router as default_router

logging.basicConfig(level=logging.INFO)

app = FastAPI()

# This serves the frontend static files
app.mount("/", StaticFiles(directory="static"), name="static")

app.include_router(default_router, tags=["default endpoints"]) 