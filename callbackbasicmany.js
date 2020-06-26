wait = function (ms) {
	var start = new Date().getTime();
	let now = 0;
	let difference = 0;
	for (var i = 0; i < 1e17; i++) {
		now = new Date().getTime();
		difference = now - start;
		if (difference > ms) {
			break;
		}
	}
}

const shop = (items) => {
	const p = [];
	items.forEach(x => {
		p.push(`[${x} project]`);
		wait(2000);
	});
	return p;
}

console.log('sent shopper shopping');
const projects = shop(['milk', 'cheese', 'salami']);
console.log(`shopper is back and delivered: ${projects.join(', ')}`);