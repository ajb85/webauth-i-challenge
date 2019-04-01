const db = require("../dbConfig.js");

module.exports = {
  getById: id => {
    return db("users")
      .where("id", id)
      .first();
  },
  getByUsername: username => {
    return db("users")
      .where("username", username)
      .first();
  },
  insert: account => {
    return db("users")
      .insert(account)
      .then(([id]) =>
        db("users")
          .where("id", id)
          .first()
      );
  }
};
