const app = require("./app");
const { PORT } = require("./config");

const serve = require("koa-static");
const router = require("../router");
// runDb()

app.use(serve(__dirname + "/public"));

app.use(router.middleware());

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`server listening on port ${PORT}`);
});
