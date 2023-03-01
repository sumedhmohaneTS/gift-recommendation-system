const mysql = require('mysql2/promise');
const connection = {
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'boxmarker',
    database: 'gift_recommendation_db',
};

const mysqlPool = mysql.createPool(connection);

module.exports = mysqlPool;
