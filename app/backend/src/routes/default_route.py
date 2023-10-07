import os
from fastapi import APIRouter, HTTPException, Depends, Cookie
from fastapi.responses import FileResponse, RedirectResponse

router = APIRouter()

class NotAuthenticated(Exception):
    pass

def get_token(access_token: str = Cookie(None)):
    """Dependency to get the access_token from cookies."""
    if access_token is None:
        raise NotAuthenticated
    return access_token

@router.get("/")
async def root(token: str = Depends(get_token)):
    if not os.environ.get("TESTING"):
        return FileResponse("./static/index.html")
    else:
        raise HTTPException(status_code=404, detail="Page not found")