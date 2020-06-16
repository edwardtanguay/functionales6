const numbers = [5, 4, 1, 7, 3];

const sum = numbers.reduce((acc, x) => {
	console.log(`acc is ${acc}`);
	console.log(`x is ${x}`);
	return acc + x;
}, 0);

console.log(sum);

// send functions

const addNumbers = (acc, x) => acc + x;
const multiplyNumbers = (acc, x) => acc * x;

const sum2 = numbers.reduce(addNumbers, 0);
console.log(sum2);
const product = numbers.reduce(multiplyNumbers, 1);
console.log(product);