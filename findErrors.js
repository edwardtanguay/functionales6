

const inputCriteria = {
	firstName: [
		value => value.length >= 2 ? '' : 'First name must be at least 2 characters.'
	],
	lastName: [],
	zipCode: [],
	state: [],
};