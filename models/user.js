const db = require("../utils/db");
async function validateUser(email, pass) {
  const result = await db.execute("SELECT * FROM users WHERE emailid = ?", [
    email,
  ]);
  return result;
}
async function createUser(email, pass) {
  const result = await db.execute("SELECT * FROM `users` WHERE `emailid` = ?", [
    email,
  ]);

  if (result[0].length != 0) {
    return false;
  } else {
    await db.execute("INSERT INTO users (emailid,password) VALUES (?, ?)", [
      email,
      pass,
    ]);
    return true;
  }
}

module.exports = {
  userValidation: validateUser,
  userCreate: createUser,
};
