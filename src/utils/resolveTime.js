const isVoid = require("./isVoid");

const resolveTime = (val) => {
  if (isVoid(val)) {
    return val;
  }
  return new Date(val);
};

module.exports = resolveTime;
