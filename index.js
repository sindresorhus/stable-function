'use strict';

module.exports = function (count, fn) {
	if (fn === undefined) {
		fn = count;
		count = 1000;
	}

	var first = fn();

	for (var i = 1; i < count; i++) {
		if (fn() !== first) {
			return false;
		}
	}

	return true;
};

module.exports.val = function (count, fn) {
	if (fn === undefined) {
		fn = count;
		count = 1000;
	}

	var current;
	var first = fn();

	for (var i = 1; i < count; i++) {
		current = fn();

		if (current !== first) {
			return current;
		}
	}

	return first;
};
