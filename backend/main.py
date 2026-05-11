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
    allow_origins=["https://gestion-intervention-1uokvqxj3-marie-lorys-projects.vercel.app",
    "https://gestion-intervention-pro-indol.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes API
app.include_router(auth.router)
app.include_router(integration.router, prefix="/integration")
app.include_router(users.router, prefix="/users")
app.include_router(refresh.router)