const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("users").insert([
    { username: "asdf", password: bcrypt.hashSync("asdf", 4) },
    { username: "asdf2", password: bcrypt.hashSync("asdf2", 4) },
    { username: "asdf3", password: bcrypt.hashSync("asdf3", 4) }
  ]);
};
