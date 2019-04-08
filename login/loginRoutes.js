const routes = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("../data/helpers/usersModel.js");

routes.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    if (username && password) {
      const account = await db.getByUsername(username);
      if (account && bcrypt.compareSync(password, account.password)) {
        req.session.user = account;
        res.status(200).send(`Logged in as ${account.username}`);
      } else {
        res.status(400).json({ message: "You shall not pass!" });
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
