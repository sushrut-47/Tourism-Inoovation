from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db.database import test_database_connection
from app.models.destination import Destination
from app.db.database import engine, Base


app = FastAPI(
    title="TourismWise API",
    description="Backend API for TourismWise travel planning application",
    version="1.0.0",
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health_check():
    return {
        "status": "ok",
        "message": "TourismWise backend is running",
    }


@app.get("/api/db-health")
def database_health_check():
    result = test_database_connection()

    return {
        "status": "ok",
        "database": "connected",
        "test_result": result,
    }


@app.on_event("startup")
def create_tables():
    Base.metadata.create_all(bind=engine)