const sayHello = () => console.log('Hello.');
const sayHelloTo = name => console.log(`Hello, ${name}.`);
const add = (x, y, z) => console.log(`${x} + ${y} + ${z} = ${x + y + z}`);
const funcs = [sayHello, sayHelloTo, add];

const showFunctionInfo = func => {
	console.log('');
	console.log(func.name);
	console.log(func.length);
	console.log(func.toString());
	if (func.length == 0) {
		func.call(null);
		func.apply(null,[]);
	}
	if (func.length == 1) {
		func.call(null,'Ptolomeo');
		func.apply(null,['Ptolomeo']);
	}
	if (func.length == 3) {
		func.call(null, 1, 2, 3);
		func.apply(null, [1, 2, 3]);
	}
};

funcs.forEach(x => showFunctionInfo(x));

addOne = add.bind(null, 1);
addOne(4,5);
