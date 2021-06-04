const router = require("koa-router")();
const multer = require("@koa/multer");
const { DIST_FOLDER_PATH, MAX_SIZE } = require("../../conf/const");
const { upload } = require("../../controller/utils");
const path = require("path");

const storage = multer.diskStorage({
  // multer调用diskStorage可控制磁盘存储引擎
  destination: function (req, file, cb) {
    cb(null, DIST_FOLDER_PATH);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadPlugin = multer({
  storage,
  limits: {
    fileSize: MAX_SIZE,
  },
});

router.prefix("/api/utils");

router.post("/upload", uploadPlugin.single("file"), async (ctx) => {
  ctx.body = await upload(ctx);
});

module.exports = router;
