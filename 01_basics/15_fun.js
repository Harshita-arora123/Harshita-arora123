

function sayMyName(){
    console.log("h");
    console.log("a");
    console.log("p");
    console.log("p");
    console.log("y");
}

//sayMyName()               // saymyname is a reference & () is a execution

/*function addTwoNumbers(number1,number2){                      // num1,num2 are parameters jo b hm fun ka input bnate h
    console.log(number1+number2);                             
}
addTwoNumbers(3 + 5)                                       // fun call value name is arguments
//addTwoNumbers(3 + "4")   
//addTwoNumbers(3 + null)      */


function addTwoNumbers(number1,number2){                    
  /* let result = number1 + number2     
   console.log("happy");   
   return result         // return k bad kuch b print nhi hota console.log bhi nhi   */
   return number1 + number2           // return k bad  store in variable  not from cons.log             
}

const result = addTwoNumbers(3, 5)     
//console.log("Result:", result);




function loginUserMessage(username ="sam") {           // ="sam"  likha h toh uski value print hojayegi
    if(!username){                //username===undefined          same ans  ! username
        console.log("pls enter a username");
        return
    }

 return `${username} just logged in`
}

 //console.log(loginUserMessage("heena"));   // username is not defined
 //console.log(loginUserMessage("hitesh"));       // sam value se overwrite hojayegi 


 // shooping cart fun

 function calculateCartPrice(val1,val2, ...num1) {          // rest or spread operator ...  print all values in d form of array
     return num1                                              // val1 or val2 ko chd k rest print
 }   
 console.log(calculateCartPrice(200,400,500,2000));

 // objects
 const user= {
    username:"harshu",
    price : 199,
 }
 function handleobject(anyobject) {
   // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 }
 //handleobject(user)
handleobject({                 // we can pass direct object
    username:"sam",
    price: 100
})

//array

const myNewArray = [200,400,600,700]
function returnSecondValue(getArray) {
    return getArray[1]               // value position
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,800]));     // direct pass