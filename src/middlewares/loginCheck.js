const { ErrorModel } = require("../model");

const loginCheck = async (ctx, next) => {
  if (ctx.session && ctx.session.userInfo) {
    // 已登录
    return next();
  }
  ctx.body = new ErrorModel(403, "当前用户未登录");
};

module.exports = loginCheck;
