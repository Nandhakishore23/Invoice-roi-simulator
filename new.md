# Invoicing ROI Simulator — Simple Documentation

## 🧩 Overview

A simple MERN Stack project that simulates the Return on Investment (ROI) when switching from manual to automated invoicing.

Users can enter basic business details, view live ROI calculations, and manage scenarios.

---

## ⚙️ Tech Stack

* **Frontend:** React (Create React App)
* **Backend:** Node.js + Express.js
* **Database:** MongoDB

---

## 📂 Project Structure

```
Invoicing-ROI-Simulator/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── simulationRoutes.js
│   ├── controllers/
│   │   └── simulationController.js
│   └── models/
│       └── Scenario.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SimulationForm.js
│   │   │   └── ResultsDisplay.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── api.js
│   └── package.json
│
└── README.md
```

---

## 🚀 How to Run

### 1️⃣ Clone the Project

```bash
git clone https://github.com/yourusername/invoicing-roi-simulator.git
cd invoicing-roi-simulator
```

### 2️⃣ Install Dependencies

Backend:

```bash
cd backend
npm install
```

Frontend:

```bash
cd ../frontend
npm install
```

### 3️⃣ Start the Project

Run backend:

```bash
cd backend
node server.js
```

Run frontend:

```bash
cd ../frontend
npm start
```

The app runs at: **[http://localhost:3000](http://localhost:3000)**

---

## 🧮 Key Features

* Simple ROI Simulation based on user inputs.
* Scenario Save, Load, and Delete.
* REST API for backend communication.
* Email-gated report generation (optional).

---

## 📊 Example Input

```
Invoices per month: 2000
Staff: 3
Hourly wage: $30
Error rate: 0.5%
Error cost: $100
Time horizon: 36 months
```

**Output:**

* Monthly Savings: $8,000
* Payback: 6.3 months
* ROI: 400%

---

