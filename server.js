const express = require("express");
const io = require("socket.io")();
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

const app = express();
const users = require("./routes/users");
const classroom = require("./routes/classroom");
const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGODB_URI || config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
app.use("/classroom", classroom);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// index route
app.get("/", (req, res) => {
  res.send("invalid endpoint");
});

app.listen(PORT, () => {
  console.log("server on http://localhost:" + PORT);
});


// const path = require("path");
// const http = require("http");
// const express = require("express");
// const socketio = require("socket.io")
// const formatMessage = require("./utils/messages");
// const {
//     userJoin,
//     getCurrentUser,
//     userLeave,
//     getRoomUsers
// } = require("./utils/users");

// const app = express();
// const server = http.createServer(app);
// const io = socketio(server);

// // Set static folder
// app.use(express.static(path.join(__dirname,"public")));

// const botName = "EduCav Bot";

// // Run when client connects
// io.on ("connection", socket=> {
//     socket.on ("joinRoom", ({username, room}) => {
//         const user = userJoin(socket.id, username, room);
        
//         socket.join(user.room);

//         // Welcome current user
//         socket.emit ("message", formatMessage(botName, "welcome to EduCav Chatroom!"));

//         // Broadcast when a user connects
//         socket.broadcast
//         .to(user.room)
//         .emit(
//             "message",
//             formatMessage(botName,"${user.username} has joined the chat")
//         );

//         //Send users and room info
//         io.to(user.room).emit("roomUsers", {
//             room: user.room,
//             users:getRoomUsers(user.room)
//         });
//     });

//     //Listen for chatMessage
//     socket.on("chatMessage", msg => {
//         const user = getCurrentUser(socket.id);

//         io.to(user.room).emit("message", formatMessage(user.username, msg));
//     });

//     //Runs when client dicsonnects
//     socket.on("disconnect", () => {
//         const user = userLeave(socket.id);

//         if(user) {
//             io.to(user.room).emit(
//                 "message",
//                 formatMessage(botName, "${user.username) has left the chat")
//             );
            
//             //Send users and room info
//             io.to(user.room).emit("roomUsers", {
//                 room: user.room,
//                 users:getRoomUsers(user.room)
//             });
//         }
//     });
// });

// const PORT = process.env.PORT || 3000;

//server.listen(PORT, () => console.log ('Server running on port ${PORT} '));