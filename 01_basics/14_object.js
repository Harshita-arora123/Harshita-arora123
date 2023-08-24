//const tinderUser = new Object()           {}  return empty {}
const tinderUser={}           //   also return empty {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);     

const regularUser =  {
    email: "some@gmail.com",
    fullname :{                        // nested objects  
          userfullname: {
            firstname: "happy",
            lastname: "choudhary",
        }
    } 
}

//console.log(regularUser.fullname?.userfullname.firstname.lastname);    // ? is send by api  bcz fullname exist or not

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

//.assign
//const obj3 = {obj1,obj2}                 // return nested objects
//const  obj3 = Object.assign({},obj1,obj2)     // return new objects    {} is target & obj1,2,4 is source  so we hv to use {}
//spread operator   ... , ...
const obj3 ={...obj1, ...obj2}
console.log(obj3);         


