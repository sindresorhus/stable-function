# stable-function

> Ensure a function is stable, meaning the same input always produces the same output

Useful for stress testing functions in your unit tests to make sure their behaviors are consistent.

## Install

```sh
npm install stable-function
```

## Usage

```js
import stableFunction from 'stable-function';

stableFunction(() => true);
//=> true

let index = 0;
stableFunction.returnValue(100, () => {
	if (++index === 10) {
		return 'bar';
	}

	return 'foo';
});
//=> 'bar'
```

## API

### stableFunction(count?, testFunction)

Returns a boolean whether the output of `testFunction` was stable.

### stableFunction.returnValue(count?, testFunction)

Returns the first differing output of `testFunction` or the first output if stable.

#### count

Type: `number`
Default: `1000`

The number of times to call the `testFunction`.

#### testFunction

Type: `function`

The function to be tested.
