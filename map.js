const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
const doubled = numbers.map(x => x * 2);
const tripleIt = x => x * 3;
const tripled = numbers.map(tripleIt);

console.log(numbers);
console.log(doubled);
console.log(tripled);

const people = [
	{
		name: "George Romanes",
		country: "Canada"
	},
	{
		name: "Syngman Rhee",
		country: "South Korea"
	},
	{
		name: "Harry Hopkins",
		country: "USA"
	}
];

const names = people.map(x => x.name);

const extendedPeople = people.map(x => {
	const pieces = x.name.trim().split(" ");
	return {
		firstName: pieces[0],
		lastName: pieces[1],
		isCanadian: x.country === "Canada"
	}
});

console.log(people);
console.log(names);
console.log(extendedPeople);