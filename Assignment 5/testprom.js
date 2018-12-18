var promise = require('promise');

var a= 2;
var b=3;
//svar sum=a+b;
var isSum = function(){
    return  a+b>10 || a+b<10
}
var promise =  new promise((resolve,reject)=>{
    if(isSum())
    {
        resolve("sum is less the 10");
    }
    else{
        reject("sum is greater then 10");
    }
});
promise.then((msg)=>{
    console.log(msg);
},(errmsg)=>{
    console.log(errmsg);
});





