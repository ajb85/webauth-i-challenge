const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const dbConfig = require("./data/dbConfig.js");

module.exports = {
  name: "login",
  secret: "Wat is secret?",
  cookie: {
    maxAge: 1000 * 60 * 15,
    secure: false, // for now
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false,
  store: new KnexSessionStore({
    knex: dbConfig,
    tablename: "sessions",
    sidfieldname: "sid",
    createtable: true,
    clearInterval: 1000 * 60 * 30
  })
};
