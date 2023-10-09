import pytest
from fastapi.testclient import TestClient
from src.main import app
from src.routes.default_route import NotAuthenticated, get_token

client = TestClient(app)

def test_root_endpoint():
    response = client.get("/")
    assert response.status_code == 404

def test_get_token_with_valid_token():
    token = "mock_token"
    result = get_token(token)
    assert result == token

def test_get_token_with_no_token():
    with pytest.raises(NotAuthenticated):
        get_token(None)
