var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("my_db2");
  var myquery = { productname: "HP" };
  var newvalues = { $set: {productname: "LG", address: "Canyon 123" } };
  dbo.collection("ticketGenerate").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});