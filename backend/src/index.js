import dotenv from "dotenv";
dotenv.config();
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";
import cors from "cors";
const app = express();

const frontendUrl = process.env.FRONTEND_URL;

app.use(express.json());
app.use(cors({
  origin: frontendUrl,
  methods: ["GET", "POST"],
  credentials: true
}));


//Mount the router: To use the router in your main Express app, you can "Mount" it ar a specific URL prefix
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 3000;
const startServer = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Example app Listening on port ${port}`);
    });
};

startServer();
