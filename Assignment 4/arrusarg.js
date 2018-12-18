 var user = 
 {
     name:'hasini',
     printName: ()=>
     console.log(this.name)
     console.log(arguments)
 }
 user.printName(1,2,3);



var user = 
{
    name:'hasini',
    printName: function(){
    console.log(this.name)
    console.log(arguments)
    }
}
user.printName(1,2,3);
