# Point d'entrée API FastAPI

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import Base, engine

from routes import auth, integration, users, refresh

app = FastAPI()

# Création tables DB
Base.metadata.create_all(bind=engine)

# Autorisation frontend (React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_origin_regex=r"https://.*\.vercel\.app",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes API
app.include_router(auth.router)
app.include_router(integration.router, prefix="/integration")
app.include_router(users.router, prefix="/users")
app.include_router(refresh.router)