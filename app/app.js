const Koa = require("koa");

const koaNunjucks = require("koa-nunjucks-2");
const path = require("path");

const initConnectors = require("../db");

initConnectors();
const app = new Koa();

app.use(
  koaNunjucks({
    ext: "html",
    path: path.join(__dirname, "views"),
    nunjucksConfig: {
      trimBlocks: true,
    },
  })
);

module.exports = app;
