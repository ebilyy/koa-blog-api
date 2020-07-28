const Router = require("@koa/router");
const router = new Router();
const controller = require("../controllers/post");
const { DB_URL } = require("../app/config");

router.get("/articles", controller.getAll);
router.get("/articles/:id", controller.getById);
router.post("/articles", controller.create);
router.put("/articles/:id", controller.update);
router.delete("/articles/:id", controller.deleteById);
router.get("/", (ctx, next) => {
  ctx.body = {
    url: DB_URL,
  };
});
module.exports = router;
