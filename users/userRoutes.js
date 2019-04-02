const routes = require("express").Router();
const db = require("./users-model.js");

async function auth() {
  return (req, res, next) => {
    const session = await db.findBySid(req.session.id);
    session
      ? next()
      : res.status(403).json({ message: "Forbidden.  You are not authorized" });
  };
}

routes.get("/", auth(), async (req, res) => {});

module.exports = routes;
