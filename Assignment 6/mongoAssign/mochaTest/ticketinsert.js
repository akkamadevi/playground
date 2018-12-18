var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("my_db2");
  var myobj = { productname: "sony", productno: 52, email: "esy@gmail.com", address:"D-NH 12", contact:1268387 };
  dbo.collection("ticketGenerate").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});