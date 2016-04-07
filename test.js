import test from 'ava';
import fn from './';

test('stableFn()', t => {
	t.true(fn(() => true));

	let i = 0;
	t.false(fn(() => {
		if (++i === 10) {
			return 'bar';
		}

		return 'foo';
	}));
});

test('stableFn.val()', t => {
	t.truthy(fn.val(() => true));

	let i = 0;
	t.is(fn.val(() => {
		if (++i === 10) {
			return 'bar';
		}

		return 'foo';
	}), 'bar');
});
