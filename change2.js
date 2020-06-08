const items = [
	{
		name: "aaa",
		total: 34
	},
	{
		name: "bbb",
		total: 33
	},
	{
		name: "ccc",
		total: 14
	},
];
console.log(items);
items.forEach((x) => { x.total = x.total + 1 });

console.log(items);