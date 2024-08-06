const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");
const authRoutes = require("./routes/authRoutes");
const quizRoutes = require("./routes/quizRoutes");
const mcqRoutes = require("./routes/mcqRoutes");
const userRoutes = require("./routes/userRoutes");
require('dotenv').config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

// Use the authRoutes for API requests
app.use("/api/auth", authRoutes);

// Use the quizRoutes for API requests
app.use("/api/quiz", quizRoutes);

// Use the mcqRoutes for API requests
app.use("/api", mcqRoutes);

// Use the userRoutes for API requests
app.use("/api/user", userRoutes);


const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("joinRoom", ({ roomCode }) => {
    socket.join(roomCode);
    console.log(`User joined room: ${roomCode}`);
  });

  socket.on("scoreUpdate", ({ roomCode, score }) => {
    socket.to(roomCode).emit("updateOpponentScore", score);
  });

  socket.on("leaveRoom", ({ roomCode }) => {
    socket.leave(roomCode);
    console.log(`User left room: ${roomCode}`);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
