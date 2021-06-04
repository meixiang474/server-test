const { isProd } = require("../utils/env");

let REDIS_CONF = {
  port: 6379,
  host: "127.0.0.1",
};

let MYSQL_CONF = {
  host: "localhost",
  user: "root",
  password: "111",
  port: "3306",
  database: "travel_project",
};

if (isProd) {
  REDIS_CONF = {
    port: 6379,
    host: "127.0.0.1",
  };

  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "111",
    port: "3306",
    database: "travel_project",
  };
}

module.exports = {
  REDIS_CONF,
  MYSQL_CONF,
};
