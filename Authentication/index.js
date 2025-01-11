import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import connectDB from "./src/db/index.js"
import routes from "./src/routes/users.routes.js"
const app = express();

app.use(cors({origin: "http://localhost:5173", // React frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  credentials: true,}));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World sameer !");
});

// Routes
app.use("/api/v1", routes);


connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });