const express = require("express");
const dashboardController = require("../controllers/dashboard");
const router = express.Router();
router.post("/dashboard", dashboardController.showDashboard);
module.exports = router;
