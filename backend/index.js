const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const academicRoutes = require('./routes/academicRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Routes
const authController = require('./controllers/authController');
console.log('Registering routes directly in index.js...');
app.use('/api/academic', academicRoutes);

// Auth routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Student Management System API is running');
});

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/student_mgmt')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error (check if MongoDB is running):', err.message);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
