module.exports = function (value, checkMethods) {
	return value && typeof value === 'object'
		&& typeof value.length === 'number'
		&& (!checkMethods || typeof value.splice === 'function');
};