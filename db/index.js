const config = require('config')
const mongoose = require('mongoose')
const DB_USER = config.get('DB_USER')
const DB_PASS = config.get('DB_PASS')
const runDb = () => {
  const client = mongoose.connect(
    `mongodb://${DB_USER}:${DB_PASS}@ds213968.mlab.com:13968/blog`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )

  process.on('SIGINT', () => {
    client.close()
    process.exit()
  })
}

module.exports = runDb
