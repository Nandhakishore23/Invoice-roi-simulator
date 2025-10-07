// import dotenv from "dotenv";
// dotenv.config(); // Must be the **first line**

// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import simulationRoutes from "./routes/simulationRoutes.js";

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.log("❌ DB error:", err));

// // API Routes
// app.use("/api/simulations", simulationRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const simulateRoutes = require('./routes/simulate');
const scenarioRoutes = require('./routes/scenarios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/simulate', simulateRoutes);
app.use('/scenarios', scenarioRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {    
    res.send('API is running...');
});

app.use('/simulate', simulateRoutes);
app.use('/scenarios', scenarioRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
