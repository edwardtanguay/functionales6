

const currentInputValues = {
	firstName: 'd',
	lastName: 'Smith',
	zipCode: '33333',
	state: 'AR'
}

const inputCriteria = {
	firstName: [
		value => value.length >= 2 ? {} : [{ fieldName: 'firstName', error: 'First name must be at least 2 characters.' }],
	],
	// firstName: [
	// 	value => !value.includes(',') ? {} : { fieldName: 'firstName', error: 'First name may not contain a comma.' },
	// ],
	// firstName: [
	// 	value => value.length < 50 ? {} : { fieldName: 'firstName', error: `First name is ${value.length} characters but must be less than 50 characters.` },
	// ],
	lastName: [
		value => value.length >= 2 ? {} : { fieldName: 'lastName', error: 'Last name must be at least 2 characters.' },
	],
	zipCode: [
		value => value.length == 5 ? {} : { fieldName: 'zipCode', error: 'Zip code must be 5 characters.' },
	],
	state: [
		value => value.length == 2 ? {} : { fieldName: 'state', error: 'State must be 2 characters.' }
	]
};

const getErrorMessages = (input, criteria) => {
	return Object.keys(input).reduce((acc, fieldName) => [
		...acc,
		...criteria[fieldName].map(test => test(input[fieldName]))
	], []).filter(obj => Object.keys(obj).length !== 0 || obj.constructor !== Object);
};

//console.log(Object.keys(currentInputValues));
const errorMessages = getErrorMessages(currentInputValues, inputCriteria);
console.log(errorMessages);