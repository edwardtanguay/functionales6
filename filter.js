const numbers = [1, 2, 3, 5, 7, 45, 67, 88, 34, 65, 34, 23, 65, 23, 42, 22, 25];
const evenNumbers = numbers.filter(x => x % 2 === 0);
const oddNumbers = numbers.filter(x => x % 2 !== 0);

console.log(numbers);
console.log(evenNumbers);
console.log(oddNumbers);

const people = [
	{
		name: "Petrarch",
		died: 1374
	},
	{
		name: "Vincent Martín y Soler",
		died: 1806
	},
	{
		name: "Henri Dunant",
		died: 1910
	},
];

const modernPeople = people.filter( x => x.died > 1800);
console.log(modernPeople);

const minLength = len => x => x.length >= len;

const longNames = people.map(x => x.name).filter(minLength(10));
console.log(longNames);

const longNamedPeople = people.filter( x => x.name.length >= 10);
console.log(longNamedPeople);
