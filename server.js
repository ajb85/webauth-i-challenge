const express = require("express");
const helmet = require("helmet");
const server = express();

const registerRoutes = require("./register/regRoutes.js");
const loginRoutes = require("./login/loginRoutes.js");
const userRoutes = require("./users/userRoutes.js");

server.use(express.json());
server.use(helmet());

server.use("/api/register", registerRoutes);
server.use("/api/login", loginRoutes);
server.use("/api/users", userRoutes);

server.get("/", (req, res) => {
  res.status(200).send("Still alive");
});

module.exports = server;
