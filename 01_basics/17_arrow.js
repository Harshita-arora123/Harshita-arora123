// this  is used for current context         current value chnging 

const user ={
    username : "manik",
    price : 999,

  welcomeMessage : function () {
    console.log(`${this.username},welcome to website`);
    console.log(this);            // this se dono username return huye with price
  }
}

//user.welcomeMessage()
//user.username= "sam"           // current context     value sam hojayegi
//user.welcomeMessage()

//console.log(this);              // only console.log return empty {}    but browser return different answer


/*function chai() {
   let username = "girl"
   console.log(this);                // 
   //console.log(this.username);          
} 
chai()  */


 const chai = () => {                // =>     print {}
    let username = "girl"
    console.log(this);                                             
 }
 
 
//chai()


//() =>{}    syntax of arrow fun.

/*const addtwo = (num1,num2) => {
    return num1+num2
} */

//const addtwo = (num1,num2) =>  (num1+num2)                            //  { return num1+num2 }    implicit return no use of {}return num1+num2
// {}k sth return or without reurn use ()             explicit return  when use of return{}

const addtwo = (num1,num2) => ({username:"samy"})

//console.log(addtwo(3,4));