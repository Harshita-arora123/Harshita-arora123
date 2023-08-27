// for loop

for (let index = 0; index <= 10; index++) {
    const element = index;

    if (element == 5) {
       //console.log("5 is best number");     // phle ye access then next console
    }
   // console.log(element);
    }

   // console.log(element);    bhar print nhi hoga only in block space

  for (let i = 1; i <= 10; i++) {
    //console.log(`outer loop value: ${i}`);
    
for (let j = 1; j <= 10; j++) {
   //console.log(`inner loop value ${j} and inner loop ${i}`);
  // console.log(i +'*'+ j + '=' + i*j) ;
} 
}


// array 

let myArray = ["flash","batman","superman"]
//console.log(myArray.length);                            // to know length

for (let index = 0; index < myArray.length; index++) {      // <=  nhi likh skte    i++ must imp
    const element = myArray[index];
     //console.log(element);
}


// break & continue

for (let index = 1; index <= 20; index++) {
    if (index== 5) {
        console.log(`detected 5`);
        break;
    }
console.log(`value of i is ${index}`);
    }


    //continue
    for (let index = 1; index <= 20; index++) {
        if (index== 5) {
            console.log(`detected 5`);                 // 5 not print
            continue;
        }
    console.log(`value of i is ${index}`);
        }


        