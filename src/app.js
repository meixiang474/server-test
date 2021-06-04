const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const cors = require("koa2-cors");
const indexViewRouter = require("./routes/view/index");
const utilsApiRouter = require("./routes/api/utils");
const notFoundRouter = require("./routes/notFound");

// error handler
onerror(app);

// middlewares
app.use(cors());
app.use(
  bodyparser({
    enableTypes: ["json", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "ejs",
  })
);

// session配置

// routes
app.use(indexViewRouter.routes(), indexViewRouter.allowedMethods());
app.use(utilsApiRouter.routes(), utilsApiRouter.allowedMethods());
app.use(notFoundRouter.routes(), notFoundRouter.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
