

const currentInputValues = {
	firstName: '',
	lastName: 'Smith',
	zipCode: '',
	state: 'AR'
}

const inputCriteria = {
	firstName: [
		value => value.length >= 2 ? '' : 'First name must be at least 2 characters.',
	],
	lastName: [
		value => value.length >= 2 ? '' : 'Last name must be at least 2 characters.'
	],
	zipCode: [
		value => value.length == 5 ? '' : 'Zip code must be 5 characters.'
	],
	state: [
		value => value.length == 2 ? '' : 'Zip code must be 2 characters.'
	]
};

const getErrorMessages = (input, criteria) => {
	return Object.keys(input).reduce((acc, fieldName) => [
		...acc,
		...criteria[fieldName].map(test => test(input[fieldName]))
	], []).filter(m => m.length > 0);
};

//console.log(Object.keys(currentInputValues));
const errorMessages = getErrorMessages(currentInputValues, inputCriteria);
console.log(errorMessages);