require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'dbuser',
    password: process.env.DB_PASSWORD || 'dbmdp',
    database: process.env.DB_NAME || 'dbname',
    host: process.env.DB_HOST || 'database',
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_USER || 'dbuser',
    password: process.env.DB_PASSWORD || 'dbmdp',
    database: process.env.DB_NAME || 'dbname',
    host: 'localhost',  // tests locaux (hors Docker)
    dialect: 'mysql',
  }
};
