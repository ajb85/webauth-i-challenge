const db = require("../data/dbConfig.js");

module.exports = {
  findBySid,
  findAll
};

function findBySid(sid) {
  return db("sessions")
    .where({ sid })
    .first();
}

function findAll() {
  return db("users");
}
