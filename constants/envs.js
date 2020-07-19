const keyMirror = require('keymirror')
const env = keyMirror({
  development: null,
  production: null
})
module.exports =  env