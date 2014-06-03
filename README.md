# isArrayLike

Check if value is a simple or complex array-like object.

## Install

With [component(1)](https://github.com/component/component):

```bash
component install darsain/isarraylike
```

## Usage

```js
var isArrayLike = require('isarraylike');

// simple
isArrayLike([]);            // > true
isArrayLike({ length: 0 }); // > true
isArrayLike(jQuery('div')); // > true

// complex
isArrayLike({ length: 0 }, true); // > false
isArrayLike({ length: 0, splice: function () {} }, true); // > true
```

## API

### isArrayLike(value, [complex])

Check whether value is an array like object - an object with length property which is a number.

When `complex` is true, it'll also check for a presence of array specific methods like `splice()`.

## Testing

To run tests:

```
component install --dev
component build --dev
```

And open `test/index.html`

## License

MIT