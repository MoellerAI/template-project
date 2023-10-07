import logging
import os
from fastapi import FastAPI, Request
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles

from src.routes.default_route import router as default_router, NotAuthenticated
from src.routes.authentication_route import router as authentication_router

logging.basicConfig(level=logging.DEBUG)



app = FastAPI()

@app.exception_handler(NotAuthenticated)
async def not_authenticated_exception_handler(request: Request, exc: NotAuthenticated):
    return RedirectResponse(url="/login")

app.include_router(default_router, tags=["default endpoints"])
app.include_router(authentication_router, tags=["authentication endpoints"])

if not os.environ.get("TESTING"):
    app.mount("/", StaticFiles(directory="/app/backend/static"), name="static")
