const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home/root");
});

router.get("/login", (req, res) => {
    res.render("home/login");
});

module.exports = router;