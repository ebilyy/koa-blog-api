const Router = require("@koa/router");

const router = new Router();

const controller = require("../controllers/post");
const { DB_URL } = require("../app/config");

// app.use(function* () {
//
// });
router.get("/", async (ctx, next) => {
  await ctx.render("home", { title: "title1" });
});
router.get("/asd", async (ctx, next) => {
  await ctx.render("home", { title: DB_URL });
});

router.get("/articles", controller.getAll);
router.get("/articles", controller.getAll);
router.get("/articles/:id", controller.getById);
router.post("/articles", controller.create);
router.put("/articles/:id", controller.update);
router.delete("/articles/:id", controller.deleteById);

module.exports = router;
