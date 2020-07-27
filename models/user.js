const mongoose, {Schema} = require('mongoose')
const bcrypt = require('bcrypt')
const unqueValidator = require('mongoose-unique-validator')

mongoose.plugin(unqueValidator)

const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true, 
    required: 'email is required'
  },
  password: {
    type: String,
    required: 'Passsword is required'
  },
  firstName: {
    type: String,
    lowercase: true,
    required: 'first name is required'
  },
  lastName: {
    type: String,
    lowercase: true,
    required: 'Last name is required'
  },
  timestamp: true
})

userSchema.statics.createFields = ['email', 'password', 'firstName', 'lastName']
 
userSchema.pre('save', function(next){
  if(!this.isModified('password')){
    return next()
  }
  const salt = bcrypt.genSaltSync(10);

  this.password = bcrypt.hashSync(this.password, salt)
  next()
})

userSchema.statics.findOneWithPublicFields = function(params, cb){
  return this.findOne(params, cb).select({ password: 0, _id: 0, __v:0 })
}

module.exports = mongoose.model('user', userSchema)