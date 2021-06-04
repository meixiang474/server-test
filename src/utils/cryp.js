const crypto = require("crypto");
const { SECRET_PASSWORD_KEY } = require("../conf/const");

const _md5 = (content) => {
  const md5 = crypto.createHash("md5").update(content).digest("hex");
  return md5;
};

const doCrypto = (content) => {
  if (content) {
    const str = `password=${content}&key=${SECRET_PASSWORD_KEY}`;
    return _md5(str);
  }
  return null;
};

module.exports = doCrypto;
