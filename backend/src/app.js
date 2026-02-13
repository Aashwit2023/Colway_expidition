require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require("./routes/authRoutes");

app.use(express.json());


//Mount the router: To use the router in your main Express app, you can "Mount" it ar a specific URL prefix
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
    console.log(`Example app Listening on port ${port}`)
})
