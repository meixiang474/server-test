const path = require("path");

module.exports = {
  SECRET_SESSION_KEY: "zhengbowen_weibo",
  DEFAULT_PICTURE: "http://127.0.0.1:6006/images/defaultPicture.jpeg",
  SECRET_PASSWORD_KEY: "Usfifda",
  DEFAULT_UPLOAD_PATH: "http://127.0.0.1:6006/uploadFiles/",
  DIST_FOLDER_PATH: path.join(__dirname, "..", "public/uploadFiles"),
  MAX_SIZE: 1024 * 1024 * 1024,
};
