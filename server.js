const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");

const registerRoutes = require("./register/regRoutes.js");
const loginRoutes = require("./login/loginRoutes.js");
const userRoutes = require("./users/userRoutes.js");
const sessionConfig = require("./sessionConfig.js");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(session(sessionConfig));

server.use("/api/register", registerRoutes);
server.use("/api/login", loginRoutes);
server.use("/api/users", userRoutes);

server.get("/", (req, res) => {
  res.status(200).send("Still alive");
});

module.exports = server;
