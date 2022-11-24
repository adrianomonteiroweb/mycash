const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DRIVER,
  port: process.env.DB_PORT,
};
