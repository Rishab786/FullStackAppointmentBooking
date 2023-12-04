const db = require("../utils/db");
async function saveAppointment(emailId, name, date, time) {
  const result = await db.execute(
    "INSERT INTO appointments (id,name,date,time) VALUES (?, ?,?,?)",
    [emailId, name, date, time]
  );
  return result;
}
async function getAppointments(emailId) {
  const result = await db.execute(
    "SELECT * FROM `appointments` WHERE `id` = ?",
    [emailId]
  );
  return result;
}

module.exports = {
  postAppointment: saveAppointment,
  getAllAppointments: getAppointments,
};
