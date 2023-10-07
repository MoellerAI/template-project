import logging
import os
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from src.routes.default_route import router as default_router

logging.basicConfig(level=logging.DEBUG)

app = FastAPI()

app.include_router(default_router, tags=["default endpoints"])

if not os.environ.get("TESTING"):
    app.mount("/", StaticFiles(directory="/app/backend/static"), name="static")
