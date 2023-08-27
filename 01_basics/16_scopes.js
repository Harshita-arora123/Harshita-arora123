//{}   curly braces is called scope
//var c = 300                 // yha var k bad b inside scope print
 let a = 300              // let global vla print hua                 // global scope

if (true){                  // block scope k andr vli value bhar nhi jani chahiye
    let a = 10        
    const b=20
   // console.log("INNER", a);             // inner me block scope vla print
    //var c = 30 
}

/*for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
} */

//console.log(a);       // a is not defined bcz let inside d scope
//console.log(b);         //  b is not defined bcz let inside d scope
//console.log(c);            // var print hojayega but let or const not

//browser or node me global scope r different
// jitni bar {} utni bar scope


//nested scope        nested fun

function one() {
   const username ="mahi" 

    function two() {                       // nested fun    inside fun can access  outside variable
        const website = "youtube" 
      //  console.log(username);   
    }
    //console.log(website);      
    two()
}
one()


if (true) {
    const username = "mohit"
     if(username === "mohit"){
        const website = "youtube"
        //console.log(username+ website);
     }
    // console.log(website);                  it should inside d scope
}
//console.log(username);


//+++++++++++++++++++++++++++++++++++++++++ interesting eg  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addtwo(5));            // access before declare   it is calledd hosting
function addone(num) {
    return num +1
}
//addone(5)


addtwo(5)                       //  access before declare   
const addtwo = function (num) {
return num + 2
}

//addtwo(5)