
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

const process = (x, y, func) => func(x, y);

console.log(process(5, 4, add));
console.log(process(5, 4, subtract));
console.log(process(5, 4, Math.max));
console.log(process(5, 4, (x, y) => x * y));