function internal(shouldReturnValue, count, testFunction) {
	if (testFunction === undefined) {
		testFunction = count;
		count = 1000;
	}

	let currentValue;
	const first = testFunction();

	for (let index = 0; index < count; index++) {
		currentValue = testFunction();

		if (currentValue !== first) {
			return shouldReturnValue ? currentValue : false;
		}
	}

	return shouldReturnValue ? first : true;
}

const stableFunction = internal.bind(null, false);
stableFunction.returnValue = internal.bind(null, true);

export default stableFunction;
