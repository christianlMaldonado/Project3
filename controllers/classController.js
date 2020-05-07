const config = require("../config/database");
const User = require("../models/user");

module.exports = {
  createStudent: function (req, res) {
    let newStudent = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      isStudent: true,
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
      {
        $push: {
          "student.schoolWork": {
            assignment: {
              name: req.body.assignment,
              grade: 0,
              link: "",
              description: req.body.description,
            },
          },
        },
      }
    ).then(function (homework) {
      console.log(homework);
      res.json({ success: true, msg: homework + " added" });
    });
  },
  getHomework: function (req, res) {
    const studentName = req.body.student;
    User.findOne({ username: studentName }, (err, student) => {
      if (err) throw err;
      res.json({ student });
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
      {
        $set: {
          "student.schoolWork.$[elem].grade": homework.grade,
        },
      },
      {
        arrayFilters: [{ "elem.grade": { $lte: homework.grade } }],
        multi: false,
        $upsert: true,
      },
      (err, student) => {
        if (err) throw err;
        if (!student) {
          return res.json({ success: false, msg: "Student not found" });
        } else {
          console.log(student.student.schoolWork);
          student.student.schoolWork.forEach((element) => {
            if (element.assignment.name === homework.assignment) {
              element.assignment.grade = homework.grade;
            }
            console.log(student.student.schoolWork);
          });
          student.save(function (err, student) {
            res.json(student);
          });
        }
      }
    );
  },
  attendance: function (req, res) {
    const isPresent = {
      username: req.body.name,
      present: true,
    };
    // console.log(req.body.date);
    User.findOneAndUpdate(
      { username: isPresent.username },
      { $push: { "student.attendance": { isPresent: isPresent.present } } },
      (err, student) => {
        if (err) throw err;
        if (!student) {
          return res.json({ success: false, msg: "Student not found" });
        }
        res.json({ success: true, msg: "Attendance taken" });
      }
    );
  },
  checkAttendance: function (req, res) {
    User.find({ isStudent: true }, (err, students) => {
      if (err) throw err;
      console.log(students);
      res.json(students);
    });
  },
};
