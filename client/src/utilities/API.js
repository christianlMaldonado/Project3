import axios from "axios";

export default {
  addStudent: function(student) {
    return axios.post("/classroom/addStudent", student);
  },
  addHomework: function(homework) {
    return axios.post("/classroom/homework", homework);
  },
  assignHomework: function() {
    return axios.get("/classroom/homework");
  },
  gradeAssignment: function(student, homework) {
    return axios.put("/classroom/" + homework + "/" + student);
  },
  takeAttendance: function(student) {
    return axios.put("classroom/attendance", student);
  },
  registerTeacher: function(teacher) {
    return axios.post("/users/register", teacher);
  },
  login: function(user) {
    return axios.post("/users/auth", user);
  },
  userPortal: function() {
    return axios.get("/user/profile");
  },
};
