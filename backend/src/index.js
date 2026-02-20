import dotenv from "dotenv";
import express from "express";
const app = express();
import authRoutes from "./routes/authRoutes.js";
import connectDB from ".config/db.js";

dotenv.config();

app.use(express.json());


//Mount the router: To use the router in your main Express app, you can "Mount" it ar a specific URL prefix
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Example app Listening on port ${port}`)
})
