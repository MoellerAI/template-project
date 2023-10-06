from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse

router = APIRouter()

@router.get("/")
async def root():
    try:
        return FileResponse("./static/index.html")
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Page not found")