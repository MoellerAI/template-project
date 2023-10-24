from fastapi import APIRouter, Depends
from src.routes.dependencies import get_current_user

router = APIRouter()

@router.get("/protected-route")
async def read_protected_route(user: dict = Depends(get_current_user)):
    return {"user": user}