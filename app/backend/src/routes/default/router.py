from fastapi import APIRouter
from fastapi.responses import FileResponse

router = APIRouter()

@router.get("/")
async def root():
    return FileResponse("./static/index.html")

@router.get("/login")
async def root():
    return FileResponse("./static/index.html")

@router.get("/signup")
async def root():
    return FileResponse("./static/index.html")

@router.get("/about")
async def root():
    return FileResponse("./static/index.html")