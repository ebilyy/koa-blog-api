const { DB_URL } = require("../app/config");
const mongoConnector = require("./mongo-connector");

function initConnectors() {
  mongoConnector(DB_URL);
}
module.exports = initConnectors;
