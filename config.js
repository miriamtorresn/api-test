const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  app: {
    port: process.env.APP_PORT || 3000,
    host: process.env.APP_HOST || "localhost",
    protocol: process.env.APP_PROTOCOL || "http",
  },
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
};
