# stable-fn [![Build Status](https://travis-ci.org/sindresorhus/stable-fn.svg?branch=master)](https://travis-ci.org/sindresorhus/stable-fn)

> Ensure a function is stable, meaning the same input always produces the same output

Useful for stress testing functions in your unit tests to make sure their behavior are consistent.


## Install

```
$ npm install --save stable-fn
```


## Usage

```js
var stableFn = require('stable-fn');

stableFn(function () {
	return true;
});
//=> true

var i = 0;
stableFn.val(100, function () {
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

### stableFn.val([count], fn)

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
