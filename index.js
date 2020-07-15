const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const router = require('./router')

app.use(serve(__dirname+ '/public'))
app.use(bodyParser());
app.use(router.middleware())

const port = process.env.PORT || 3000
app.listen(port, ()=>{
  console.log(`server listening on port ${port}`);
});