const Koa = require("koa");
const initConnectors = require("../db");

const initHandlers = require("./handlers");

initConnectors();
const app = new Koa();
initHandlers(app);

module.exports = app;
