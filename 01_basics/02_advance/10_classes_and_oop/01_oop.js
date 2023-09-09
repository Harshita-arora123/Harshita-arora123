// object literal

const user= {
    username : "happy",             // always comma 
    loginCount: 8,
    signedIn : true,

    getUserDetails: function () {
       //console.log("Got user details from database"); 
       //console.log(`username : ${username}`);      // show error bcz not known current context means which username will shown  
       // console.log(`username : ${this.username}`);   // .this is important kuki current context isse pta chlega konsa vla username h
       console.log(this);                               // all current context stored in memeory
    }
}
console.log(user.username);
//console.log(user.getUserDetails());
console.log(this);                   // show {} empty brackets bcz ye global execution me h


// construction         always gives new instance

/*const promiseOne = new Promise()
const date = new date()                   // new is a keyword  */


function User(username, loginCount,isLoggedIn) {
   this.username=username                            // username upr b h pta lgane k liye use  .this
   this.loginCount=loginCount
   this.isLoggedIn=isLoggedIn


   this.greeting = function () {
    console.log(`welcome ${this.username}`);              //
   }

  // return this               // object pass on   all value excess by return         if we don't write return  it will pass by default
}

const userOne = new User("happy",12,true)
const userTwo = new User("chaiorcode",11,false)          // code overwrite that's why we hv to use "new" keyword it's called constructor
console.log(userOne.constructor);                  // constructor   gives reference of own value   eg.       [function:User]
//console.log(userOne);
//console.log(userTwo);


// new 