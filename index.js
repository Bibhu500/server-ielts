import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./router/userRoutes.js";
import speakingRoutes from "./router/speakingRoutes.js"
import writingRoutes from "./router/writingRoutes.js"
import profileRoutes from "./router/profileRoutes.js"
import listeningRoutes from "./router/listeningRoutes.js"

import cors from "cors";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send(`Hello World`);
});

app.use("/api/users", userRoutes);
app.use("/api/speaking", speakingRoutes);
app.use("/api/writing", writingRoutes);
app.use("/api/listening", listeningRoutes);
app.use("/api/profile", profileRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);