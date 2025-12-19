const express = require("express");
const app = express();

const databaseConnect = require("./database/dbconnect");
const authRoute = require("./routes/authRoute");


// .env lai use garne
require("dotenv").config();

// Middleware
app.use(express.json()); 

// Routes
app.use("/api/auth/", authRoute);


// Database connect
databaseConnect(process.env.MONGO_URL);

// Server start
app.listen(process.env.PORT, () => {
    console.log("Server is starting on port number:", process.env.PORT);
});
 