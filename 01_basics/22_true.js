//  true or false assume 


const userEmail = []
 if (userEmail) {
    //console.log("got user email");
 } else {
    // console.log("don't hv user email");  
 }

// falsy value =>        false, 0,-0, BigInt 0n, "", null undefined, NaN

// truthy values =>      "false", "0" , " " one space , [], {}, function(){}


/*const userName= []              // array is true that's why executed
if (userEmail.length === 0) {
    console.log("array is empty");
}  */

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
   //console.log("object is empty"); 
}

/*false == 0   //  true
false == ''   // true
0 == ''       // true  */


// nullish coalescing operator (??) : null & undefined
//logical operator that returns its RHS operand when its LHS operand is null or undefined, and otherwise returns its LHS operand.
  //null or undefined ho tb ryt value print  otherwise left print
  
let val1;
 //val1 = 5 ?? 10
 val1 = null ?? 10     
 //val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

