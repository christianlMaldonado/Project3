const express = require("express");
const router = express.Router();
const controller = require("../controllers/classController");

// add students
router.route("/addStudent").post(controller.createStudent);

// homework routes
router.route("/homework").post(controller.addHomework);

router.route("/homework/:assignment/:student").put(controller.gradeAssignment);

// attendence route
router.route("/attendence/:student").put(controller.attendence);

// router.route("");

module.exports = router;
