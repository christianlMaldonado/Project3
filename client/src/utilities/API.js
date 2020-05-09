import axios from "axios";

export default {
  addStudent: function(student) {
    return axios.post("/classroom/addStudent", student);
  },
  addHomework: function(homework) {
    return axios.post("/classroom/homework", homework);
  },
  getHomework: function(student) {
    return axios.get("/classroom/homework", student);
  },
  gradeAssignment: function(homework) {
    return axios.put("/classroom/homework", homework);
  },
  submitHomework: function(homework) {
    return axios.post("/classroom/submitHomework", homework);
  },
  takeAttendance: function() {
    return axios.get("classroom/attendance");
  },
  checkIn: function(student) {
    return axios.put("classroom/attendance", student);
  },
  registerTeacher: function(teacher) {
    return axios.post("/users/register", teacher);
  },
  login: function(user) {
    return axios.post("/users/auth", user);
  },
  userPortal: function(token) {
    return axios.get("/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
  },
};
