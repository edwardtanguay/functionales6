
const createMultiplier = y => x => x * y;

const doubleIt = createMultiplier(2);
const tripleIt = createMultiplier(3);
const quadrupleIt = createMultiplier(4);

console.log(doubleIt(5));
console.log(tripleIt(5));
console.log(quadrupleIt(5));
