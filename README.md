
<div align="center">

---

## ✨ Features

|      | Feature                             | Description                                                              |
| ---- | ----------------------------------- | ------------------------------------------------------------------------ |
| 🔐   | **JWT Authentication**        | Secure register, login & logout via HTTP-only cookies                    |
| 🎭   | **Role-Based Access Control** | Distinct`user` and `artist` roles with protected routes              |
| 🎵   | **Music Upload**              | Artists upload MP3 files directly to ImageKit cloud                      |
| 📀   | **Album Management**          | Artists create albums and group multiple tracks                          |
| 🔍   | **Browse Content**            | Authenticated users fetch all songs and albums with populated references |
| 🔒   | **Secure Passwords**          | Passwords hashed with`bcryptjs` (10 salt rounds)                       |
| ☁️ | **Cloud Storage**             | Audio files stored and served via ImageKit CDN                           |

---

## 🛠️ Tech Stack

<table>
  <tr>
    <td><b>⚙️ Runtime</b></td>
    <td>
      <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/>
    </td>
  </tr>
  <tr>
    <td><b>🌐 Framework</b></td>
    <td>
      <img src="https://img.shields.io/badge/Express_5-000000?style=flat-square&logo=express&logoColor=white"/>
    </td>
  </tr>
  <tr>
    <td><b>🗄️ Database</b></td>
    <td>
      <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white"/>
      <img src="https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white"/>
    </td>
  </tr>
  <tr>
    <td><b>🔑 Auth</b></td>
    <td>
      <img src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white"/>
      <img src="https://img.shields.io/badge/bcryptjs-003A70?style=flat-square&logo=letsencrypt&logoColor=white"/>
    </td>
  </tr>
  <tr>
    <td><b>☁️ Storage</b></td>
    <td>
      <img src="https://img.shields.io/badge/ImageKit-009EF7?style=flat-square&logo=imagekit&logoColor=white"/>
      <img src="https://img.shields.io/badge/Multer-FF6C37?style=flat-square&logo=npm&logoColor=white"/>
    </td>
  </tr>
  <tr>
    <td><b>🔧 Dev Tools</b></td>
    <td>
      <img src="https://img.shields.io/badge/Nodemon-76D04B?style=flat-square&logo=nodemon&logoColor=white"/>
      <img src="https://img.shields.io/badge/dotenv-ECD53F?style=flat-square&logo=dotenv&logoColor=black"/>
    </td>
  </tr>
</table>

---

## 📁 Project Structure

```
Spotify-Clone-Backend/
│
├── 📄 server.js                   # Entry point  :  starts server & DB
├── 📦 package.json
├── 🔒 .env                        # Environment variables (git-ignored)
│
└── 📂 src/
    ├── 📄 app.js                  # Express app, middleware & routes
    │
    ├── 📂 db/
    │   └── db.js                  # MongoDB connection via Mongoose
    │
    ├── 📂 routes/
    │   ├── auth.routes.js         # /api/auth  →  register, login, logout
    │   └── music.routes.js        # /api/music →  upload, album, browse
    │
    ├── 📂 controllers/
    │   ├── auth.controller.js     # Auth business logic
    │   └── music.controller.js    # Music & album business logic
    │
    ├── 📂 models/
    │   ├── user.model.js          # User schema (username, email, role)
    │   ├── music.model.js         # Music schema (uri, title, artist ref)
    │   └── album.model.js         # Album schema (title, musics[], artist ref)
    │
    ├── 📂 middlewares/
    │   └── auth.middleware.js     # authUser & authArtist JWT guards
    │
    └── 📂 services/
        └── storage.service.js     # ImageKit upload helper
```

---

## ⚙️ Getting Started

### Prerequisites

> Make sure you have the following installed/configured before running the project.

- ![Node.js](https://img.shields.io/badge/Node.js_v18+-339933?style=flat-square&logo=nodedotjs&logoColor=white)  :  [Download](https://nodejs.org/)
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)  :  Local instance or [Atlas](https://www.mongodb.com/atlas)
- ![ImageKit](https://img.shields.io/badge/ImageKit_Account-009EF7?style=flat-square&logo=imagekit&logoColor=white)  :  [Sign up free](https://imagekit.io/)

---

### 🚀 Installation

```bash
# 1️⃣  Clone the repository
git clone https://github.com/mshahnawaz1202/Spotify-Clone-Backend.git
cd Spotify-Clone-Backend

# 2️⃣  Install dependencies
npm install

# 3️⃣  Set up environment variables
cp .env.example .env
# Then open .env and fill in your values (see below)
```

---

### 🔑 Environment Variables

Create a `.env` file at the project root:

```env
DATABASE_URL=mongodb://localhost:27017/spotify-clone
JWT_SECRET=your_super_secret_jwt_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

| Variable                 | Required | Description                                                             |
| ------------------------ | :------: | ----------------------------------------------------------------------- |
| `DATABASE_URL`         |    ✅    | MongoDB connection URI                                                  |
| `JWT_SECRET`           |    ✅    | Secret used to sign/verify JWT tokens                                   |
| `IMAGEKIT_PRIVATE_KEY` |    ✅    | Private key from your[ImageKit dashboard](https://imagekit.io/dashboard) |

---

### ▶️ Run the Server

```bash
# 🔁 Development  :  with auto-reload
npm run dev

# 🚀 Production
npm start
```

> Server starts at **`http://localhost:3000`**

---

## 📡 API Reference

### 🔐 Auth  :  `/api/auth`

|  Method  | Endpoint               | Description                       | Auth Required |
| :------: | ---------------------- | --------------------------------- | :-----------: |
| `POST` | `/api/auth/register` | Register a new user or artist     |      ❌      |
| `POST` | `/api/auth/login`    | Login and set auth cookie         |      ❌      |
| `POST` | `/api/auth/logout`   | Clear auth cookie and end session |      ❌      |

<details>
<summary><b>📝 Register / Login — Request Body</b></summary>

```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword",
  "role": "user"
}
```

> `role` accepts `"user"` *(default)* or `"artist"`

</details>

<details>
<summary><b>✅ Success Response</b></summary>

```json
{
  "message": "User Created Successfully!",
  "user": {
    "id": "64f3a...",
    "username": "johndoe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

</details>

---

### 🎵 Music  :  `/api/music`

|  Method  | Endpoint              | Description            | Auth Required |
| :------: | --------------------- | ---------------------- | :------------: |
| `POST` | `/api/music/upload` | Upload a music track   | 🎤 Artist only |
| `POST` | `/api/music/album`  | Create a new album     | 🎤 Artist only |
| `GET` | `/api/music/`       | Fetch all music tracks |  👤 Any user  |
| `GET` | `/api/music/album`  | Fetch all albums       |  👤 Any user  |

<details>
<summary><b>🎵 Upload Music — multipart/form-data</b></summary>

```
POST /api/music/upload
Content-Type: multipart/form-data

title  →  Song title (string)
music  →  Audio file (.mp3)
```

</details>

<details>
<summary><b>📀 Create Album — Request Body</b></summary>

```json
{
  "title": "My First Album",
  "musicIds": ["64f3a...", "64f3b..."]
}
```

</details>

---

## 🔐 Authentication Flow

```
┌──────────┐        POST /api/auth/register or /login         ┌──────────────┐
│  Client  │ ─────────────────────────────────────────────▶   │    Server    │
│          │   ◀─────────────── Set-Cookie: token=<JWT> ────   │              │
└──────────┘                                                   └──────────────┘
     │
     │  Subsequent requests automatically include the cookie
     │
     ▼
┌─────────────────┐   Validates JWT   ┌──────────────────────┐
│  Auth Middleware │ ────────────────▶ │  authUser / authArtist│
│  (cookie token) │                   │  role check + next()  │
└─────────────────┘                   └──────────────────────┘
```

- `authUser`  :  grants access to both `user` and `artist` roles
- `authArtist`  :  restricted to `artist` role only (upload/album routes)

---

## 🗃️ Data Models

<details>
<summary><b>👤 User Model</b></summary>

```js
{
  username : String   :  unique, required
  email    : String   :  unique, required
  password : String   :  bcrypt hashed, required
  role     : String   :  enum ["user", "artist"], default "user"
}
```

</details>

<details>
<summary><b>🎵 Music Model</b></summary>

```js
{
  uri    : String     :  ImageKit CDN URL, required
  title  : String     :  required
  artist : ObjectId   :  ref: User, required
}
```

</details>

<details>
<summary><b>📀 Album Model</b></summary>

```js
{
  title  : String      :  required
  musics : [ObjectId]  :  ref: Music
  artist : ObjectId    :  ref: User, required
}
```

</details>

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

```bash
# 1. Fork the project
# 2. Create your feature branch
git checkout -b feature/AmazingFeature

# 3. Commit your changes
git commit -m 'Add some AmazingFeature'

# 4. Push to the branch
git push origin feature/AmazingFeature

# 5. Open a Pull Request 🎉
```

---

<div align="center">
