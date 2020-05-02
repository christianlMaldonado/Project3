import axios from "axios";

export default {
  addStudent: function(student) {
    return axios.post("/class/addStudent", student);
  },
  addHomework: function(homework) {
    return axios.post("/class/homework", homework);
  },
  assignHomework: function() {
    return axios.get("/class/homework");
  },
  gradeAssignment: function(student, homework) {
    return axios.put("/class/" + homework + "/" + student);
  },
  takeAttendence: function(student) {
    return axios.put("class/attendence/" + student);
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
