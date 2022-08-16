var mysql = require('mysql')
var connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'Shengbao04',
    database:'restraunt_review'
});

connection.connect(err=>{ //test out coonection and consol.log error is there is one
    if(err) throw err;
    console.log('Connected To DB');
});
module.exports = connection;
