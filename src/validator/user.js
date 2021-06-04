const validate = require("./_validate");

// 校验规则
const SCHEMA = {
  type: "object",
  properties: {
    username: {
      type: "string",
      pattern: "^[a-zA-Z][a-zA-Z0-9_]+$", // 字母开头，字母数字下划线
      maxLength: 255,
      minLength: 2,
    },
    password: {
      type: "string",
      maxLength: 255,
      minLength: 3,
    },
    newPassword: {
      type: "string",
      maxLength: 255,
      minLength: 3,
    },
    avatar: {
      type: "string",
      maxLength: 255,
    },
    sign: {
      type: "string",
      maxLength: 255,
    },
    phone: {
      type: "string",
      maxLength: 255,
    },
  },
};

const userValidate = (data = {}) => {
  return validate(SCHEMA, data);
};

module.exports = userValidate;
