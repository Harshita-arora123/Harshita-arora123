// for each loop    is a high order function

const coding = ["js","rb","py","java","cpp"]   

coding.forEach( function(item) {
    //console.log(item);
} )  

coding.forEach( (item)=> {        // arrow function don't need to write function
   // console.log(item);
} ) 

/*function printme(item) {
  console.log(item);  
} */

//coding.forEach(printme)

//coding.forEach (( item,index,arr)=>{        // array or index me print hoga
  //  console.log( item,index,arr);
// })


const myCoding = [
    { languageName : "javascript",
      languageFileName : "js"
    },

    { languageName : "java",
      languageFileName : "java"
    },

    { languageName : "python",
      languageFileName : "python"
    },
]

myCoding.forEach((item) =>{
  //  console.log(item.languageName);
 // console.log(item.languageFileName);
})


// for each  not return the value

const values = coding.forEach((item) => {
  //console.log(item);
  return item           // not return 
})

//console.log(values);




// filter
//const myNums = [1,2,3,4,5,6,7,8,9,10]
//const newNums = myNums.filter((num)=> num >4)   // filter me condition satisfy hoegi then value access   basics of filter
 // const newNums = myNums.filter((num)=>{       // {} scope open krne k bad return likhna hi hota h hmesha ,,,,nhi toh []   mistake
      //   return  num >4  })
//console.log(newNums);


// for each loop    same eg.  filter vala
/*const myNums = [1,2,3,4,5,6,7,8,9,10]         // same print as filter by for each method

 const newNums = []
 myNums.forEach((num)=>{
  if (num>4) {
    newNums.push(num)
  }
 })
 console.log(newNums);  */


 // eg 2  filter

 const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
 
  let userBooks = books.filter ((bk)=> bk.genre === "History")

 //userBooks = books.filter((bk)=> {                       // {}  always return   otherwise not print
    //return bk.publish >= 1995 && bk.genre === "History"
  //})

 console.log(userBooks);