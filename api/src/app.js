const express = require("express");
const mainRouter = require("../routes/mainRouter");
const morgan= require("morgan");

const app = express();

app.use(morgan("dev"));

app.use(mainRouter);

module.exports = app;