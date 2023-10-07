![CI-Build](https://github.com/MoellerAI/template-project/actions/workflows/main.yml/badge.svg)
![Coverage Badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/MoellerAI/f2129f63adbf39fa6d08dd0f9d0d4132/raw/code-coverage-template.json)

# Template software application project

This is a template software application. It serves as a best-practice structure to quickly create a software product with a backend (FastAPI) and a frontend (React-Vite). To quickly develop assets. The entire application is packaged into a single docker image and can be deployed anywhere.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Docker

### Directory Structure

```
├── app
│   ├── backend
│   ├── Dockerfile
│   ├── frontend
│   ├── start-dev.sh
│   └── start-prod.sh
├── Makefile
└── README.md
```
#### Backend Structure
```
├── src
│   ├── core
│   ├── helper
│   ├── main.py
│   ├── pyproject.toml
│   ├── routes
│   └── tests
└── static

```

#### Frontend Structure
```
├── index.html
├── node_modules
├── package.json
├── public
├── README.md
├── src
├── tsconfig.json
└── vite.config.ts
```

### Running the Project

#### Development

To run the project in development mode:

```bash
make run-dev
```
This will start the backend with live-reloading enabled and will serve the frontend assets from the static directory.

#### Production
To run the project in production mode:
```bash
make run-prod
```
This will start the backend without live-reloading and will serve the frontend assets from the static directory.

### Contributing
