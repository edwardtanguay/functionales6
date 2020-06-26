const shop = (items) => {
	const p = [];

	let i = 0;
	const id = setInterval(() => {
		const item = `[${items[i]} product]`;
		console.log('AT STORE: got ' + item)
		p.push(item);
		i++;
		if (i == items.length) {
			clearInterval(id);
			console.log('NOW ACTUALLY FINISHED, and have ' + p.join(', '));
		}
	}, 2000);
	return p;
}

console.log('sending backend shopping for data');
const projects = shop(['milk', 'cheese', 'salt']);
console.log(`user has:`);
console.log(projects);