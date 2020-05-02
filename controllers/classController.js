const config = require("../config/database");
const User = require("../models/user");

module.exports = {
  createStudent: function (req, res) {
    let newStudent = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      isStudent: req.body.isStudent,
      student: { attendence: [], grades: [] },
    });

    User.addUser(newStudent, (err, user) => {
      if (err) {
        res.json({ success: false, msg: "Failed to add student" });
      } else {
        res.json({ success: true, msg: "Student added successfully" });
      }
    });
  },
  addHomework: function (req, res) {
    User.updateMany(
      { isStudent: true },
      { $set: { student: { grades: { assignment: req.body.assignment } } } }
      // { student: { $push: { grades: { assignment: req.body.assignment } } } }
    ).then(function (homework) {
      console.log(homework);
      res.json({ success: true, msg: homework + " added" });
    });
  },
  gradeAssignment: function (req, res) {
    const homework = {
      username: req.params.student,
      assignment: req.params.assignment,
    };

    User.getUserByUsername(homework.username, (err, student) => {
      if (err) throw err;
      if (!student) {
        return res.json({ success: false, msg: "Student not found" });
      }

      User.findOneAndUpdate(homework.assignment, { $set });
    });
  },
  attendence: function (req, res) {
    res.json({ success: true, msg: "attendence" });
  },
};
