const isVoid = require("./isVoid");

const cleanObject = (object = {}) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

module.exports = cleanObject;
