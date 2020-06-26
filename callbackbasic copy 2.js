const shop = (items) => {
	const p = [];
	items.forEach(x => p.push(`[${x} project]`));
	return p;
}

console.log('sending backend shopping for data');
const projects = shop(['milk', 'cheese', 'salt']);
console.log(`user is back and delivered: ${projects.join(', ')}`);