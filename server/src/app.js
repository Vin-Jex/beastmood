const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
const morgan = require("morgan");

dotenv.config();

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.get("/", async (req, res) => {
  res.status(200).json("Server side *()*");
});

module.exports = app;
