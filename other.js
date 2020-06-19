const numbers = [1, 2, 3, 4, 5];

const [first] = numbers;
console.log(first);
const [theFirst, theSecond, ...rest] = numbers;
console.log(theFirst);
console.log(theSecond);
console.log(rest);

const copy1 = numbers; // copy1 and numbers point to the same array
const copy2 = [...numbers]; // copy2 is an independent copy of the array
console.log(copy1);
console.log(copy2);
numbers.reverse();
numbers.push(999);
console.log(numbers);
console.log(copy1);
console.log(copy2);