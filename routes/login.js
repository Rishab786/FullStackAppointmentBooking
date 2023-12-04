const express = require("express");
const loginController = require("../controllers/login");
const router = express.Router();
router.get("/login", loginController.getLoginPage);
module.exports = router;
