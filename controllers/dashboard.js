const path = require("path");
const userDb = require("../models/user");
const appointmentDb = require("../models/appointments");

exports.showDashboard = async (req, res, next) => {
  const inputEmail = req.body.emailid;
  const inputPass = req.body.password;
  const result = await userDb.userValidation(inputEmail, inputPass);
  const resultantArray = result[0];
  const dataArray = resultantArray[0];

  const fethcingAllValues = Object.values(dataArray);

  const actualPass = fethcingAllValues[1];

  if (actualPass == inputPass) {
    const data = await appointmentDb.getAllAppointments(inputEmail);
    const appointments = data[0];

    res.render(
      path.join(__dirname, "../", "views", "upcomingAppointments.ejs"),
      { data: { Appointments: appointments, id: inputEmail } }
    );
  } else {
    res.sendFile(path.join(__dirname, "../", "views", "invalidUser.html"));
  }
};
