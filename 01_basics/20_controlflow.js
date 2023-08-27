// if 

/*if (true) {                  // code execute
    
} */

/* if (false) {                   code not executed if false     
    
}   */

const isuserLoggedIn = true

/*if (2 === "2") {                   //  == executed    === not executed bcz === check type of number
  console.log("executed");  
} */

// <,>,<=,>=,!=, ==,===


/*const temperature = 41
if (temperature===51) {
    console.log( "less than 50");  
}  else {
    console.log("temprature is greater than 50");
}
console.log("executed");                            //  bhar vla execute hoga  */

// scope related         var global scope me b run hota h that's why not use of var

/*const score = 200
if (score>100) {
    let power = "fly"
    console.log(` User power: ${power}`);
}
console.log(` User power: ${power}`);      // let k sth not executed  var k sth globally executed */

// shorthand notation

const balance =1000
//if (balance >500) console.log("test"),console.log("test2");            // unreadable code   // implicit code means ye {} hmne maanliya 

// nesting
/*if (balance <500) {
   console.log("less than 500");  
} else if (balance <750) {
    console.log("less than 750"); 
}else if (balance <900) {
    console.log("less than 900");
}else if (balance <1200) {
    console.log("less than 1200");
} */


const  userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3){             //  && ansd uses for all 
console.log("Allow  to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail || ){         //  || or uses for one      
    console.log(" userLoggedIn");
    }

    
    
