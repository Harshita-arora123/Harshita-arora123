class User{
    constructor(email, password){             // constructor b value set krta h or setter b  race lg jati h dono me
        this.email = email;
        this.password = password
    }
get email(){                                     // get always return value
    return this._email.toUpperCase()           // use _ underscore to access values 
}
set email(value){ 
   this._email= value                 // sirf value access hoegi get me   

}


get password(){
    return `${this._password}harshita`
 // return this._password.toUpperCase()
}

set password(value){ 
    this._password= value                 // sirf value access hoegi get me   
  //this._password= value.toUpperCase()                                                        // assitis value nhi rkh skte  use set value by this method
}  
}
const happy = new User("h@happy.ai","abc")
console.log(happy.password);
console.log(happy.email);