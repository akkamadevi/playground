var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root" ,
 database: 'my_db'
});
//connection function
 var func =  (function(err) {
    if(err)
    console.log(err);
    else{
        console.log("connected");
    }
});
con.connect(func());
