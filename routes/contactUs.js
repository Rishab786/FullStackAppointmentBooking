const express = require("express");
const contactUsController = require("../controllers/contactUs");
const router = express.Router();
router.get("/contactUs", contactUsController.getContactPage);
module.exports = router;
