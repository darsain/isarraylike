var isArrayLike = require('isarraylike');
var assert = require('assert');

describe('isArrayLike', function () {
	it('should return false on non-objects', function () {
		assert(!isArrayLike(null), '`null` is not an ALO');
		assert(!isArrayLike(undefined), '`undefined` is not an ALO');
		assert(!isArrayLike(true), '`true` is not an ALO');
		assert(!isArrayLike(false), '`false` is not an ALO');
		assert(!isArrayLike(function () {}), '`function` is not an ALO');
		assert(!isArrayLike(''), '`string` is not an ALO');
		assert(!isArrayLike('abc'), '`string` is not an ALO');
	});
	it('should recognize simple array like objects', function () {
		assert(isArrayLike([]), '`[]` is a simple ALO');
		assert(isArrayLike(arguments), '`arguments` is a simple ALO');
		assert(isArrayLike({ length: 0 }), '`{ length: 0 }` is a simple ALO');
	});
	it('should fail on invalid array like objects', function () {
		assert(!isArrayLike({ length: 0.1 }), 'length of 0.1 is not valid');
	});
	it('should recognize only complex array like objects when requested', function () {
		assert(isArrayLike([], true), '[] is a complex ALO');
		assert(!isArrayLike(arguments, true), '`arguments` is not a complex ALO');
		assert(!isArrayLike({ length: 0 }, true), '`{ length: 0 }` is not a complex ALO');
		assert(isArrayLike({
			length: 0,
			splice: function () {}
		}, true), '`{ length: 0, splice: fn }` is a complex ALO');
	});
});