
function countIt(items) {
	return items.length;
}

const countIt2 = function (items) {
	return items.length + 1;
}

const countIt3 = (items) => {
	return total = items.length + 2;
};

const countIt4 = (items) => items.length + 3;

const countIt5 = items => items.length + 4;

const sayHello = () => "hello";

const getAuthor = () => ({
	firstName: "Maruice",
	lastName: "Merleau-Ponty"
});

const numbers = [1, 2, 3, 4, 5];

console.log(countIt(numbers));
console.log(countIt2(numbers));
console.log(countIt3(numbers));
console.log(countIt4(numbers));
console.log(countIt5(numbers));
console.log(sayHello());
console.log(getAuthor());
