// imediately invoked function expressions
 // global scope k var ya decalration k pollution ko htane k liy

( function chai() {
     console.log(`DB connected`);
})();                               // fun reference krne ki jgh               () ()  is method se b print hojayega             

 // do iife likhne k bad 1st me ; lgana is imp. execute k liye
// chai()


// name iife 
/*( function chaiaurcode() {
    console.log(`DB connected TWO`);
})()         */       


// without name iife
( (name) =>  {                                  // also print by this way
    console.log(`DB connected TWO ${name}`);
})("harry")