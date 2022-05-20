const express = require("express");
const app = express();
const router = require("./src/router/home/index");
const dotenv = require("dotenv");

dotenv.config();

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", router);
app.get("/login", router);

module.exports = app;