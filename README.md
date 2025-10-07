# Invoice-roi-simulator

# Tech Stack 
- React
- MongoDB
- Node.js
- Express.js

# Features
- User Authentication
- Quick Simulation
- Scenario Management
- Report Generation
- Favourable Output Logic

# Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/nandhakishore23/invoice-roi-simulator.git
    ```
2. Navigate to the project directory:
   ```bash
   cd invoice-roi-simulator
   ```
    
3. Install dependencies for both client and server:
   ```bash
    cd client
    npm install
    cd .. 
    cd server
    npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the `server` directory.
   - Add the following variables:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```
5. Start the development server:
   ```bash
   cd server
   npm run dev
   ```
    In another terminal, start the React client:
    ```bash
    cd client
    npm start
   ```  
6. Open your browser and navigate to `http://localhost:3000` to access the application.


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
