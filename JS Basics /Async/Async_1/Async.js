/**
 * sync 
 * async
 * 2 operations: blocking, non-blocking
 */

/**
 * we have 4 case for async:
 * 1- we have a timer 
 * 2- long-time process => التشفير
 * 3- I/O operations => read and write / files, database, API's
 * 4- async بتكون function لما انا احكيلو انو هاي ال  => async and await
 */
console.log(1) //blocking
console.log(2) //blocking
console.log(3)

const print = () =>{
    console.log("action fired")
    
}

setTimeout(print,1000) //non-blocking

console.log(4) //blocking
console.log(5)//blocking
console.log(6)//blocking