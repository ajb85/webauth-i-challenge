const routes = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("../data/helpers/usersModel.js");

routes.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    if (username && password) {
      const account = await db.getByUsername(username);
      if (bcrypt.compareSync(password, account.password)) {
        res.status(200).send("+1");
      } else {
        res.status(400).json({ message: "Incorrect username or password" });
      }
    } else {
      res.status(400).json({ message: "Provide a username and password" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "There was an error validating that account" });
  }
});

module.exports = routes;
