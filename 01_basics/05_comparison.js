/*console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1); */

console.log("2">1);
console.log("02">1);

// avoid this type of comparison bcz it creates confusion
console.log(null>0);       //false
console.log(null == 0);    // false
console.log(null >= 0);   // true    null convert into zero

console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined<0);     // false

//=== strictly check data types

console.log("2" === 0);      // false  bcz string 