from unittest.mock import patch, AsyncMock
import pytest
from fastapi.testclient import TestClient
from fastapi import HTTPException
from src.main import app
from httpx import Response

client = TestClient(app)

def test_login_endpoint():
    response = client.get("/login")
    assert response.status_code == 404
    
@patch('httpx.AsyncClient.post', new_callable=AsyncMock)
@pytest.mark.asyncio
async def test_github_callback_not_200(mocked_post):
    mock_response = Response(400, text="Bad Request")
    mocked_post.return_value = mock_response
    
    response = client.get("/github-callback?code=dummy_code")
    assert response.status_code == 400  # Check for the correct error code instead

@patch('httpx.AsyncClient.post', new_callable=AsyncMock)
@pytest.mark.asyncio
async def test_github_callback_no_token(mocked_post):
    mock_response = Response(200, text="scope=user")
    mocked_post.return_value = mock_response
    
    response = client.get("/github-callback?code=dummy_code")
    assert response.status_code == 400  # Check for the correct error code instead
