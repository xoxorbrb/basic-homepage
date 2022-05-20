const express = require("express");
const app = express();
const path = require("path");
const ctrl = require("./src/router/home/home.ctrl");
const dotenv = require("dotenv");

dotenv.config();

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(path.join(`${__dirname}/src/public`)));

app.get("/", ctrl.output.root);
app.get("/login", ctrl.output.login);
app.get("/register", ctrl.output.register);

module.exports = app;