'use strict';

function stable(returnValue, count, fn) {
	if (fn === undefined) {
		fn = count;
		count = 1000;
	}

	let currentValue;
	const first = fn();

	for (let i = 0; i < count; i++) {
		currentValue = fn();

		if (currentValue !== first) {
			return returnValue ? currentValue : false;
		}
	}

	return returnValue ? first : true;
}

module.exports = stable.bind(null, false);
module.exports.returningValue = stable.bind(null, true);
