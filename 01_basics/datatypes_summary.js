// primitive
// 7 types:  string, number, boolean, null, undefined, symbol(uniqness), BigInt(used for some scientific values)

const score = 100          //number
const scoreValue= 100.3    //number
const isLoggedIn= false    // boolean
const outsideTemp = null
let userEmail;

const Id=Symbol("123")          // symbol
const anotherId=Symbol("123")
console.log(Id==anotherId);   // false     return value r not same

const bigNumber = 345678998425n             // last n is bigint

// js is a dynamic typed language           it allows for changes & modifications during run time.


// reference or non primitive datatype
//array,objects,functions                                          objects & browser events  master in js

const heros = ["doll","barbie",myself]   // array
const myObj = {   // object type in {}
    name: "manika",
    age:19,
}

