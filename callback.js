const shop = (items, cbFound, cbFinished) => {
	let i = 0;
	const id = setInterval(() => {
		cbFound(items[i]);
		i++;
		if (i == items.length) {
			cbFinished('now finished');
			clearInterval(id);
		}
	}, 2000);

}

const foundTheItem = (item) => console.log(`They found ${item}`);

console.log('sending backend shopping for data');
shop(['milk', 'cheese', 'salt'], foundTheItem, (message) => {
	if (message.includes('difficult')) {
		console.log('done for the day');
	} else {
		console.log('done, ' + message);
	}
});
console.log('the user can continue to use the interface, i.e. shop() is non-blocking');


