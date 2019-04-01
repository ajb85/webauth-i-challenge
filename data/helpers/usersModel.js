const db = require("../dbConfig.js");

module.exports = {
  get: id => {
    return db("users")
      .where("id", id)
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
