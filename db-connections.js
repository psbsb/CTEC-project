var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'mysqlinstance.cpaqvaxrtkde.ap-south-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'Shengbao04',
    database: 'movie-info'
});

connection.connect(err=>{ //test out coonection and consol.log error is there is one
    if(err) throw err;
    console.log('Connected To DB');
});
module.exports = connection;
