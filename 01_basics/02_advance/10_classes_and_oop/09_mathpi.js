 // is math pi value can change or not?         interview ques.

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

//console.log(descripter);

//console.log(Math.PI);      
//Math.PI = 5          
//console.log(Math.PI);     

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
    console.log("chai nhi bani");     
  }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));   // chai k andr ki property b deni hogi jse name

Object.defineProperty(chai,'name',{                // writable & enumerable true into false
   // writable :false,
    enumerable: false,                           // iteration close jbi naame ki value nhi aarhi   true krenge toh iteration run 

}) 

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {       
    if(typeof value !== 'function')                                                      
   console.log(`${key}: ${value}`);   

}