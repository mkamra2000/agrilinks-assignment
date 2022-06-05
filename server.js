const express = require("express");
const app = express();
const reportRouter = require("./routes/reports");
const testRouter = require("./routes/test");
const port = process.env.PORT || 3000;
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/dbConfig");
const cors = require("cors")

// Connection to database
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static('public'))
app.use("/reports", reportRouter);
app.use("/test",testRouter)

mongoose.connection.once("open", () => {
  console.log("Connected to Database");
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
