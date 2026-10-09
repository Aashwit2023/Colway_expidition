import dotenv from "dotenv";
dotenv.config();
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import mediaRoutes from "./routes/mediaRoutes.js";
import connectDB from "./config/db.js";
import cors from "cors";
import { transporter } from "./config/mail.js";
const app = express();

const frontendUrl = process.env.FRONTEND_URL;

app.use(express.json());
app.use(cors({
  origin: frontendUrl || "http://localhost:5173",
  methods: ["GET", "POST", "PATCH"],
  credentials: true
}));


//Mount routers
app.use("/api/auth", authRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/media", mediaRoutes);

async function verifyMailer() {
  try {
    await transporter.verify();
    console.log("✅ Mail Server Connected");
  } catch (error) {
    console.log(error);
  }
}

verifyMailer();

const port = process.env.PORT || 3000;
const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Example app Listening on port ${port}`);
  });
};

startServer();
