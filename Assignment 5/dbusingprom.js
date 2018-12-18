var mysql = require('mysql');
var promise = require('promise');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root" ,
  database: 'my_db'
});
var promise = new promise(function(resolve,reject){

        if(true){
            
            resolve("Connected to DB");
        }
        else{
            reject('Connection failed');
            }   
});
            promise.then((msg) => {
                console.log(msg);
            }, (errormsg) => {
                console.log(errormsg);
            });
           
            con.connect(promise);
            con.connect((err)=> {
                if (err){
                console.log("Connected!");
                }
                else
                console.log("not connected");
              });
        

