const Ajv = require("ajv").default;
const isFalsy = require("../utils/isFalsy");
const ajv = new Ajv();

const validate = (schema, data = {}) => {
  const valid = ajv.validate(schema, data);
  if (isFalsy(valid)) {
    return ajv.errors[0];
  }
};

module.exports = validate;
