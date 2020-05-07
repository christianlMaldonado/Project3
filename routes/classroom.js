const express = require("express");
const router = express.Router();
const controller = require("../controllers/classController");

// add students
router.route("/addStudent").post(controller.createStudent);

// homework routes
router
  .route("/homework")
  .get(controller.getHomework)
  .post(controller.addHomework)
  .put(controller.gradeAssignment);

router.route("/submitHomework").post(controller.submitLink);

// attendence route
router.route("/attendance").get(controller.checkAttendance).put(controller.attendance);

module.exports = router;
