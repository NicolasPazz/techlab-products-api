# TechLab Products API

REST API for a product catalog with JWT authentication and Firebase Firestore as the database. Built for the TechLab Node.js course.

**Live API:** https://techlab-products-api.vercel.app

## Tech stack

- Node.js + Express
- Firebase Firestore
- JSON Web Tokens
- Deployed on Vercel (serverless)

Layered structure: routes → controllers → services → models.

## Authentication

`POST /auth/login` returns a Bearer token:

```bash
curl -X POST https://techlab-products-api.vercel.app/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "techlab", "password": "techlab2025"}'
```

```json
{ "success": true, "data": { "token": "eyJhbGciOi...", "type": "Bearer" } }
```

There are two roles:

- **Demo user** (`techlab` / `techlab2025`): read-only access.
- **Admin**: full access. Its credentials are set through environment variables and are not public.

## Endpoints

All product endpoints require `Authorization: Bearer <token>`.

| Method | Path | Role | Description |
| --- | --- | --- | --- |
| `GET` | `/api/products` | any | List products |
| `GET` | `/api/products/:id` | any | Get a product |
| `POST` | `/api/products/create` | admin | Create a product |
| `PUT` | `/api/products/:id` | admin | Update a product |
| `DELETE` | `/api/products/:id` | admin | Delete a product |

Errors are returned as `{ "success": false, "error": "..." }` with status 400, 401, 403, 404 or 500.

## Run locally

```bash
npm install
cp .env.example .env   # fill in JWT, Firebase and user credentials
npm start
```

The server listens on `http://localhost:3000`.

### Environment variables

| Variable | Description |
| --- | --- |
| `JWT_SECRET`, `JWT_EXPIRATION` | Token signing secret and lifetime |
| `ADMIN_USERNAME`, `ADMIN_PASSWORD` | Admin credentials (full access) |
| `DEMO_USERNAME`, `DEMO_PASSWORD` | Read-only user (defaults to `techlab` / `techlab2025`) |
| `FIREBASE_*` | Firebase project configuration |
