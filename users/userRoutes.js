const routes = require("express").Router();
const db = require("./users-model.js");

function auth() {
  return async (req, res, next) => {
    const session = await db.findBySid(req.session.id);
    session
      ? next()
      : res.status(403).json({ message: "Forbidden.  You are not authorized" });
  };
}

routes.get("/", auth(), async (req, res) => {
  try {
    const users = await db.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error retriving users" });
  }
});

module.exports = routes;
