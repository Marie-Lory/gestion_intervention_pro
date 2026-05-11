# Gestion des tokens JWT (authentification)

from jose import jwt, JWTError
from datetime import datetime, timedelta
from config import SECRET_KEY, ALGORITHM

ACCESS_EXPIRE_MIN = 60
REFRESH_EXPIRE_DAYS = 7

# Création token d'accès
def create_access_token(data: dict):
    to_encode = data.copy()
    to_encode.update({
        "type": "access",
        "exp": datetime.utcnow() + timedelta(minutes=ACCESS_EXPIRE_MIN)
    })
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# Création refresh token
def create_refresh_token(data: dict):
    to_encode = data.copy()
    to_encode.update({
        "type": "refresh",
        "exp": datetime.utcnow() + timedelta(days=REFRESH_EXPIRE_DAYS)
    })
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# Décodage token JWT
def decode_token(token: str):
    try:
        return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    except JWTError:
        return None