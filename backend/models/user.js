const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['student', 'faculty', 'admin'], default: 'student' },
    branch: { type: String },
    year: { type: Number },
    password: { type: String, required: true } // Usually hashed
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
