'use strict';

function stable(count, fn, val) {
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

module.exports = function (count, fn) {
	return stable(count, fn, false);
};

module.exports.val = function (count, fn) {
	return stable(count, fn, true);
};
