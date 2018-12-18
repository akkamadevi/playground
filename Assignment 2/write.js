var fs = require('fs');
fs.writeFile("test.txt","hello my name is hasini",function(err,data){
    if(err)
    {
        return console.error(err);
    }
    console.log("successfully written");
});