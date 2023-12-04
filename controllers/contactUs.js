const path = require("path");
exports.getContactPage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contactUs.html"));
};
