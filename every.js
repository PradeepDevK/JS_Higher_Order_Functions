/**
 * To check whether every element on Array meets a condition
 */

const numbers = [1, 30, 39, 29, 10, 13];
const isBelowThreshold = (num) => num < 40;
console.log(numbers.every(isBelowThreshold));