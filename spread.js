// objects

const person = {
	name: "Paul Dirac",
	age: 40,
	hairColor: 'brown'
};

const careerData = {
	title: 'physicist',
	area: 'quantum theory'
};

const nationalityData = {
	country: 'Britain',
	workedIn: 'USA'
};

const updates = {
	hairColor: 'black'
}

const personWithCareerData = {
	...person,
	...careerData,
	country: nationalityData.country,
	...updates
};

console.log(personWithCareerData);

// arrays

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [
	0,
	...numbers,
	6, 7, 8
]

console.log(newNumbers);
