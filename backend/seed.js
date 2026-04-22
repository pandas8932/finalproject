require('dotenv').config();
const mongoose = require('mongoose');

const User = require('./models/user');
const { Attendance, Material, PYQ } = require('./models/academic');

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB for seeding...');

        // Clear existing test data
        await User.deleteMany({ email: { $regex: '@test.com$' } });
        await Material.deleteMany({});
        await PYQ.deleteMany({});
        await Attendance.deleteMany({});

        console.log('Creating dummy students...');
        const students = await User.insertMany([
            { name: 'John Doe', email: 'john@test.com', role: 'student', branch: 'Computer Science', year: 2, password: 'password123' },
            { name: 'Jane Smith', email: 'jane@test.com', role: 'student', branch: 'Information Tech', year: 3, password: 'password123' },
            { name: 'Alice Walker', email: 'alice@test.com', role: 'student', branch: 'Electronics', year: 1, password: 'password123' }
        ]);

        console.log('Creating subject materials...');
        await Material.insertMany([
            { title: 'Data Structures Notes', subject: 'Data Structures', unit: 1, fileUrl: 'https://example.com/ds_notes.pdf', uploadedBy: students[0]._id },
            { title: 'Operating Systems Slides', subject: 'Operating Systems', unit: 2, fileUrl: 'https://example.com/os_slides.pdf', uploadedBy: students[1]._id }
        ]);

        console.log('Creating PYQs...');
        await PYQ.insertMany([
            { year: 2023, branch: 'Computer Science', subject: 'Data Structures', fileUrl: 'https://example.com/pyq2023.pdf' },
            { year: 2022, branch: 'Computer Science', subject: 'Data Structures', fileUrl: 'https://example.com/pyq2022.pdf' }
        ]);

        console.log('Marking some attendance...');
        await Attendance.insertMany([
            { studentId: students[0]._id, date: new Date(), status: 'Present', subject: 'Data Structures' },
            { studentId: students[1]._id, date: new Date(), status: 'Absent', subject: 'Operating Systems' },
            { studentId: students[2]._id, date: new Date(), status: 'Late', subject: 'Electronics Basics' }
        ]);

        console.log('Database seeded successfully!');
        process.exit(0);
    } catch (err) {
        console.error('Seeding error:', err);
        process.exit(1);
    }
};

seedDB();
