const express = require("express");
const saveController = require("../controllers/saveAppointment");
const router = express.Router();
router.post("/bookedSuccessfully", saveController.postAppointment);
module.exports = router;
