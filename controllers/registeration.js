const userDb = require("../models/user");
exports.postRegisteration = async (req, res) => {
  const email = req.body.email;

  const password = req.body.password;

  let flag = 1;

  if (!email || !password) {
    errors.push({ msg: "Please fill in all the fields" });
    res.send({ message: "Please fill in all the fields" });
  }

  if (password.length < 8) {
    flag = 0;
    res.send({ message: "Password should be atleast 8 characters" });
  }

  if (flag == 0) {
  } else {
    const result = await userDb.userCreate(email, password);

    if (!result) {
      res.send("Already Registeres");
    } else {
      res.send("successfully registered");
    }
  }
};
