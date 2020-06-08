const createFunction = () => {
	const x = 5;
	return () => console.log(`the value is ${x}`); 
};

const func = createFunction();

func();