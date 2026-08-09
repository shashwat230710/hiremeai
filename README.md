# 🚀 HireMeAI - Next-Gen AI Career & Resume Intelligence Suite

[![CI/CD Pipeline](https://github.com/shashwat230710/hiremeai/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/shashwat230710/hiremeai/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688.svg)](https://fastapi.tiangolo.com/)
[![React + Vite](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB.svg)](https://vitejs.dev/)

**HireMeAI** is an enterprise-grade AI Career & Resume Intelligence platform designed to empower recruiters and job seekers. It features resume-grounded AI candidate interviews, automated ATS compatibility scoring, AI cover letter generation, STAR mock interview evaluation, and application analytics tracking.

---

## ✨ Key Features

### 1. 💬 AI Candidate Interview Room
- **Strictly Grounded Answers:** Recruiters can ask anything in natural language. Answers are derived only from parsed resume data.
- **Smart Fallback QA Engine:** Seamlessly answers complex questions regarding **DSA, competitive programming, skills, projects, education, and achievements** even when API keys are offline.

### 2. 🎯 ATS Intelligence Engine & Job Matcher
- **Overall ATS Score & Section Health:** Evaluates contact details, technical skills, experience metrics, education, and format structure.
- **Job Description Alignment:** Paste any job posting to calculate match %, identify missing target keywords, and receive actionable optimization tips.

### 3. ✉️ AI Cover Letter Studio
- **Multi-Tone Generation:** Craft personalized cover letters in 5 distinct tones (*Enthusiastic, Formal, Creative, Executive, Casual*).
- **1-Click Copy & Export:** Editable output with candidate metrics pre-infused.

### 4. 🎤 Mock Interview Room & STAR Evaluator
- **Categorized Question Sets:** Practice Behavioral STAR questions, Technical & DSA problem-solving, and System Architecture.
- **Instant AI Scoring & Feedback:** Evaluates answers against Situation, Task, Action, Result criteria, length metrics, and provides concrete improvement items.

### 5. 📈 Analytics & Job Tracker Dashboard
- **Impression Metrics:** Track resume views, practice streaks, and average ATS scores.
- **Interactive Job Application Tracker:** Manage applications across stages (*Applied, Screening, Interview Scheduled, Offer Received*).

---

## 🛠 Tech Stack

- **Frontend:** React 19, Vite, TanStack Router, TanStack Query, TailwindCSS, TypeScript.
- **Backend:** Python 3.11, FastAPI, Uvicorn, Pydantic v2, PyPDF, Groq LLM API.
- **DevOps & CI/CD:** GitHub Actions.

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js:** v18+ 
- **Python:** v3.11+

### 1. Run Backend (FastAPI)
```powershell
cd backend

# Install dependencies
pip install fastapi uvicorn groq python-dotenv pypdf pydantic

# Start server
uvicorn main:app --reload --port 8000
```
> 📍 Backend URL: `http://127.0.0.1:8000`

### 2. Run Frontend (Vite + React)
```powershell
cd frontend

# Install packages
npm install

# Start frontend dev server
npm run dev
```
> 📍 Frontend URL: `http://localhost:5173`

---

## 📄 License
Distributed under the MIT License.
