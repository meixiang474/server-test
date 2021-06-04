const fse = require("fs-extra");
const { DEFAULT_UPLOAD_PATH, DIST_FOLDER_PATH } = require("../conf/const");
const { SuccessModel } = require("../model");

fse.pathExists(DIST_FOLDER_PATH).then((exist) => {
  if (!exist) {
    fse.ensureDir(DIST_FOLDER_PATH);
  }
});

const upload = async (ctx) => {
  const { filename } = ctx.file;
  return new SuccessModel(200, {
    url: DEFAULT_UPLOAD_PATH + filename,
  });
};

module.exports = {
  upload,
};
