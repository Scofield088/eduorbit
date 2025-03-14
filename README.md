﻿# EduOrbit

EduOrbit is a dynamic online learning platform that facilitates **collaborative and personalized learning** for students. It provides tools for **resource sharing, AI-driven chat assistance, live video conferencing, and interactive group rooms** to enhance engagement in education.

## Features

- **Collaborative & Personalized Learning**: Enables students to interact seamlessly, ensuring a more engaging learning experience.
- **Resource Sharing**: Users can upload, share, and access study materials.
- **AI-Driven Chat Assistance**: Provides intelligent guidance and answers to academic queries.
- **Live Video Conferencing**: Conducts virtual classes, discussions, and group study sessions.
- **Interactive Group Rooms**: Allows students to collaborate on projects and discussions in real time.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Deployment**: Vercel / Heroku

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Scofield088/eduorbit.git
   ```

2. Navigate to the project directory:
   ```sh
   cd eduOrbit
   ```

3. Install dependencies for both frontend and backend:
   ```sh
   cd orb1
   npm install
   cd ../backend
   npm install
   ```

4. Set up environment variables (`.env` file in `backend` directory):
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

5. Start the backend server:
   ```sh
   npm start
   ```

6. Start the frontend development server:
   ```sh
   npm start
   ```

## Usage

- Sign up or log in to access EduOrbit.
- Upload and download resources.
- Interact with AI chat for academic assistance.
- Join live video conferencing sessions.
- Collaborate in group discussion rooms.