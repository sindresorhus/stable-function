declare const stableFn: {
	/**
	Ensure a function is stable, meaning the same input always produces the same output.

	@param count - Number of times to call the `fn`. Default: `1000`.
	@param fn - Function to be tested.
	@returns Whether the output of `fn` was stable.

	@example
	```
	import stableFn = require('stable-fn');

	stableFn(() => true);
	//=> true
	```
	*/
	(fn: () => unknown): boolean;
	(count: number, fn: () => unknown): boolean;

	/**
	Ensure a function is stable, meaning the same input always produces the same output.

	@param count - Number of times to call the `fn`. Default: `1000`.
	@param fn - Function to be tested.
	@returns Returns the first differing output of `fn` or the first output if stable.

	@example
	```
	import stableFn = require('stable-fn');

	let i = 0;
	stableFn.returnValue(100, () => {
		if (++i === 10) {
			return 'bar';
		}

		return 'foo';
	});
	//=> 'bar'
	```
	*/
	returnValue<ReturnType>(fn: () => ReturnType): ReturnType;
	returnValue<ReturnType>(count: number, fn: () => ReturnType): ReturnType;
};

export = stableFn;
