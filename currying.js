const _ = require('lodash');

// theory

const add = (x, y, z) => x + y + z;
console.log(add(1, 4, 3));

const addPartial = x => (y, z) => add(x, y, z);
const add5 = addPartial(5);
console.log(add5(3, 2));

const addCurry = x => y => z => add(x, y, z);
console.log(addCurry(1)(4)(3));


// example

function log(date, importance, message) {
	console.log(`[${_.padStart(date.getHours(), 2, '0')}:${_.padStart(date.getMinutes(), 2, '0')}] [${importance}] ${message}`);
}
log(new Date(), 'high', 'acceXssed text.txt');
log = _.curry(log);
log(new Date('2020-01-31 02:15:00'))('low')('ok');
const logNow = log(new Date());
logNow('medium', 'logging test');
logNow('DEBUG', 'before loading');
logNow('DEBUG', 'after loading');
const logDebug = logNow('DEBUG');
logDebug('during loading');