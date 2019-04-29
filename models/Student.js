const mongoose = require('mongoose');

const schemaOptions = {
  timestamps: true
};

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true},
    age: Number,
    grade: Number
}, schemaOptions);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
