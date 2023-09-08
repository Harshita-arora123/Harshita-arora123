
// promise 1
const promiseOne = new Promise(function (resolve,reject) {
    // do an async task
    //DB calls, cryptography , network
    setTimeout(function () {
        console.log('Async task is complete');    // async task execute then execut promise task
        resolve();
    },1000)
})

promiseOne.then(function() {              //.THEN ko connect krne k liye resolve()use krna hoga
   console.log("Promise consumed"); 
})

// promise 2
new Promise(function (resolve,reject) {
      setTimeout(function () {
        console.log('Async task 2');    // async task execute then execut promise task
        resolve();
    },1000)
}).then(function() {              //.THEN ko connect krne k liye resolve()use krna hoga
    console.log("async 2 resolved"); 
 })
 
 // promise 3
 const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve({username: "Chai", email: "chai@example.com"});   // resolve me jo parametre pas hoga vo console me mil jayega
    },1000)                                                       // network req bhji vo file access hui reject or resolve
})

promiseThree.then(function(user) {             
   console.log(user); 
})

//promise 4
const promiseFour = new Promise(function (resolve,reject) {
    setTimeout(function(){
        let error = true;                        // true se error & false se print username
        if(!error){
            resolve({username: "happy", password: "123"})
        } else{
            reject('ERROR : Something went wrong')
        }
    },1000)
}) 
promiseFour
.then((user)=> {
console.log(user);
return user.username
})
.then((username)=>{                         // .then chaining
    console.log(username); 
})
.catch(function (error) {                 // error detecting use .catch()
    console.log(error);  
}).finally(()=>console.log("the promise is either resolved or rejected"))         // finally hoega hi hoega


// promise 5 
const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(function(){
        let error = true;                        // true se error & false se print username
        if(!error){
            resolve({username: "javascript", password: "123"})
        } else{
            reject('ERROR : js went wrong')
        }
    },1000)
}) 

//another way to accept d promise use async & await             error ayega then use try & catch method
async function consumePromiseFive() {
    try{                                        // try & catch very useful    we can use .then()
    const response = await promiseFive
      console.log(response);
} catch(error){
    console.log(error);
}
}
consumePromiseFive()

/*async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response);

        const data =await response.json()  // res.json convrt hone me tym lgta h isley wait krana pdega
       console.log(data);
    } catch (error) {
       console.log("E:", error); 
    }
}
getAllUsers() */

// use .then() method      & fetch topic


fetch('https://api.github.com/users/hiteshchoudhary')      // ye fetch sbse phle print hora h upr likhe hue or program se b phle aisa ku???
.then((response)=>{
    return response.json()
})
.then((data)=>{                     // is then me jo value return hui vhi execute hogi  or jb tk first then compl hoga tbhi next then execute
    console.log(data);
}).catch((error)=>{
   console.log(error);
})


// A fetch() promise does not reject on HTTP errors (404, etc.). 