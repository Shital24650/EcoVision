🌱 EcoVision – AI Sustainability Coach
Live Demo: [Insert your deployed Vercel/Netlify URL]
GitHub Repo: [Insert repo link]

Table of Contents
Overview

Problem Statement

Solution

Key Features

Tech Stack

Screenshots

Setup & Installation

Impact

Contributing

License

Overview
EcoVision is an AI-powered sustainability coach designed to guide users toward eco-friendly living. The app provides personalized advice, tracks environmental impact, and educates users about reducing their carbon footprint — all in a simple, interactive chat interface.

This MVP was built for the Syrotech MVP Hackathon 2025, aiming to drive measurable social impact in sustainability.

Problem Statement
Every day, individuals struggle to make environmentally conscious choices due to:

Lack of awareness about carbon footprints

Overwhelming or conflicting sustainability advice

Difficulty tracking personal environmental impact

These challenges prevent actionable change and reduce the effectiveness of global sustainability efforts.

Solution
EcoVision empowers users with:

AI-powered chat guidance — Ask questions about eco-friendly habits and receive real-time, personalized advice.

Carbon footprint tracking — Track activities and their environmental impact.

Education & insights — Learn actionable steps to reduce carbon emissions.

Gamified progress — Small achievements to encourage consistent eco-friendly behavior.

By combining AI guidance with actionable insights, EcoVision simplifies sustainability for everyone.

Key Features
Feature	Description
AI Chat Coach	Users can ask questions about eco-friendly practices and get instant responses powered by Groq LLM.
Multiple Pages	Detect, Coach, Carbon, Tracker pages to explore and act on sustainability insights.
Carbon Tracking	Track and visualize personal environmental impact over time.
Interactive UI	Responsive and visually appealing interface built with Tailwind CSS.
Free & Accessible	Fully deployable on the web without installation.

Tech Stack
Frontend: HTML, Tailwind CSS, JavaScript

Backend: Node.js, Serverless API (Vercel)

AI Integration: Groq LLM API for personalized chat responses

Deployment: Vercel (serverless backend + static frontend)

Screenshots

Interactive AI chat interface helping users with eco-friendly guidance.


Track and visualize your carbon footprint over time.

Setup & Installation
Clone the repo:

bash
Copy code
git clone https://github.com/<username>/EcoVision.git
cd EcoVision
Install dependencies:

bash
Copy code
npm install
Add environment variables:

Create a .env file with:

ini
Copy code
GROQ_API_KEY=<your-groq-api-key>
Run locally:

bash
Copy code
npm start
Open browser → http://localhost:5000/coach

Impact
EcoVision addresses the global sustainability crisis at an individual level:

Educates users about carbon reduction strategies

Encourages behavioral change with interactive guidance

Provides data-driven insights on personal environmental impact

This MVP makes eco-conscious living accessible, fun, and actionable for all users, regardless of expertise.

Contributing
Contributions are welcome! Please:

Fork the repo

Create a branch for your feature (git checkout -b feature-name)

Commit changes (git commit -m "Add new feature")

Push to the branch (git push origin feature-name)

Open a Pull Request

License
This project is licensed under the MIT License.
