const Person = ({ name, age, job }) => {
	let _name = name;
	let _age = age;
	let _job = job;

	return {
		getName: () => _name,
		getAge: () => _age,
		getJob: () => _job,

		setName: name => _name = name,
		setAge: age => _age = age,
		setJob: job => _job = job
	};
}

const p = Person({ name: 'Maurice', age: 73, job: 'writer' });
console.log(p.getName());
p.setName("Angelo");
console.log(p.getName());