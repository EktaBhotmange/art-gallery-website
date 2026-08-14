# 🎨 Art Gallary — Full-Stack Art Marketplace

A modern full-stack platform for showcasing artwork, handling custom orders, and managing customer inquiries through an admin dashboard.

## 🛠️ Tech Stack

**Frontend:** React.js, JavaScript, Tailwind CSS, React Router, Axios
**Backend:** Node.js, Express.js
**Database:** MongoDB, Mongoose
**Authentication:** JWT, bcryptjs

## ✨ Features

* 🎨 Dynamic artwork gallery with category-based collections
* 🛒 Custom artwork/order request system
* 📩 Contact form with MongoDB integration
* 🔐 JWT-based admin authentication
* 🛠️ Protected admin dashboard
* ➕ Add and manage artwork through the admin panel
* 📋 View customer inquiries from the dashboard
* 📱 Responsive and modern UI

## 📂 Project Structure

```text
Artify/
├── client/          # React frontend
│   ├── components/
│   ├── pages/
│   └── App.jsx
│
├── server/          # Node + Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
```

## ⚙️ Run Locally

### Clone

```bash
git clone <your-repository-url>
cd Artify
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

### Environment Variables

Create `.env` inside `server/`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## 🔗 API Routes

```text
POST   /api/auth/login
GET    /api/artworks
POST   /api/artworks
DELETE /api/artworks/:id
GET    /api/contacts
POST   /api/contacts
```

## 🚀 Future Improvements

* Cloudinary image uploads
* Edit artwork functionality
* Custom order management
* Search and filtering
* Online payments
* Production deployment

---

**Built with ❤️ using the MERN Stack**

## 🌱 My MERN Journey

This project has been an important part of my journey with the **MERN stack**. I started with the basics of React and gradually learned how to connect the frontend with **Node.js, Express.js, and MongoDB**.

While building Artify, I learned how real-world applications handle **REST APIs, database operations, authentication, protected routes, forms, and frontend-backend communication**.

This project helped me move beyond simply learning technologies and understand how different parts of a full-stack application work together. 🚀

> **Started with React. Built with MERN. Still learning, still building.**
