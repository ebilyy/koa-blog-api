const config = require("config");
const envs = require("../constants/envs");
const { ENV } = require("../utils/env");
const dotenv = require("dotenv");

dotenv.config();
if (!envs[ENV]) {
  throw Error(`Unknown env ${ENV}`);
}
const PORT = process.env.PORT || config.get("PORT");
const DB_URL = process.env.DB_URL || config.get("mongo.uri");

module.exports = { PORT, DB_URL };
