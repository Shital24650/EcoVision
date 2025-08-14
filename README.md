# EcoVision — AI‑Powered Waste Detection & Eco Coach

> Syrotech MVP Hackathon 2025 submission — a privacy‑aware, sustainable lifestyle assistant that detects waste types, estimates carbon impact, and coaches users toward greener choices.

## ✨ Why EcoVision
Households and campuses generate a lot of waste, but guidance is fragmented. EcoVision gives instant answers:
1. **What is this waste?** (image or text)
2. **How should I dispose of it?** (local best practices)
3. **What’s the carbon impact?** (quick estimate + alternatives)
4. **How do I build better habits?** (coach + tracker)

---

## 🌟 Key Features
- **Waste Detection** — Upload a photo or describe an item; get a category with confidence and safe‑disposal tips.
- **Carbon Calculator** — Quick, transparent impact estimates with assumptions listed.
- **Eco Coach** — Bite‑sized nudges, streaks, and goals.
- **Tracker** — Log disposals, view weekly progress, export CSV.
- **Privacy‑First** — No images stored by default; local processing toggles where applicable.
- **Offline‑friendly UI** — Core UI loads with a service worker (optional PWA).

---

## 🏗️ Architecture
```

\[Browser]
├─ public/\* (HTML/CSS/JS)
└─ fetch('/api/analyze') —> \[Node/Express]
├─ src/api/analyze.js (routes)
├─ src/utils/advice.js (rules)
└─ External LLM/Vision API (optional)

````

- **Front‑end:** Vanilla HTML + Tailwind‑like utility classes (styles.css)
- **Back‑end:** Node.js + Express
- **Deploy:** Vercel (serverless) or Node runtime
- **CI/CD:** GitHub Actions (lint + tests)

---

## 🚀 Quick Start

### 1) Clone & Install
```bash
git clone https://github.com/<your-username>/EcoVision.git
cd EcoVision
npm install
````

### 2) Configure Environment

Copy `.env.example` to `.env` and fill values (leave empty to use local, non‑cloud mode):

```bash
cp .env.example .env
```

| Variable         | Description                                            |
| ---------------- | ------------------------------------------------------ |
| `PORT`           | Local server port (default 3000)                       |
| `VISION_API`     | `none` (local rules) or `cohere` or `openai` (example) |
| `VISION_API_KEY` | API key if using a provider                            |
| `REGION_HINT`    | e.g., `IN-MH` for local advice rules                   |

### 3) Run Dev

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4) Run Tests

```bash
npm test
```

### 5) Deploy to Vercel

```bash
npm i -g vercel
vercel
```

The included `vercel.json` sets build/runtime.

---

## 🧪 Demo Script (for judges)

1. Open **Waste Detection** → upload plastic bottle photo → see category + advice.
2. Switch to **Carbon Calc** → enter 2 kg mixed plastic → see estimate + alternatives.
3. **Eco Coach** → create a weekly “recycle plastics” goal → see streak bar.
4. **Tracker** → log items → export CSV.

### Judging Criteria Mapping

* **Impact:** Guides real behavior change with actionable local advice.
* **Innovation:** Blends image/text detection with coach + tracker + carbon metrics.
* **Feasibility:** Works without paid APIs; gracefully upgrades if keys present.
* **Polish:** Clear UX, tests, CI, privacy policy, and accessible UI.

---

## 🔒 Data & Privacy

* Images are processed in‑memory and not stored by default.
* No third‑party analytics by default.
* Toggle anonymized telemetry via `?telemetry=on` (off by default).

---

## ♿ Accessibility

* Semantic HTML, ARIA labels.
* Keyboard‑navigable controls, focus outlines.
* High‑contrast palette and alt text everywhere.

---

## 📄 License

MIT — see [LICENSE](LICENSE).

---

## 🙏 Acknowledgements

* Open‑source maintainers of Express, Vitest.
* Inspiration from city waste guidelines and sustainability NGOs.

```

## 🧑‍💻 package.json

```json
{
  "name": "ecovision",
  "version": "1.0.0",
  "description": "AI-powered waste detection, carbon calculator, eco coach, and tracker.",
  "type": "module",
  "scripts": {
    "dev": "node src/app.js",
    "start": "node src/app.js",
    "test": "vitest run",
    "lint": "eslint ."
  },
  "dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.19.2"
  },
  "devDependencies": {
    "eslint": "^9.9.0",
    "vitest": "^2.0.5",
    "supertest": "^7.0.0"
  }
}
```


