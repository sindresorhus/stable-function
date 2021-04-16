import {expectType} from 'tsd';
import stableFunction from './index.js';

expectType<boolean>(stableFunction(() => true));
expectType<boolean>(stableFunction(100, () => true));

let index = 0;
expectType<'bar' | 'foo'>(
	stableFunction.returnValue(() => {
		if (++index === 10) {
			return 'bar';
		}

		return 'foo';
	})
);
expectType<'bar' | 'foo'>(
	stableFunction.returnValue(100, () => {
		if (++index === 10) {
			return 'bar';
		}

		return 'foo';
	})
);
