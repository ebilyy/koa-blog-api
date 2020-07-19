const app = require('./app')
const {PORT} = require('./config')

// const mongoose = require('mongoose');
// const runDb = require('./db/index')

const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const router = require('../router')
// runDb()

app.use(serve(__dirname+ '/public'))
app.use(bodyParser());
app.use(router.middleware())


app.listen(PORT, (err)=>{
  if(err){
    console.log(err);
  }
  console.log(`server listening on port ${PORT}`);
});