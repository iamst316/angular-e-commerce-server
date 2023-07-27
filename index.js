const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const {PORT, MONGO_URL} = process.env;
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

app.get("/", (req, res) => {
  res.send("Working");
});

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT,()=>{
  console.log(`Server Listening on Port: ${PORT}`)
})

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true,
}))

app.use(cookieParser());
app.use(express.json());
