const config = {
  dbUser: `eugene`,
  pass: `111111qq`
}
const mongoose = require('mongoose')

const runDb = () => {
  const client = mongoose.connect(
    `mongodb://$eugene:111111qq@ds213968.mlab.com:13968/blog`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )

  process.on('SIGINT', () => {
    client.close()
    process.exit()
  })
}

module.exports = runDb
