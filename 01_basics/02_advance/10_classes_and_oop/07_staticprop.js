class User{
    constructor(username){
        this.username
    }


logMe(){                                              // logme ki access hogyi yha se
    console.log(`username : ${this.username}`);
}

  static createId(){                       // static us method ya property ko access hone se rokta h
    return `123`
 }
}
 const happy = new User("happy")
// console.log(happy.createId());              // 123




 class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
 }

 const iphone = new Teacher("iphone", "i@phone.com")
 console.log(iphone.createId());                        // not access bcz createid k aage static lga h that will stop access