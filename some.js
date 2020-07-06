/**
 * Checking if an array contains a value
 */

let fruits = [ 'apple', 'mango', 'cherry'];
let isApplePresent = fruits.some(fruit => fruit === 'apple');
if (isApplePresent) {
    console.log('Apple found!');
}