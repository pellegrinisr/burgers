var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.db_host,
    port: 3306,
    user: process.env.db_user,
    password: process.env.db_pass,
    database: 'burgers_db'
});

connection.connect(function(error) {
    if (error) {
        console.log('error connecting ', error.stack);
        return;
    }
    console.log('connected as id ', connection.threadId);
});

module.exports = connection;