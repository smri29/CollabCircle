# CollabCircle

CollabCircle is being developed as a two-app workspace for a public-facing organization website that is growing from a research-led foundation toward a broader engineering and impact-focused platform.

The repository currently contains:

- `backend/`: NestJS API
- `frontend/`: Next.js web application

Development is happening incrementally, with the frontend being built first and the backend wired in afterward through structured API and database work.

## Current Status

- The frontend is actively developed and already includes the public website structure for:
  - company-level pages
  - the Research Wing
  - the Engineering Hub
  - careers / recruitment
  - newsroom, achievements, FAQ, legal, and founder-facing pages
- The frontend is built with Next.js App Router, TypeScript, reusable components, and typed local content files.
- The current frontend is still largely static/content-driven and is not yet connected to a live backend or database.
- The backend exists as a NestJS scaffold and will be expanded after the frontend structure is finalized.
- PostgreSQL has been chosen as the future primary database for the project.

## Database Direction

CollabCircle will use PostgreSQL for its backend data layer.

This choice fits the domain the website is growing into, including:

- team and founder records
- research projects and publications
- newsroom and achievement records
- recruitment/application workflows
- structured admin-managed content

PostgreSQL is preferred over a NoSQL-first approach because CollabCircle's future data model is expected to be strongly relational, structured, and workflow-oriented.

## Project Structure

```text
CollabCircle/
|-- backend/
|-- frontend/
|-- .gitignore
`-- README.md
```

## Frontend Overview

The frontend currently represents the most complete part of the project.

It is a branded, multi-section public website that currently includes:

- Landing / company homepage
- About and About Us pages
- Contact page
- Newsroom
- Achievements
- FAQ
- Founders' Corner
- Career / Join Us flows
- Research Wing pages:
  - home
  - research
  - publications
  - projects
  - team
  - policy
  - collaborations
- Engineering Hub pages:
  - home
  - solutions and services
  - clients
  - technologies
  - team
  - policy
  - roadmap

At the moment, most of this content is served from typed local data files in the frontend codebase. Those content models will later be migrated into backend-managed PostgreSQL-backed entities.

## Backend Overview

The backend is currently in an early scaffold stage using NestJS.

Planned future backend responsibilities include:

- exposing public content APIs
- managing structured records for team members, founders, projects, publications, achievements, and newsroom entries
- supporting future recruitment/application handling
- providing the data layer that will replace hardcoded frontend content over time

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

Current backend state:

- NestJS app scaffold is present
- baseline tests are available
- business modules, API resources, and PostgreSQL integration are not yet implemented

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

Current frontend state:

- production build passes
- lint passes
- routes are statically generated at build time
- most content is currently local and not yet fetched from backend APIs

## Environment Files

- `backend/.env`: local backend secrets and runtime configuration
- `backend/.env.example`: backend environment template
- `frontend/.env.local`: local frontend environment values
- `frontend/.env.example`: frontend environment template

## Collaboration Approach

The project will be developed in small iterations. Each completed step can be reviewed, committed, and pushed before the next one begins.

The current implementation order is:

1. Complete and stabilize the frontend experience
2. Design the backend modules around the frontend's real content model
3. Integrate PostgreSQL into the NestJS backend
4. Replace hardcoded frontend content with backend-powered data progressively
