// import express from "express";
// import http from "http";
// import { Server } from "socket.io"; // Correct import
// import cors from "cors";

// const app = express();
// app.use(cors());

// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Socket.IO Server is running!");
// });

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:5173", // Correct origin format
//     methods: ["GET", "POST"], // Correct spelling for methods
//     credentials: true,
//   },
// });

// io.on("connection", (socket) => {
//   console.log("A new user has been connected");

//   // Listening to content-update event
//   socket.on("content-update", (content) => {
//     socket.broadcast.emit("receive-content", content);
//   });

//   // Handling disconnection
//   socket.on("disconnect", () => {
//     console.log("A user has been disconnected");
//   });
// });








// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })




import express from "express";
import http from "http";
import { Server } from "socket.io"; // Correct import
import cors from "cors";

const app = express();
app.use(cors());

const port = process.env.PORT || 3000; // Dynamic port support

// Basic route for testing server
app.get("/", (req, res) => {
  res.send("Socket.IO Server is running!");
});

// Creating HTTP server
const server = http.createServer(app);

// Setting up Socket.IO server with CORS
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Replace with your client URL in production
    methods: ["GET", "POST"], // Allowed HTTP methods
    credentials: true, // Allow credentials
  },
});

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log(`A new user connected: ${socket.id}`);

  // Listening to content-update event
  socket.on("content-update", (content) => {
    console.log(`Content updated by ${socket.id}: ${content}`);
    socket.broadcast.emit("receive-content", content);
  });

  // Handling disconnection
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });

  // Optional: Handle other events here
});

// Starting server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
