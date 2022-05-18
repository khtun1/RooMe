const mysql = require('mysql2');


/* 
 * Connection info for remote host mysql:
 * user: application
 * password: group_6_AppDB
 * database: groupDB
 * host and port are in credentials/README
*/
const connection = mysql.createPool({
    host: '3.22.208.237',
    port: '3306',
    user: 'application',
    password: 'group_6_AppDB',
    database: 'groupDB',
    waitForConnections: true,
    connectionLimit: 50,
    queueLimit: 0
});

const promisePool = connection.promise();

module.exports = promisePool;
