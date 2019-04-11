import test from 'ava';
import stableFn from '.';

test('stableFn()', t => {
	t.true(stableFn(() => true));

	let i = 0;
	t.false(stableFn(() => {
		if (++i === 10) {
			return 'bar';
		}

		return 'foo';
	}));
});

test('stableFn.val()', t => {
	t.truthy(stableFn.returningValue(() => true));

	let i = 0;
	t.is(stableFn.returningValue(() => {
		if (++i === 10) {
			return 'bar';
		}

		return 'foo';
	}), 'bar');
});
