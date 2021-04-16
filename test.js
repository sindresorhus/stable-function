import test from 'ava';
import stableFunction from './index.js';

test('stableFunction()', t => {
	t.true(stableFunction(() => true));

	let index = 0;
	t.false(stableFunction(() => {
		if (++index === 10) {
			return 'bar';
		}

		return 'foo';
	}));
});

test('stableFunction.returnValue()', t => {
	t.truthy(stableFunction.returnValue(() => true));

	let index = 0;
	t.is(stableFunction.returnValue(() => {
		if (++index === 10) {
			return 'bar';
		}

		return 'foo';
	}), 'bar');
});
