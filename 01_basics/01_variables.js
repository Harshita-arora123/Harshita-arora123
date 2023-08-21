const accountId = 12233                   // 2nd word first letter always capital
let accountEmail= "harshita@google.com"   
var accountPassword= "12345"
accountCity = "jaipur"
let accountState;    // we can write without giving any value . it gives undefined

//accountId = 2   not allowed bcz const
accountEmail = " hchc@gmail.com"
accountPassword = "212121"
accountCity = "delhi"

console.log(accountId)
/* prefer not to use var bcz of issue in block space & functional space*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])      //console.table is used to print all variables collectively
