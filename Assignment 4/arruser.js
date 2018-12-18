var user = {
    name: 'hasini',
    printName: function () {
        console.log(this.name);
    }
};
user.printName();



 var user = {
     name: 'hasini',
     printName:  ()=> 
         console.log(this.name)
    
 };
 user.printName();


   var user = {
     name: 'hasini',
	 printName: function () {
	    return() =>console.log(this.name)
   }
   
 };
 user.printMyName()();
