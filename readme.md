# stable-fn

> Ensure a function is stable, meaning the same input always produces the same output

Useful for stress testing functions in your unit tests to make sure their behaviors are consistent.

## Install

```
$ npm install stable-fn
```

## Usage

```js
import stableFunction from 'stable-fn';

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

Number of times to call the `testFunction`.

#### testFunction

Type: `function`

Function to be tested.
