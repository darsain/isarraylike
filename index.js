module.exports = function (value, complex) {
	return value && typeof value === 'object'
		&& typeof value.length === 'number'
		&& (!complex || typeof value.splice === 'function');
};