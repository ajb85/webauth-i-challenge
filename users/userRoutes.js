const routes = require("express").Router();

function auth() {
  return (req, res, next) => {
    // if cookie is valid
    //next();
    // else return 403 forbidden
  };
}

routes.get("/", auth(), async (req, res) => {});

module.exports = routes;
