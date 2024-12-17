require('dotenv').config();

const { DB_HOST, DB_USER, DB_PASSWORD, PORT, API_NAME, API_VERSION, JWT_SECRET } = process.env;

module.exports = { DB_HOST, DB_USER, DB_PASSWORD, PORT, API_NAME, API_VERSION, JWT_SECRET };