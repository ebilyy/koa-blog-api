const config = require('config')
const envs = require('../constants/envs')
const {ENV} = require('../utils/env')
const dotenv = require('dotenv')


dotenv.config()
if(!envs[ENV]){
  throw Error(`Unknown env ${ENV}`)
}
const PORT = process.env.PORT || config.get('PORT')
const MONGO_URI = process.env.MONGO_URI || config.get('mongo.uri')

module.exports = {PORT, MONGO_URI}