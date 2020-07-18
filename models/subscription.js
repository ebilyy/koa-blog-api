const mongoose = require('mongoose')
const subscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  createdAt: {
    type: Date
  }
})
const Subscription = mongoose.model('Subscription', subscriptionSchema)
module.exports = Subscription
