import logging
import os
from fastapi import FastAPI, Request
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles

from src.routes.default.router import router as default_router, NotAuthenticated
from src.routes.authentication.router import router as authentication_router
import os
from fastapi import APIRouter, HTTPException, Depends, Cookie
from fastapi.responses import FileResponse, RedirectResponse

logging.basicConfig(level=logging.DEBUG)

app = FastAPI(
    title="Template project API documentation",
    description="""
    Welcome to the API documentation for the template project 🚀 
    
    In this documentation you see all the endpoints that are available in the template project.
    """,
    version="0.0.1" 
) 


app.include_router(default_router, tags=["default endpoints"])

    
app.mount("/", StaticFiles(directory="./static"), name="static")

@app.get("/test")
def test():
    return HTTPException(404, "test")


# @app.exception_handler(NotAuthenticated)
# async def not_authenticated_exception_handler(request: Request, exc: NotAuthenticated):
#     return RedirectResponse(url="/login")

#app.include_router(authentication_router, tags=["authentication endpoints"])
 