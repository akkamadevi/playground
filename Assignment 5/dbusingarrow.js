var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root" ,
 database: 'my_db'
});
//connection function
con.connect((err)=> {
  if (err){
  console.log("not Connected!");
  }
  else
  console.log("connected");
});
 var sql = "CREATE TABLE desk (productname VARCHAR(255), productno int(100),emailid VARCHAR(255),contactno int(80))";
 con.query(sql, function (err, result) {
   if (err) throw err;
    console.log("1 row is inserted");
 });
 
