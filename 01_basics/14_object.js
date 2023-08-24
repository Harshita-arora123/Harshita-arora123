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

// database value how to use in object
const users = [
    {
    },
    { 
    },
    {
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));     // .keys mtlb kis obj pe method run     keys jo left side me h 
console.log(Object.values(tinderUser));   //  .values right side    
console.log(Object.entries(tinderUser));    // entries   both side   & all are print in arrays

// .hasOwnProperty Determines whether an object has a property with the specified name.
console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true 
console.log(tinderUser.hasOwnProperty('isLogged'));    // false


// de structuring the value of objects & arrays

const course={
    coursename: "js in hindi",
    price : "999",
    courseInstructor: "hani"

}
// course.courseInstructor
const {courseInstructor: instructor}=course    // :instructor likh k chote nam se b access kra skte h
//console.log(courseInstructor);
console.log(instructor);   // we can write this 


// json  works  both object{} & api []
// api  earlier value r in d form of xml ,later value r in d form of json
// json syntax  both values & keys are string
// json to api call?

/*{ 
    "name":  "harshita",                         json syntax without object name
    "coursename" :"js in hindi",
    "price": "free",
} */

[
    {},
    {},
    {}
    
    
]

