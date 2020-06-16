const customMap = (arr, func) => {
	let ra = [];
	for (let i = 0; i < arr.length; i++) {
		const item = func(arr[i]);
		ra.push(item);
	}
	return ra;
};

const monitors = [
	{
		name: "Dell",
		price: 432,
		date: '2020-03-23'
	},
	{
		name: "Samsung",
		price: 323,
		date: '2020-03-22'
	},
	{
		name: "Dell",
		price: 112,
		date: '2020-04-23'
	},
	{
		name: "Dell",
		price: 543,
		date: '2020-03-12'
	},
];

const titles = customMap(monitors, x => `${x.name} (${x.price},00 €)`);
console.log(titles);