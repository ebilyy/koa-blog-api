const Router = require("@koa/router");
const router = new Router();
const controller = require("../controllers/post");

router.get("/articles", controller.getAll);
router.get("/articles/:id", controller.getById);
router.post("/articles", controller.create);
router.put("/articles/:id", controller.update);
router.delete("/articles/:id", controller.deleteById);

module.exports = router;
