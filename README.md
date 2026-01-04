# 🧶  Crochet Store

A small, mobile-first storefront for a handmade crochet business.  
Built to feel soft, cozy, and personal — not like a generic e-commerce site.

Products are displayed publicly, and orders are handled via **Instagram DMs**, keeping things simple and human.

---

## ✨ What this project is

- A **real, deployable storefront**, not a mockup
- Designed **mobile-first** (phones are the primary target)
- Clean admin flow for the owner to manage products
- No user accounts, no carts, no checkout complexity

This is intentional — the goal is to support a handmade business, not replace it.

---

## 🧠 How ordering works

Visitors:
- Browse products
- Tap **Buy**
- Instagram opens directly with a pre-filled DM
- Conversation and payment happen there

This keeps trust high and friction low.

---

## 🔐 Admin access

There is **no public signup**.

Only the store owner can:
- Log in via Firebase Auth
- Add new products
- Mark products as sold out
- Delete products

Admin access is protected both in the UI and in Firestore rules.

---

## 🛠 Tech stack

- React + Vite
- Tailwind CSS v4 (custom theme, single index.css)
- Firebase
  - Authentication (email/password)
  - Firestore (product data)
- Cloudinary (image uploads, free tier)
- pnpm (package manager)

---

## 📁 Project structure (important parts)

src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductGrid.jsx
│   ├── ProductCard.jsx
│   ├── AddProductForm.jsx
│   └── Footer.jsx
│
├── pages/
│   └── AdminAuth.jsx
│
├── firebase/
│   └── firebase.js
│
├── hooks/
│   ├── useAdmin.js
│   └── useScrollDepth.js
│
├── utils/
│   └── uploadImage.js
│
├── App.jsx
├── main.jsx
└── index.css

All styling lives in **index.css** by design.

---

## 🚀 Running locally

pnpm install  
pnpm dev

The app runs at:
http://localhost:5173

---

## 🔑 Environment variables

Create a .env file in the project root:

VITE_FIREBASE_API_KEY=...  
VITE_FIREBASE_AUTH_DOMAIN=...  
VITE_FIREBASE_PROJECT_ID=...  
VITE_FIREBASE_APP_ID=...

VITE_CLOUDINARY_CLOUD_NAME=...  
VITE_CLOUDINARY_UPLOAD_PRESET=...

Never commit this file.

---

## 🧪 Admin login

Admin login lives at:

/__admin

This route is intentionally hidden from the UI.

---

## 🎨 Design philosophy

- Soft pastel colors
- Glassmorphism (but not heavy)
- Gentle motion only
- No distracting animations
- Feels closer to a native mobile app than a website

If something feels loud or aggressive, it probably doesn’t belong here.

---

## 📦 Deployment

The app is ready for:
- Firebase Hosting
- Vercel

Build command:
pnpm build

Output:
dist/

---
Built with care for small businesses and real people.

---

## 📝 Notes

This project intentionally avoids:
- carts
- payments
- user accounts
- over-engineering

Simplicity is a feature here.
