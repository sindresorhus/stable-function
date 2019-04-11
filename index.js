'use strict';

function stable(shouldReturnValue, count, fn) {
	if (fn === undefined) {
		fn = count;
		count = 1000;
	}

	let currentValue;
	const first = fn();

	for (let i = 0; i < count; i++) {
		currentValue = fn();

		if (currentValue !== first) {
			return shouldReturnValue ? currentValue : false;
		}
	}

	return shouldReturnValue ? first : true;
}

module.exports = stable.bind(null, false);
module.exports.returnValue = stable.bind(null, true);
