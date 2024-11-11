const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '0000',
    port: 3306,
    database: 'act8_blogger',
    // multipleStatements: true
});

module.exports = pool.promise();