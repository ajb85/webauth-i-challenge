const db = require("../data/dbConfig.js");

module.exports = {
  findBySid
};

function findBySid(sid) {
  return db("sessions")
    .where({ sid })
    .first();
}
