const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.root);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

module.exports = router;