const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
   //  rollNo: { type: String, required: true },
   //  dob: { type: Date, required: true },
   //  course: { type: String, required: true },
   //  phone: { type: String },
   //  address: { type: String },
});

const StudentModel = mongoose.model("students", StudentSchema);

module.exports = StudentModel;
