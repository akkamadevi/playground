var command = require('yargs').argv;
var fs = require('fs');
if(command.cmd=='create')
{
    fs.writeFile('file.txt',command.product,function(err,data){
        if(err) throw err;
        console.log("saved");
        
    });
}

if(command.cmd=='save')
{
    fs.appendFile('file.txt',command.product,function(err,data){
        if(err) throw err;
        console.log('saved');
    });
}
