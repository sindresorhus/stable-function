# stable-fn

> Ensure a function is stable, meaning the same input always produces the same output

Useful for stress testing functions in your unit tests to make sure their behaviors are consistent.


## Install

```
$ npm install stable-fn
```


## Usage

```js
const stableFn = require('stable-fn');

stableFn(() => true);
//=> true

let i = 0;
stableFn.returnValue(100, () => {
	if (++i === 10) {
		return 'bar';
	}

	return 'foo';
});
//=> 'bar'
```


## API

### stableFn([count], fn)

Returns a boolean whether the output of `fn` was stable.

### stableFn.returnValue([count], fn)

Returns the first differing output of `fn` or the first output if stable.

#### count

Type: `number`
Default: `1000`

Number of times to call the `fn`.

#### fn

Type: `function`

Function to be tested.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
