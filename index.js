'use strict';

function stable(val, count, fn) {
	if (fn === undefined) {
		fn = count;
		count = 1000;
	}

	var current;
	var first = fn();

	for (var i = 1; i < count; i++) {
		current = fn();

		if (current !== first) {
			return val ? current : false;
		}

	}

	return val ? first : true;
}

module.exports = stable.bind(null, false);
module.exports.val = stable.bind(null, true);
