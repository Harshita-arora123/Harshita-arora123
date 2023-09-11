/*const accountId = 12233                   // 2nd word first letter always capital
let accountEmail= "harshita@google.com"   
var accountPassword= "12345"
accountCity = "jaipur"
let accountState;    // we can write without giving any value . it gives undefined

//accountId = 2   not allowed bcz const
accountEmail = " hchc@gmail.com"
accountPassword = "212121"
accountCity = "delhi"

console.log(accountId)
// prefer not to use var bcz of issue in block space & functional space
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])  */     //console.table is used to print all variables collectively

// class user
const User = {
    _email :'h@hc.com',        // _underscore k bad private properties bnjati h not access by user easily
    _password : "abc",

          get email(){
          return this._email.toUpperCase()  
        },

        set email(value){
            this._email= value
        }
    }

    const tea= Object.create(User)
    console.log(tea.email);