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
      student: [],
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
      { $set: { student: { grades: { assignment: req.body.assignment, grade: 0 } } } }
    ).then(function (homework) {
      console.log(homework);
      res.json({ success: true, msg: homework + " added" });
    });
  },
  gradeAssignment: function (req, res) {
    const homework = {
      username: req.body.student,
      assignment: req.body.assignment,
      grade: req.body.grade,
    };
    User.findOneAndUpdate(
      { username: homework.username },
      { $set: { student: { grades: { assignment: homework.assignment, grade: homework.grade } } } },
      { $upsert: true },
      (err, student) => {
        if (err) throw err;
        if (!student) {
          return res.json({ success: false, msg: "Student not found" });
        }
        res.json(student);
      }
    );
  },
  attendance: function (req, res) {
    const isPresent = {
      username: req.body.student,
      date: Date.now(),
      present: req.body.present,
    };
    User.findOneAndUpdate(
      { username: isPresent.username },
      { $set: { attendance: { date: isPresent.date, present: isPresent.present } } },
      { $upsert: true },
      (err, student) => {
        if (err) throw err;
        if (!student) {
          return res.json({ success: false, msg: "Student not found" });
        }
        res.json({ success: true, msg: "Attendance taken" });
      }
    );
  },
};
