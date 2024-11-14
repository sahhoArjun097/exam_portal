const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const StudentModel = require('./model/students');

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/exam_portal");

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await StudentModel.findOne({ email });
    if (!user) {
        return res.json({
            status: "error",
            message: "User not found"
        });
    }
    if (user.password !== password) {
        return res.json({
            status: "error",
            message: "Incorrect password"
        });
    }
    res.json({
        status: "success",
        message: "Login successful",
        userData: {
            name: user.name,
            email: user.email,
            role: user.role
        }
    });
});

app.post("/users", async (req, res) => {
    try {
        let user = await StudentModel.create(req.body);
        return res.json(user);
    } catch (error) {
        return res.json(error);
    }
});
// Assuming you're using Express and a model named StudentModel

app.post("/students", async (req, res) => {
    try {
        const newStudent = await StudentModel.create(req.body);
        return res.json(newStudent);
    } catch (error) {
        return res.status(400).json({ error: "Failed to add student", details: error });
    }
});

  
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
