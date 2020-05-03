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

// attendence route
router.route("/attendance").put(controller.attendance);

// router.route("");

module.exports = router;
