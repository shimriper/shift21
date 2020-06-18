const fs = require('fs');

if (fs.existsSync('./public')) {
  process.env.NODE_ENV = 'production';
  process.env.databaseUri = "mongodb://shift:!QAZ2wsx@ds048279.mlab.com:48279/shifts2020"; // Databse URI and database name
  process.env.databaseName = 'production database: shifts2020'; // Database name
} else {
  process.env.NODE_ENV = 'development';
  process.env.databaseUri = 'mongodb://localhost:27017/shifts2020'; // Databse URI and database name
  process.env.databaseName = 'development database: shifts2020'; // Database name
}


// // module.exports = {
// "mongodb://shift:!QAZ2wsx@ds048279.mlab.com:48279/shifts2020",
// // };
