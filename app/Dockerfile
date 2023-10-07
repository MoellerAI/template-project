# --- Backend Stage ---
FROM python:3.12-slim AS backend-stage

WORKDIR /backend

# Set up the backend
COPY backend/pyproject.toml backend/poetry.lock /backend/

RUN pip install --upgrade pip && \
    pip install poetry && \
    poetry config virtualenvs.create false && \
    poetry install

COPY backend/ /backend/

# --- Frontend Stage ---
FROM node:20 AS frontend-stage

WORKDIR /frontend

COPY frontend/package.json frontend/tsconfig.json frontend/vite.config.ts frontend/index.html /frontend/
RUN npm install

COPY frontend/src /frontend/src
COPY frontend/public /frontend/public
RUN npm run build

# Copy frontend build to backend stage
FROM backend-stage
WORKDIR /app/backend

# Copy backend files
COPY --from=backend-stage /backend /app/backend

# Copy frontend build files
COPY --from=frontend-stage /frontend/backend/static /app/backend/static

CMD ["poetry", "run", "uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
