# Tourism-
sih-travel-app/
├── frontend/                 # React App (Vite)
│   ├── src/
│   │   ├── components/       # Reusable UI (Buttons, Maps, Cards)
│   │   ├── pages/            # Dashboard, TripBuilder, Explore
│   │   ├── services/         # Axios API calls (centralized)
│   │   └── store/            # State management
│   └── package.json
├── backend/                  # Python FastAPI
│   ├── app/
│   │   ├── main.py           # FastAPI app instance & CORS
│   │   ├── routers/          # API endpoints (trips, users, AI)
│   │   ├── models.py         # SQLAlchemy database schemas
│   │   ├── schemas.py        # Pydantic models for validation
│   │   └── services/         # Business logic (LLM prompts, ONDC calls)
│   └── requirements.txt
└── README.md
