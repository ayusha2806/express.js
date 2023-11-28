const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'ayush2anand',
    database: 'node-complete'
});

module.exports = pool.promise();