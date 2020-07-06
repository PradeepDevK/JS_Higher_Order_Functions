/**
 * Creating an output with array elements
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 10];
let result = numbers.reduce((acc, val) => {
   return acc+val;
}, 0);
console.log(result);