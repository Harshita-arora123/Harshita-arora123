// for of

//["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {             // yha object mtlb kis chiz pe loop lgaya ja rha h
    //console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// maps    is for unique values not repeted & seriel wise                loop on map

const map = new Map()
map.set('IN', "india")
map.set('USA',"United states of america")
map.set('Fr',"France")
map.set('IN', "india")

console.log(map);

/*for (const key of map) {             // print in array form
    console.log(key);
}  */

for (const [key,value] of map) {           // print in different format
    //console.log(key, ':-', value);
}

// loop on object
const myObject = {
    'game1': 'nfs',
    'game2': 'mario' 
}

for (const [key,value] of myObject) {              // object is not iterable with forof loop
    console.log(key, ':-', value);
}