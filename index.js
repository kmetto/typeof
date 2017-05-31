"use strict";

module.exports = function(value) {
	if (value === null) {
		return "null";
	}

	var type = typeof value;

	if (type !== "object") {
		return type;
	}
	if (Array.isArray(value)) {
		return "array";
	}
	return "object";
};
