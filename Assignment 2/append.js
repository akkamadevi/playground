var fs = require('fs');
fs.appendFile("test.txt","one who wants to were the crown, Bear the crown",function(err,data){
    if(err)
    {
        return console.error(err);
    }
    console.log("successfully appended");
})