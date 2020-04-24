const express = require("express");
const io = require("socket.io")();
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

const app = express();
const users = require("./routes/users");
const PORT = 5000;

mongoose.connect(config.database);

mongoose.connection.on("connected", () => {
  console.log("connected to database " + config.database);
});
mongoose.connection.on("error", (err) => {
  console.log("database error " + err);
});

app.use(cors());
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use("/users", users);

app.use(express.static(path.join(__dirname, "public")));

// index route
app.get("/", (req, res) => {
  res.send("invalid endpoint");
});

app.listen(PORT, () => {
  console.log("server on http://localhost:" + PORT);
});
