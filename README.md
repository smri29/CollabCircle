# CollabCircle

CollabCircle is being developed as a two-app workspace:

- `backend/`: NestJS API
- `frontend/`: Next.js web application

This repository is being built incrementally for team-based development, with backend and frontend evolving in small, reviewable steps.

## Current Status

- Root repository scaffolding is in place.
- `backend/` has been initialized with NestJS.
- `frontend/` has been initialized with Next.js using the App Router and TypeScript.

## Project Structure

```text
CollabCircle/
|-- backend/
|-- frontend/
|-- .gitignore
`-- README.md
```

## Backend Setup

Run these commands from [`backend/`](/e:/myWebsites/CollabCircle/backend):

```bash
npm install
npm run start:dev
```

Useful backend commands:

```bash
npm run build
npm run test
npm run test:e2e
```

## Frontend Setup

Run these commands from [`frontend/`](/e:/myWebsites/CollabCircle/frontend):

```bash
npm install
npm run dev
```

Useful frontend commands:

```bash
npm run build
npm run lint
npm run start
```

## Environment Files

- `backend/.env`: local backend secrets and runtime configuration
- `backend/.env.example`: backend environment template
- `frontend/.env.local`: local frontend environment values
- `frontend/.env.example`: frontend environment template

## Collaboration Approach

The project will be developed in small iterations. Each completed step can be reviewed, committed, and pushed before the next one begins.
