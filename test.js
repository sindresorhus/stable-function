'use strict';
var test = require('ava');
var fn = require('./');

test('stableFn()', function (t) {
	t.assert(fn(function () {
		return true;
	}) === true);

	var i = 0;
	t.assert(fn(function () {
		if (++i === 10) {
			return 'bar';
		}

		return 'foo';
	}) === false);

	t.end();
});

test('stableFn.val()', function (t) {
	t.assert(fn.val(function () {
		return true;
	}));

	var i = 0;
	t.assert(fn.val(function () {
		if (++i === 10) {
			return 'bar';
		}

		return 'foo';
	}) === 'bar');

	t.end();
});
