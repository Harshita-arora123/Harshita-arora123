let myName = "happy     "
let myChannel = "chai    "

console.log(myName.trim().length)
//console.log(myName.trueLength());       truelength

let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
     console.log(`Spidy power is ${this.spiderman}`);   
    }
}
Object.prototype.hitesh=  function () {                  // hitesh  OBJECT add in prototype
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh= function () {    //array object se pass hoga check it   array not pass but add in vdo  
    console.log(`Hitesh says hello`);
}

//heroPower.hitesh()
//myHeroes.hitesh()
//myHeroes.heyhitesh()
//heroPower.heyHitesh()       

// inheritance                        proto k inside proto 
// outdated process of prototype

const user = {
    name: "chai",
    email : "chai@google.com"
}

const teacher ={
    makeVideo: true
}

const TeachingSupport ={
    isAvailable : false,
}

const TASupport ={
    makeAssignment:"js assignment",
    fullTime: true,
    __proto__: TeachingSupport           // any value access in proto
}

teacher.__proto__ = user                 // any value access in proto

//modern syntax method
Object.setPrototypeOf(TeachingSupport,teacher)

let anotherUsername = "chaiorcode     "

String.prototype.trueLength= function(){
    console.log(`${this}`);
   // console.log(`${this}`.name);                            no access of this & nmae
    console.log(`True length is:${this.trim().length}`);
}
anotherUsername.trueLength()
"happy".trueLength()                         // this ne jis ko buaya vo sb print
"iceTea".trueLength()