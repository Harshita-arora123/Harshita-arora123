/*class user{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
     return `${this.password}abc`   
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new user("chai","chai@gmail.com","123")
console.log(chai.encryptPassword());                        // 123abc    show
console.log(chai.changeUsername());                        // CHAI   */


// behind d scene         without use of class            same output 

function user(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}
user.prototype.encryptPassword= function(){
       return `${this.password}abc`   
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new user("tea","tea@gmail.com","123")
console.log(tea.encryptPassword());                        // 123abc    show
console.log(tea.changeUsername());                        // TEA
