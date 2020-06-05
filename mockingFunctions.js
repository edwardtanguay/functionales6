// simple example
const status = "short"; // "short" or "long"
const displayInfo = status == "short"
	? name => console.log(`Hello, ${name}.`)
	: name => console.log(`We welcome you, ${name}.`)
displayInfo("Pierre-Simon");

//realistic example
const DEVELOPMENT = true;
const fetchDataReal = () => {
	// time-intensive operations 
};
const fetchDataTest = () => ({
	name: 'Gideon Mantall',
	birthYear: 1790
});
const fetchData = DEVELOPMENT
	? fetchDataTest
	: fetchDataReal;