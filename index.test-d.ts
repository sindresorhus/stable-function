import {expectType} from 'tsd';
import stableFn = require('.');

expectType<boolean>(stableFn(() => true));
expectType<boolean>(stableFn(100, () => true));

let i = 0;
expectType<'bar' | 'foo'>(
	stableFn.returnValue(() => {
		if (++i === 10) {
			return 'bar';
		}

		return 'foo';
	})
);
expectType<'bar' | 'foo'>(
	stableFn.returnValue(100, () => {
		if (++i === 10) {
			return 'bar';
		}

		return 'foo';
	})
);
