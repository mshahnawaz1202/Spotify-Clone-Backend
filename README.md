
<div align="center">

---

## 📚 Table of Contents

<details>
<summary>Click to expand</summary>

- [📖 About the Project](#-about-the-project)
- [✨ Features](#-features)
- [🌟 Highlights](#-highlights)
- [🏗️ System Architecture](#️-system-architecture)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Installation](#️-installation)
- [🔑 Environment Variables](#-environment-variables)
- [▶️ Running the Project](#️-running-the-project)
- [📡 Complete API Documentation](#-complete-api-documentation)
- [🔐 Authentication Flow](#-authentication-flow)
- [🗄️ Database Schema](#️-database-schema)
- [📊 Entity Relationship Diagram](#-entity-relationship-diagram)
- [🧪 API Testing](#-api-testing)
- [🔒 Security Features](#-security-features)
- [🚀 Deployment Guide](#-deployment-guide)
- [💡 Why This Project?](#-why-this-project)
- [🔮 Future Improvements](#-future-improvements)
- [🤝 Contributing](#-contributing)
- [👨‍💻 Author](#-author)
- [⭐ Support](#-support)

</details>

---

## 📖 About the Project

**Spotify Clone Backend** is a robust, scalable REST API that powers a music streaming platform similar to Spotify. Built as a full-stack learning project, it demonstrates real-world backend engineering patterns including JWT-based cookie authentication, role-based access control, cloud media storage, and a clean MVC architecture with Express and MongoDB.

The API supports two distinct user roles — **listeners** who stream music and **artists** who upload tracks and manage albums — making it a complete, production-grade backend ready to connect to any modern frontend.

---

## ✨ Features

| Icon | Feature                             | Description                                                                             |
| :--: | ----------------------------------- | --------------------------------------------------------------------------------------- |
|  🔐  | **JWT Authentication**        | Stateless auth via signed tokens stored in HTTP-only cookies                            |
|  🎭  | **Role-Based Access Control** | `user` and `artist` roles with dedicated middleware guards                          |
|  🎵  | **Music Upload**              | Artists upload`.mp3` files streamed to ImageKit CDN via Multer memory storage         |
|  📀  | **Album Management**          | Create albums by grouping existing tracks with artist ownership                         |
|  🔍  | **Browse & Discover**         | Fetch all songs and albums with Mongoose`.populate()` for full relational data        |
|  🔒  | **Password Security**         | `bcryptjs` hashing with 10 salt rounds — passwords never stored in plain text        |
| ☁️ | **Cloud Storage**             | Audio files organized in ImageKit folders by type (`music/`, `videos/`, `files/`) |
|  🍪  | **Cookie Sessions**           | Secure cookie-based token delivery — no`Authorization` header management needed      |
|  🧱  | **MVC Architecture**          | Clean separation into Routes → Controllers → Models → Services                       |

---

## 🌟 Highlights

```
✅  Cookie-based JWT auth — no localStorage token juggling on the client
✅  Memory-based Multer — files never touch disk, streamed straight to the cloud
✅  ImageKit CDN — global low-latency audio delivery out of the box
✅  Mongoose populate — relational-style queries in MongoDB
✅  Express 5 — latest stable release with built-in async error handling
✅  Role guards at middleware level — protected routes need zero controller-level checks
✅  dotenv config — all secrets externalized, zero hardcoded credentials
```

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                          CLIENT (Browser / App)                     │
└────────────────────────────────┬────────────────────────────────────┘
                                 │  HTTP Requests (with Cookie)
                                 ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        EXPRESS SERVER  :3000                        │
│                                                                     │
│   ┌─────────────┐    ┌──────────────────┐    ┌──────────────────┐  │
│   │  Middleware │    │     Routes        │    │   Controllers    │  │
│   │             │    │                  │    │                  │  │
│   │ express.json│───▶│ /api/auth        │───▶│ auth.controller  │  │
│   │ cookieParser│    │ /api/music       │    │ music.controller │  │
│   │ authUser    │    │                  │    │                  │  │
│   │ authArtist  │    └──────────────────┘    └────────┬─────────┘  │
│   └─────────────┘                                     │            │
└──────────────────────────────────────────────────────┼─────────────┘
                                                        │
                    ┌───────────────────────────────────┤
                    │                                   │
                    ▼                                   ▼
     ┌──────────────────────────┐       ┌───────────────────────────┐
     │       MongoDB Atlas      │       │      ImageKit CDN         │
     │                          │       │                           │
     │  ┌──────┐  ┌───────┐    │       │  /yt-complete-backend/    │
     │  │ User │  │ Music │    │       │    ├── music/              │
     │  └──────┘  └───────┘    │       │    ├── videos/            │
     │       ┌─────────┐       │       │    └── files/             │
     │       │  Album  │       │       │                           │
     │       └─────────┘       │       └───────────────────────────┘
     └──────────────────────────┘
```

---

## 🛠️ Tech Stack

<table>
  <thead>
    <tr>
      <th>Category</th>
      <th>Technology</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>⚙️ Runtime</b></td>
      <td><img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/></td>
      <td>JavaScript server runtime</td>
    </tr>
    <tr>
      <td><b>🌐 Framework</b></td>
      <td><img src="https://img.shields.io/badge/Express_5-000000?style=flat-square&logo=express&logoColor=white"/></td>
      <td>HTTP server, routing, middleware</td>
    </tr>
    <tr>
      <td><b>🗄️ Database</b></td>
      <td><img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white"/> <img src="https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white"/></td>
      <td>NoSQL document store + ODM</td>
    </tr>
    <tr>
      <td><b>🔑 Auth</b></td>
      <td><img src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white"/> <img src="https://img.shields.io/badge/bcryptjs-003A70?style=flat-square&logo=letsencrypt&logoColor=white"/></td>
      <td>Token signing + password hashing</td>
    </tr>
    <tr>
      <td><b>🍪 Cookies</b></td>
      <td><img src="https://img.shields.io/badge/cookie--parser-FF6C37?style=flat-square&logo=npm&logoColor=white"/></td>
      <td>Parse & set HTTP cookies</td>
    </tr>
    <tr>
      <td><b>☁️ Storage</b></td>
      <td><img src="https://img.shields.io/badge/ImageKit-009EF7?style=flat-square&logo=imagekit&logoColor=white"/></td>
      <td>Cloud CDN for audio files</td>
    </tr>
    <tr>
      <td><b>📤 Uploads</b></td>
      <td><img src="https://img.shields.io/badge/Multer-47A248?style=flat-square&logo=npm&logoColor=white"/></td>
      <td>Multipart file handling (memory storage)</td>
    </tr>
    <tr>
      <td><b>🔧 Config</b></td>
      <td><img src="https://img.shields.io/badge/dotenv-ECD53F?style=flat-square&logo=dotenv&logoColor=black"/></td>
      <td>Environment variable management</td>
    </tr>
    <tr>
      <td><b>🔁 Dev Server</b></td>
      <td><img src="https://img.shields.io/badge/Nodemon-76D04B?style=flat-square&logo=nodemon&logoColor=white"/></td>
      <td>Auto-reload on file changes</td>
    </tr>
  </tbody>
</table>

---

## 📁 Project Structure

```
Spotify-Clone-Backend/
│
├── 📄 server.js                    # Entry point — boots server on :3000, connects DB
├── 📦 package.json                 # Dependencies & npm scripts
├── 🔒 .env                         # Secrets (DATABASE_URL, JWT_SECRET, IMAGEKIT_PRIVATE_KEY)
│
└── 📂 src/
    │
    ├── 📄 app.js                   # Express app — registers global middleware & routes
    │
    ├── 📂 db/
    │   └── db.js                   # Mongoose connect() wrapper with error handling
    │
    ├── 📂 routes/
    │   ├── auth.routes.js          # POST /register  /login  /logout
    │   └── music.routes.js         # POST /upload  /album  |  GET /  /album
    │
    ├── 📂 controllers/
    │   ├── auth.controller.js      # registerUser · loginUser · logOut
    │   └── music.controller.js     # createMusic · createAlbum · getAllMusic · getAllAlbums
    │
    ├── 📂 models/
    │   ├── user.model.js           # Schema: username · email · password · role
    │   ├── music.model.js          # Schema: uri · title · artist (ref: User)
    │   └── album.model.js          # Schema: title · musics[] (ref: Music) · artist (ref: User)
    │
    ├── 📂 middlewares/
    │   └── auth.middleware.js      # authUser (user|artist) · authArtist (artist only)
    │
    └── 📂 services/
        └── storage.service.js      # ImageKit upload helper — organises files by extension
```

---

## ⚙️ Installation

### Prerequisites

Make sure the following are installed and ready before you begin:

| Requirement                                                                                               | Version | Link                                                                            |
| --------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------- |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)  | v18+    | [nodejs.org](https://nodejs.org/)                                                |
| ![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)                | v9+     | Comes with Node                                                                 |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)    | Any     | [mongodb.com](https://www.mongodb.com/) or [Atlas](https://www.mongodb.com/atlas) |
| ![ImageKit](https://img.shields.io/badge/ImageKit-009EF7?style=flat-square&logo=imagekit&logoColor=white) | —      | [imagekit.io](https://imagekit.io/) (free tier works)                            |

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/mshahnawaz1202/Spotify-Clone-Backend.git

# 2. Move into the project directory
cd Spotify-Clone-Backend

# 3. Install all dependencies
npm install

# 4. Create your environment file
cp .env.example .env
# ↑ Then open .env and fill in your values (see next section)
```

---

## 🔑 Environment Variables

Create a `.env` file in the **root** of the project:

```env
# ─── Database ─────────────────────────────────────────────────────
DATABASE_URL=mongodb://localhost:27017/spotify-clone
# For MongoDB Atlas: mongodb+srv://<user>:<pass>@cluster.mongodb.net/spotify-clone

# ─── JWT ──────────────────────────────────────────────────────────
JWT_SECRET=your_super_secret_jwt_key_min_32_chars

# ─── ImageKit ─────────────────────────────────────────────────────
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key_here
```

<details>
<summary><b>📋 Variable Reference</b></summary>

| Variable                 | Required | Description                                                                                                | Example                               |
| ------------------------ | :------: | ---------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `DATABASE_URL`         |    ✅    | Full MongoDB connection URI                                                                                | `mongodb://localhost:27017/spotify` |
| `JWT_SECRET`           |    ✅    | Signing secret for JWT tokens — keep this long and random                                                 | `x9kP2mQ7...`                       |
| `IMAGEKIT_PRIVATE_KEY` |    ✅    | Private key from[ImageKit Dashboard → Developer Options](https://imagekit.io/dashboard/developer/api-keys) | `private_abc123...`                 |

> ⚠️ **Never commit your `.env` file.** Add it to `.gitignore` immediately.

</details>

---

## ▶️ Running the Project

```bash
# ── Development (auto-reloads on save) ──────────────────────────
npm run dev

# ── Production ──────────────────────────────────────────────────
npm start
```

Once running, the server is available at:

```
http://localhost:3000
```

<details>
<summary><b>✅ Expected startup output</b></summary>

```
server is running on port 3000
Database Connected!
```

</details>

---

## 📡 Complete API Documentation

> **Base URL:** `http://localhost:3000`
> **Auth:** Cookie-based. The `token` cookie is set automatically on login/register — just send `credentials: 'include'` from your client.

---

### 🔐 Auth Endpoints — `/api/auth`

<details>
<summary><b>POST   /api/auth/register  —  Register a new user</b></summary>

**Auth Required:** ❌ None

**Request Body:**

```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securePassword123",
  "role": "user"
}
```

| Field        | Type       | Required | Notes                                |
| ------------ | ---------- | :------: | ------------------------------------ |
| `username` | `string` |    ✅    | Must be unique                       |
| `email`    | `string` |    ✅    | Must be unique                       |
| `password` | `string` |    ✅    | Stored as bcrypt hash                |
| `role`     | `string` |    ❌    | `"user"` (default) or `"artist"` |

**Success Response — `201 Created`:**

```json
{
  "message": "User Created Successfully!",
  "user": {
    "id": "64f3ab2c...",
    "username": "johndoe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

**Error Response — `400 Bad Request`:**

```json
{
  "message": "User Already exists"
}
```

**Side Effect:** Sets `token` cookie in the response.

</details>

---

<details>
<summary><b>POST   /api/auth/login  —  Login with existing credentials</b></summary>

**Auth Required:** ❌ None

**Request Body:**

```json
{
  "username": "johndoe",
  "password": "securePassword123"
}
```

> You can use either `username` or `email` in the body — the query runs an `$or` match.

**Success Response — `201 Created`:**

```json
{
  "message": "User Logged In Successfully!",
  "user": {
    "id": "64f3ab2c...",
    "username": "johndoe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

**Error Responses:**

```json
{ "message": "Invalid Credentials" }   // user not found — 401
{ "message": "Invalid Password" }      // wrong password — 401
```

**Side Effect:** Sets `token` cookie in the response.

</details>

---

<details>
<summary><b>POST   /api/auth/logout  —  End the current session</b></summary>

**Auth Required:** ❌ None (but cookie must exist to have effect)

**Request Body:** None

**Success Response — `201 Created`:**

```json
{
  "message": "User Logged Out Successfully!"
}
```

**Side Effect:** Clears the `token` cookie.

</details>

---

### 🎵 Music Endpoints — `/api/music`

<details>
<summary><b>POST   /api/music/upload  —  Upload a new track</b></summary>

**Auth Required:** 🎤 **Artist only**
**Content-Type:** `multipart/form-data`

**Form Fields:**

| Field     | Type       | Required | Notes                     |
| --------- | ---------- | :------: | ------------------------- |
| `title` | `string` |    ✅    | Display name of the track |
| `music` | `file`   |    ✅    | `.mp3` audio file       |

**Success Response — `201 Created`:**

```json
{
  "message": "Music created successfully",
  "music": {
    "id": "64f3ac...",
    "uri": "https://ik.imagekit.io/.../music/1720000000_track.mp3",
    "title": "My First Track",
    "artist": "64f3ab2c..."
  }
}
```

**Error Responses:**

```json
{ "message": "Unauthorized!" }                                  // 401 — no token
{ "message": "Forbidden\n You don't have access to create music" }  // 403 — not artist
```

</details>

---

<details>
<summary><b>POST   /api/music/album  —  Create a new album</b></summary>

**Auth Required:** 🎤 **Artist only**

**Request Body:**

```json
{
  "title": "My Debut Album",
  "musicIds": [
    "64f3ac11...",
    "64f3ac22...",
    "64f3ac33..."
  ]
}
```

| Field        | Type         | Required | Notes                                 |
| ------------ | ------------ | :------: | ------------------------------------- |
| `title`    | `string`   |    ✅    | Album display name                    |
| `musicIds` | `string[]` |    ✅    | Array of existing Music`_id` values |

**Success Response — `201 Created`:**

```json
{
  "message": "Music Album created successfully",
  "music": {
    "id": "64f3ad...",
    "title": "My Debut Album",
    "artist": "64f3ab2c...",
    "musics": ["64f3ac11...", "64f3ac22..."]
  }
}
```

</details>

---

<details>
<summary><b>GET   /api/music/  —  Fetch all tracks</b></summary>

**Auth Required:** 👤 **Any authenticated user**

**Request Body:** None

**Success Response — `201 Created`:**

```json
{
  "message": "Musics Fetched Successfully!",
  "musics": [
    {
      "_id": "64f3ac11...",
      "uri": "https://ik.imagekit.io/.../music/track.mp3",
      "title": "My First Track",
      "artist": {
        "_id": "64f3ab2c...",
        "username": "johndoe",
        "email": "john@example.com",
        "role": "artist"
      }
    }
  ]
}
```

> Note: Results are currently **limited to 2** per query via `.limit(2)`. Remove this for production.

</details>

---

<details>
<summary><b>GET   /api/music/album  —  Fetch all albums</b></summary>

**Auth Required:** 👤 **Any authenticated user**

**Request Body:** None

**Success Response — `200 OK`:**

```json
{
  "message": "Albums fetched successfully!",
  "albums": [
    {
      "_id": "64f3ad...",
      "title": "My Debut Album",
      "artist": {
        "_id": "64f3ab2c...",
        "username": "johndoe",
        "email": "john@example.com"
      },
      "musics": [
        {
          "_id": "64f3ac11...",
          "title": "My First Track",
          "uri": "https://ik.imagekit.io/.../music/track.mp3"
        }
      ]
    }
  ]
}
```

</details>

---

### 📋 API Quick Reference

|  Method  | Endpoint               | Description          |   Auth   |
| :------: | ---------------------- | -------------------- | :-------: |
| `POST` | `/api/auth/register` | Register new account |    ❌    |
| `POST` | `/api/auth/login`    | Login & get cookie   |    ❌    |
| `POST` | `/api/auth/logout`   | Clear session cookie |    ❌    |
| `POST` | `/api/music/upload`  | Upload a music track | 🎤 Artist |
| `POST` | `/api/music/album`   | Create an album      | 🎤 Artist |
| `GET` | `/api/music/`        | Get all tracks       |  👤 User  |
| `GET` | `/api/music/album`   | Get all albums       |  👤 User  |

---

## 🔐 Authentication Flow

```
  REGISTER / LOGIN                  PROTECTED REQUEST
  ─────────────────                 ──────────────────

  Client                            Client
    │                                 │
    │  POST /api/auth/login            │  GET /api/music/
    │  { username, password }          │  Cookie: token=<JWT>
    ▼                                 ▼
  Server                            Auth Middleware
    │                                 │
    ├─ Find user in MongoDB           ├─ Extract token from req.cookies
    ├─ bcrypt.compare(password, hash) ├─ jwt.verify(token, JWT_SECRET)
    ├─ jwt.sign({ id, role })         ├─ Check role (user | artist)
    ├─ res.cookie('token', jwt)       │
    └─ Return user data               ├─ PASS ──▶ next() ──▶ Controller
                                      │
                                      └─ FAIL ──▶ 401 / 403 Response


  ROLE GUARDS
  ───────────

  authUser    ──  allows role: "user"   OR  "artist"
  authArtist  ──  allows role: "artist" ONLY
```

---

## 🗄️ Database Schema

### 👤 User

```js
{
  _id      : ObjectId          // auto-generated
  username : String            // unique, required
  email    : String            // unique, required
  password : String            // bcrypt hash, required
  role     : "user"|"artist"   // enum, default: "user"
}
```

### 🎵 Music

```js
{
  _id    : ObjectId   // auto-generated
  uri    : String     // ImageKit CDN URL, required
  title  : String     // track name, required
  artist : ObjectId   // ref → User, required
}
```

### 📀 Album

```js
{
  _id    : ObjectId     // auto-generated
  title  : String       // album name, required
  musics : [ObjectId]   // ref → Music[]
  artist : ObjectId     // ref → User, required
}
```

---

## 📊 Entity Relationship Diagram

```
┌───────────────────┐          ┌───────────────────┐
│       USER        │          │       MUSIC        │
│───────────────────│          │───────────────────-│
│ _id          (PK) │◄────────┤ artist       (FK)  │
│ username          │  1    N  │ _id          (PK)  │
│ email             │          │ uri               │
│ password          │          │ title             │
│ role              │          └─────────┬──────────┘
└─────────┬─────────┘                    │ N
          │ 1                            │
          │                              │
          │ N         ┌──────────────────┘
          │           │
          │      ┌────▼──────────────┐
          └─────▶│      ALBUM        │
            1  N │───────────────────│
                 │ _id          (PK) │
                 │ title             │
                 │ artist      (FK)  │
                 │ musics[]   (FK[]) │
                 └───────────────────┘
```

**Relationships:**

- One `User` (artist) → Many `Music` tracks
- One `User` (artist) → Many `Albums`
- One `Album` → Many `Music` tracks (via `musics[]` array)

---

## 🧪 API Testing

You can test all endpoints using any HTTP client. Here are ready-to-use examples:

<details>
<summary><b>🟡 Postman / Thunder Client</b></summary>

**Import this collection manually or test endpoint by endpoint:**

1. Set the base URL to `http://localhost:3000`
2. For auth endpoints, no headers needed — cookies are managed automatically
3. For protected endpoints, first log in so the cookie is set, then call the protected route in the same session

</details>

<details>
<summary><b>🖥️ cURL Examples</b></summary>

**Register:**

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@test.com","password":"pass123","role":"artist"}' \
  -c cookies.txt
```

**Login:**

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"pass123"}' \
  -c cookies.txt
```

**Get All Music (with cookie):**

```bash
curl http://localhost:3000/api/music/ \
  -b cookies.txt
```

**Upload a Track (artist only):**

```bash
curl -X POST http://localhost:3000/api/music/upload \
  -b cookies.txt \
  -F "title=My Track" \
  -F "music=@/path/to/audio.mp3"
```

**Create an Album:**

```bash
curl -X POST http://localhost:3000/api/music/album \
  -b cookies.txt \
  -H "Content-Type: application/json" \
  -d '{"title":"My Album","musicIds":["ID1","ID2"]}'
```

**Logout:**

```bash
curl -X POST http://localhost:3000/api/auth/logout \
  -b cookies.txt -c cookies.txt
```

</details>

---

## 🔒 Security Features

| Feature                 | Implementation                                              | Status |
| ----------------------- | ----------------------------------------------------------- | :----: |
| Password Hashing        | `bcryptjs` with 10 salt rounds                            |   ✅   |
| JWT Signing             | `jsonwebtoken` with secret from env                       |   ✅   |
| Cookie Token Storage    | `res.cookie('token', jwt)` — avoids XSS via localStorage |   ✅   |
| Role Authorization      | Middleware-level role checks before controller runs         |   ✅   |
| Secret Externalization  | All keys in`.env`, never hardcoded                        |   ✅   |
| No Plain Text Passwords | Hash comparison via`bcrypt.compare()`                     |   ✅   |
| File Type Routing       | ImageKit folder separation by file extension                |   ✅   |
| Memory-based Upload     | Multer`memoryStorage()` — no temp files on disk          |   ✅   |

> 🔧 **Recommended additions for production:** Add `httpOnly: true, secure: true, sameSite: 'strict'` flags to `res.cookie()`, add rate limiting via `express-rate-limit`, and add CORS config via `cors` package.

---

## 🚀 Deployment Guide

<details>
<summary><b>🌐 Deploy to Render (Recommended — Free Tier)</b></summary>

1. Push your code to GitHub
2. Go to [render.com](https://render.com) → New → **Web Service**
3. Connect your GitHub repo
4. Configure:
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add environment variables in the Render dashboard:
   - `DATABASE_URL` → your MongoDB Atlas URI
   - `JWT_SECRET` → your secret
   - `IMAGEKIT_PRIVATE_KEY` → your key
6. Deploy 🎉

</details>

<details>
<summary><b>🚂 Deploy to Railway</b></summary>

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Init & deploy
railway init
railway up
```

Then add environment variables in the Railway dashboard.

</details>

<details>
<summary><b>🍃 MongoDB Atlas Setup</b></summary>

1. Create a free cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Add a database user with read/write permissions
3. Whitelist your server IP (or `0.0.0.0/0` for all IPs)
4. Copy the connection string and set it as `DATABASE_URL`:
   ```
   mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/spotify-clone?retryWrites=true&w=majority
   ```

</details>

---

## 💡 Why This Project?

This project was built to demonstrate and sharpen real-world backend skills that go beyond simple tutorials:

- **Cookie-based auth** is more secure than storing JWTs in localStorage but requires understanding of how cookies, CORS, and `credentials: include` work together
- **Role-based access control** at the middleware layer — not the controller — keeps business logic clean and DRY
- **Cloud storage integration** with ImageKit shows how production apps handle media: stream to memory, upload to CDN, store only the URL
- **Mongoose population** replicates relational JOIN-like behaviour in MongoDB, a pattern essential for real apps with linked data
- The **MVC pattern** keeps the codebase maintainable and shows how to reason about separating concerns in an Express app

---

## 🔮 Future Improvements

| Priority | Feature                                                                                 |
| :-------: | --------------------------------------------------------------------------------------- |
|  🔴 High  | Add`httpOnly`, `secure`, and `sameSite` flags to JWT cookie                       |
|  🔴 High  | Wrap controllers in`try/catch` — currently unhandled rejections can crash the server |
| 🟠 Medium | Add`express-rate-limit` on auth routes to prevent brute-force                         |
| 🟠 Medium | Add`cors` package and configure allowed origins                                       |
| 🟠 Medium | Remove the`.limit(2)` cap on `getAllMusic()`                                        |
| 🟡 Normal | Add pagination (`page` + `limit` query params) to music and album routes            |
| 🟡 Normal | Add song duration, cover art upload, and genre fields to the Music model                |
| 🟡 Normal | Add a`PATCH /api/music/:id` and `DELETE /api/music/:id` for artists                 |
|  🟢 Low  | Add search endpoint —`GET /api/music/search?q=`                                      |
|  🟢 Low  | Add a playlist model with user ownership                                                |
|  🟢 Low  | Write unit tests with Jest + Supertest                                                  |

---

## 🤝 Contributing

Contributions are what make open source great. Any contribution you make is **greatly appreciated**!

```bash
# Step 1: Fork the project on GitHub

# Step 2: Clone your fork
git clone https://github.com/YOUR_USERNAME/Spotify-Clone-Backend.git
cd Spotify-Clone-Backend

# Step 3: Create a feature branch
git checkout -b feature/AmazingFeature

# Step 4: Make your changes and commit
git add .
git commit -m "feat: add AmazingFeature"

# Step 5: Push to your fork
git push origin feature/AmazingFeature

# Step 6: Open a Pull Request on GitHub 🎉
```

**Commit message convention:**
Use prefixes like `feat:`, `fix:`, `docs:`, `refactor:`, `test:` for clear history.

---

## 👨‍💻 Author

<div align="center">

---

## ⭐ Support

If this project helped you learn something or saved you time, consider giving it a star — it means a lot and helps others discover it!

<div align="center">
