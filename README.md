# Matches App — Frontend

This repository contains the frontend client for the Matches app — a simple app to browse live sports matches, search and filter by sport/team, and save favorites. Built with React and Vite.

---

##  Screen Recording Vedio

https://drive.google.com/file/d/1rIQBnmmbVs5Bx4FHSHHjFEW810OKelR0/view?usp=sharing

##  Frontend Live:

https://matches-frontend-nu.vercel.app/

## Backend Repo(Please see backend repository for backend code)

Repo Link : https://github.com/sudheeshna86/MatchesBackend.git 
Backend Live : https://matchesbackend.onrender.com
---
---

##  Features

- User Authentication (Login / Register) using JWT
- Browse live matches with filtering by sport and search by team
- Add / Remove favorites
- Persistent auth token in `localStorage` and React Context
- Responsive UI using Bootstrap / React-Bootstrap

---

##  Tech Stack

- React (Vite)
- React Router
- Axios for HTTP requests
- React Context for auth
- React-Bootstrap + Bootstrap for UI

---

##  Folder Structure

```
MatchesFrontend/
│── public/
│── src/
│   ├── api/          # Axios wrappers: apiClient, auth, match, favorite
│   ├── components/   # Reusable UI components (MatchCard, Navbar)
│   ├── context/      # Auth context
│   ├── pages/        # Pages: Matches, Favorites, Login, Register
│   ├── App.jsx       # Main app component
│   └── main.jsx      # App entry
│── package.json
```

---

##  Local Setup

1. Install dependencies

```bash
git clone https://github.com/sudheeshna86/MatchesFrontend
cd MatchesFrontend
npm install
```

2. Update API base URL 

- The default base URL is configured at `src/api/apiClient.js` (currently points to `https://matchesbackend.onrender.com`).
- To use a local backend, change `baseURL` to `http://localhost:5000` or update the code to read `import.meta.env.VITE_API_URL`.

3. Start dev server

```bash
npm run dev
```

App runs on `http://localhost:5173` (Vite default).

---

## 🧪 Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run lint` — run ESLint

---

---

## 🧩 API Endpoints used (frontend)

- `POST /auth/register` — register user
- `POST /auth/login` — login user (returns token)
- `GET /matches` — list matches (optional query: `sport`, `search`)
- `GET /favorites` — get user favorites (auth required)
- `POST /favorites/:matchId` — add favorite (auth required)
- `DELETE /favorites/:matchId` — remove favorite (auth required)

---

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/5151c0b6-9d7c-4097-8960-281bf53aaf2a" />

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/225cee44-56fd-484c-af9f-efa24a10877a" />

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/202b8a39-0693-4b02-b61f-134391832eff" />








