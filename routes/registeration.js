const express = require("express");
const registerController = require("../controllers/registeration");
const router = express.Router();
router.post("/register", registerController.postRegisteration);
module.exports = router;
