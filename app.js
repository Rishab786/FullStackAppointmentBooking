const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");
const app = express();
const loginRouter = require("./routes/login");
const contactUsRouter = require("./routes/contactUs");
const dashBoardRouter = require("./routes/dashboard");
const registerRouter = require("./routes/registeration");
const saveRouter = require("./routes/saveAppointment");
app.engine("html", require("ejs").renderFile); //n

app.get("", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("/registeration", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "registeration.html"));
});
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/login", loginRouter);
app.post("/dashboard", dashBoardRouter);
app.get("/contactUs", contactUsRouter);
app.post("/register", registerRouter);
app.post("/bookedSuccessfully", saveRouter);
app.use("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "error.html"));
  });

app.listen(3000, () => {
  console.log("server started");
});
