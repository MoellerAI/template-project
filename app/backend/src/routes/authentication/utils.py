import os
import base64
import json
import firebase_admin
from firebase_admin import credentials, auth
from fastapi import HTTPException, status

def get_firebase_config():
    base64_decoded_bytes = base64.b64decode(os.getenv("FIREBASE_CONFIG"))
    json_str = base64_decoded_bytes.decode('utf-8')
    decoded_data_dict = json.loads(json_str)
    return decoded_data_dict

config = get_firebase_config()
cred = credentials.Certificate(config)
firebase_admin.initialize_app(cred, {
	'databaseURL':"https://template-app-87c8e-default-rtdb.europe-west1.firebasedatabase.app/"
	})

def verify_firebase_token(token: str):
    try:
        decoded_token = auth.verify_id_token(token)
        return decoded_token
    except ValueError as e:
        # Token is invalid
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
