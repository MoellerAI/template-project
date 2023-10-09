import os

import httpx
from fastapi import APIRouter, Request, HTTPException, status
from fastapi.responses import RedirectResponse
from urllib.parse import parse_qs

router = APIRouter()

CLIENT_ID = os.environ.get("CLIENT_ID")
CLIENT_SECRET = os.environ.get("CLIENT_SECRET")
REDIRECT_URI = os.environ.get("REDIRECT_URI")
AUTH_URL = "https://github.com/login/oauth/authorize"
TOKEN_URL = "https://github.com/login/oauth/access_token"

@router.get("/login")
async def login(request: Request):
    return RedirectResponse(url=AUTH_URL + f"?client_id={CLIENT_ID}&redirect_uri={REDIRECT_URI}")

@router.get("/github-callback")
async def github_callback(code: str):

    async with httpx.AsyncClient() as client:
        response = await client.post(TOKEN_URL, data={
            "client_id": CLIENT_ID,
            "client_secret": CLIENT_SECRET,
            "code": code,
            "redirect_uri": REDIRECT_URI
        })

    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail="Could not authenticate with GitHub")

    parsed_data = parse_qs(response.text)
    access_token = parsed_data.get('access_token', [None])[0]

    if not access_token:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Access token not found in GitHub response")
    
    response = RedirectResponse(url="/")
    response.set_cookie(key="access_token", value=access_token)

    return response