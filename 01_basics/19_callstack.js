//  call stack is most imp topic in interview  
// javascript execution context
// global execution context toh hoga hi hoga             browser me iski value window object aati h
// js is a single threaded


// global execution context 
//  function execution context 
// eval execution context                  only remembered


//  {}   memory execution phase  -- var stored or allocate in memory
//       execution phase   --  execute d program

// eg     how does js execute code ?
        let val1 = 10
        let val2 = 7
        function addnum(num1, num2) {
            let total = num1 + num2
            return total
        }          

        let result1 = addnum(val1,val2)
        let result2 = addnum(10,2)

        /* steps      1)   global execution   -- this               hona hi hona h
                      2)    memory phase                1st cycle
                                 val1 - undefined
                                 val2 - undefined
                                 addnum - defination              ( num1 se leke  total }  tk  definition
                                 result1 - undefined
                                 result 2- undefined


                     3) execution phase 
                       val1 - 10
                       val2 - 7
                       addnum ->  new variable + execution thread  -> delete after global execution
                                  jitni bar fun ayega utni bar memory & execution phase


                                  memory & execution phase        further concept seen in gallery

        */


    // call stack       lifo (last in first out)        last vla sbse phle bhar ayega     ex three()
                                         //   check in browser   sources >  snippet > call stack   but not run
   /*   |               |
        |               |                   
        | three()       |
        | two()         |
        |one()          |
        |_______________|
        |globalexecution|          */