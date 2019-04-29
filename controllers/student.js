
const moment = require('moment');
const Student = require('../models/Student');


exports.studentList = function(req, res, next){
  Student.find({}, function(err, students){
    res.send({students: students.toJSON()});
  })
}
