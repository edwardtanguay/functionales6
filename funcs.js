
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const tasks = [add, subtract, multiply, divide];

tasks.forEach(f => console.log(f(3, 5)));
