const appointmentDb = require("../models/appointments");
exports.postAppointment = (req, res, next) => {
  const id = req.body.id;
  const name = req.body.Name;
  const date = req.body.Date;
  const time = req.body.Time;
  appointmentDb.postAppointment(id, name, date, time);
  res.send("successfully booked");
};
