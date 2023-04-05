const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const server = express();
const router = require("./Routes");



server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.use(router);



module.exports = server;