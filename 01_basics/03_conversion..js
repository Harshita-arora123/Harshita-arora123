let score=true

console.log(typeof score);
console.log(typeof (score));  // same way

let valueInNumber = Number(score);
console.log(typeof valueInNumber);    // string into number
console.log(valueInNumber);           // NaN    NOT AN NUMBER   aayega  

//"33" => 33
//"33abc" =>  NaN
// true => 1; false => 0

let isLoggedIn = 1    // true

let booleanLoggedIn=Boolean(isLoggedIn)
console.log(booleanLoggedIn);

// true => 1; false => 0
//"" => false
//"hari"=> true

// number into string
let someNumber = 45              // 45 num into stringnode

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

