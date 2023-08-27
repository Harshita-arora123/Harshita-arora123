const myObject = {                 // object iterable with for in loop
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift",
}

for (const key in myObject) {     // it gives key  js cpp rb swift
   // console.log(key);
}

for (const key in myObject) {     // it gives value of object
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}


// array in forin loop
const programming =node 01_basics/26_forin.js   
for (const key in programming) {
    //console.log(programming[key]);
}


// map           not iterable in forin loop
/*const map = new Map()
map.set('IN', "india")
map.set('USA',"United states of america")
map.set('Fr',"France")
map.set('IN', "india")


for (const key in map) {
   console.log(key);
} */

