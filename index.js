const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const router = require('./router')

app.use(serve(__dirname+ '/public'))
app.use(bodyParser());
app.use(router.middleware())


app.listen(3000, ()=>{
  console.log('server started');
});