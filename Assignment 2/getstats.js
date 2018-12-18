var fs = require('fs');
fs.stat('input.txt',function(err,stats){
    console.log('going to open file');
    if(err)
    {
        return console.error(err);
    }
    console.log(stats);
    console.log('file is getting open');
    console.log('isFile'+ stats.isFile());
    console.log('isDirectory' + stats.isDirectory());
    console.log('isCharacterDevice'+stats.isCharacterDevice);
});