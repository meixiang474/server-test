const { ErrorModel } = require("../model");

const router = require("koa-router")();

router.get("*", async (ctx) => {
  ctx.body = new ErrorModel(404, "路由不存在");
});

router.post("*", async (ctx) => {
  ctx.body = new ErrorModel(404, "路由不存在");
});

module.exports = router;
