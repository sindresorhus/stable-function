declare const stableFunction: {
	/**
	Ensure a function is stable, meaning the same input always produces the same output.

	@param count - Number of times to call the `testFunction`. Default: `1000`.
	@param testFunction - Function to be tested.
	@returns Whether the output of `testFunction` was stable.

	@example
	```
	import stableFunction from 'stable-fn';

	stableFunction(() => true);
	//=> true
	```
	*/
	(testFunction: () => unknown): boolean;
	(count: number, testFunction: () => unknown): boolean;

	/**
	Ensure a function is stable, meaning the same input always produces the same output.

	@param count - Number of times to call the `testFunction`. Default: `1000`.
	@param testFunction - Function to be tested.
	@returns Returns the first differing output of `testFunction` or the first output if stable.

	@example
	```
	import stableFunction from 'stable-fn';

	let index = 0;
	stableFunction.returnValue(100, () => {
		if (++index === 10) {
			return 'bar';
		}

		return 'foo';
	});
	//=> 'bar'
	```
	*/
	returnValue<ReturnType>(testFunction: () => ReturnType): ReturnType;
	returnValue<ReturnType>(count: number, testFunction: () => ReturnType): ReturnType;
};

export default stableFunction;
