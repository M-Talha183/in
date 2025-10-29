require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db.js');
const app = express();
const authRoutes = require('./routes/authRoutes.js')

// Middleware



app.use(
    cors({
        origin: process.env.FRONTEND_URL || '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],

    })
)

app.use(express.json());

// connect to database
connectDB();

app.use('/api/v1/auth', authRoutes);

const PORT = process.env.PORT || 5000;

// server uploads folder as static
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});