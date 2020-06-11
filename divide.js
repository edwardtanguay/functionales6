const divide = (x,y) => {
	return x/y;
};

const secondArgumentIsntZero = func => (...args) => {
	if(args[1] === 0) {
		return null;
	}
	return func(...args);
}

const divideSafe = secondArgumentIsntZero(divide);

console.log(divideSafe(10,0));


