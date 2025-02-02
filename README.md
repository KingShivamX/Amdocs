# Adaptive Learning System

## Overview
The Adaptive Learning System is an AI-driven platform that provides **personalized learning plans** based on users' skills, interests, and learning preferences. It leverages **Machine Learning (K-Means Clustering)** to classify users into different learning groups and dynamically adjusts recommendations as they progress.

## Features
- **User Authentication**: Secure login and registration system.
- **Skill Assessment Test**: Users answer questions to determine their learning preferences and skill level.
- **AI-Powered Clustering**: K-Means model assigns users to learning groups.
- **Personalized Learning Plan**: AI-generated recommendations for courses, certifications, and projects.
- **Progress Tracking**: Users receive updates and adapt their plans based on performance.
- **React Frontend**: Intuitive UI for user interaction.
- **Node.js Backend**: Handles authentication, API endpoints, and ML model integration.
- **MongoDB Database**: Stores user data, progress, and recommendations.

---

## Tech Stack
### **Frontend (React.js)**
- React.js with Tailwind CSS for UI
- Redux (if needed) for state management
- React Router for navigation
- API calls to backend for user authentication and ML results

### **Backend (Node.js + Express.js)**
- Express.js for API development
- JWT-based authentication for security
- Integration with the ML model for clustering and recommendations
- Database interaction using Mongoose (MongoDB)

### **Machine Learning Model (Python + scikit-learn)**
- Uses **K-Means Clustering** to group users based on:
  - Skills
  - Interests
  - Time Commitment
  - Experience Level
- Saves user cluster assignments and recommended learning paths
- Flask API to communicate with the backend

### **Database (MongoDB)**
- Stores user data, test results, and personalized plans
- Tracks progress and feedback for adaptive learning

---

## Project Flow
### **1. User Registration & Login**
- Users create an account with email/password authentication.
- JWT tokens are used for session management.

### **2. User Takes an Assessment Test**
- The test includes:
  - Questions about prior knowledge and experience.
  - Preferred learning areas (AI/ML, Web Development, etc.).
  - Time commitment per week.
- Responses are sent to the backend.

### **3. ML Model Clusters User**
- The backend sends test responses to the Python-based ML model.
- The K-Means algorithm assigns the user to a **learning cluster**.
- The backend stores the cluster ID in MongoDB.

### **4. Generating a Personalized Learning Plan**
- Based on the assigned cluster, a **customized roadmap** is generated.
- The plan includes:
  - Recommended courses & certifications
  - Learning schedule
  - Hands-on project suggestions
- The plan is sent to the frontend for display.

### **5. User Dashboard & Progress Tracking**
- The user sees their learning roadmap on the dashboard.
- The system adapts based on:
  - User progress
  - Quiz results
  - Feedback on recommendations
---

