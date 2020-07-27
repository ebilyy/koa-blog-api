const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger");
const { IS_DEV } = require("../../utils/env");
const error = require("./error");
module.exports = (app) => {
  if (IS_DEV) {
    app.use(logger());
  }
  app.use(error());
  app.use(bodyParser());
};
